const express = require("express");
const playlistsRouter = express.Router();
const Playlist = require("../models/playlist");

playlistsRouter.get("/", async (request, response, next) => {
  try {
    const playlists = await Playlist.find({});
    response.json(playlists);
  } catch (error) {
    next(error);
  }
});

playlistsRouter.post("/", async (request, response, next) => {
  try {
    const playlist = new Playlist(request.body);

    if (!playlist.name || !playlist.creator) {
      return response
        .status(400)
        .json({ error: "Both 'name' and 'creator' are required." });
    }

    const savedPlaylist = await playlist.save();
    response.status(201).json(savedPlaylist);
  } catch (error) {
    next(error);
  }
});

module.exports = playlistsRouter;
