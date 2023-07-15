const express = require("express");
const playlistsRouter = express.Router();
const Playlist = require("../models/playlist");

playlistsRouter.get("/", async (request, response) => {
  const playlists = await Playlist.find({});
  response.json(playlists);
});

playlistsRouter.post("/", async (request, response) => {
  const playlist = new Playlist(request.body);
  const savedPlaylist = await playlist.save();
  response.status(201).json(savedPlaylist);
});

module.exports = playlistsRouter;