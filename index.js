const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const logger = require("./utils/logger");
const config = require("./utils/config");

mongoose.set("strictQuery", false);

const playlistSchema = new mongoose.Schema({
  name: String,
  creator: String,
  numOfSongs: Number,
  likes: Number,
});

const Playlist = mongoose.model("Playlist", playlistSchema);

mongoose
  .connect(config.dbUrl)
  .then(() => logger.info("DB connection established"))
  .catch(() => logger.error("Error connecting to database"));

app.use(cors());
app.use(express.json());

app.get("/api/playlists", async (request, response) => {
  const playlists = await Playlist.find({});
  response.json(playlists);
});

app.post("/api/playlists", async (request, response) => {
  const playlist = new Playlist(request.body);
  const savedPlaylist = await playlist.save();
  response.status(201).json(savedPlaylist);
});

app.listen(config.port, () => {
  logger.info(`Server listening on port ${config.port}`);
});
