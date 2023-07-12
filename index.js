const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
  name: String,
  creator: String,
  numOfSongs: Number,
  likes: Number,
});

const Playlist = mongoose.model("Playlist", playlistSchema);

const dbUrl = "mongodb://localhost/playlist";
mongoose.connect(dbUrl);

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

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
