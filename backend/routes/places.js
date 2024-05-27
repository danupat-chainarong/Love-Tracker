const express = require('express');
const Place = require('../models/Place');
const router = express.Router();

// Create a new place
router.post('/', async (req, res) => {
  const place = new Place(req.body);
  await place.save();
  res.send(place);
});

// Get all places
router.get('/', async (req, res) => {
  const places = await Place.find();
  res.send(places);
});

module.exports = router;
