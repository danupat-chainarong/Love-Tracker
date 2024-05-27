const express = require('express');
const MovieSeries = require('../models/MovieSeries');
const router = express.Router();

// Create a new movie/series
router.post('/', async (req, res) => {
  const movieSeries = new MovieSeries(req.body);
  await movieSeries.save();
  res.send(movieSeries);
});

// Get all movies/series
router.get('/', async (req, res) => {
  const movieSeries = await MovieSeries.find();
  res.send(movieSeries);
});

module.exports = router;
