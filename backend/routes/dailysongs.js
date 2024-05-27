const express = require('express');
const DailySong = require('../models/DailySong');
const router = express.Router();

// Create a new daily song
router.post('/', async (req, res) => {
  const dailySong = new DailySong(req.body);
  await dailySong.save();
  res.send(dailySong);
});

// Get all daily songs
router.get('/', async (req, res) => {
  const dailySongs = await DailySong.find();
  res.send(dailySongs);
});

module.exports = router;
