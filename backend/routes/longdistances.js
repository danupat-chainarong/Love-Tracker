const express = require('express');
const LongDistance = require('../models/LongDistance');
const router = express.Router();

// Create a new long-distance period
router.post('/', async (req, res) => {
  const longDistance = new LongDistance(req.body);
  await longDistance.save();
  res.send(longDistance);
});

// Get all long-distance periods
router.get('/', async (req, res) => {
  const longDistances = await LongDistance.find();
  res.send(longDistances);
});

module.exports = router;
