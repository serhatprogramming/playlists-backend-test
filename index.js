const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const logger = require("./utils/logger");
const config = require("./utils/config");

const playlistsRouter = require("./controllers/playlists");

mongoose.set("strictQuery", false);
mongoose
  .connect(config.dbUrl)
  .then(() => logger.info("DB connection established"))
  .catch(() => logger.error("Error connecting to database"));

app.use(cors());
app.use(express.json());
app.use("/api/playlists", playlistsRouter);

app.listen(config.port, () => {
  logger.info(`Server listening on port ${config.port}`);
});
