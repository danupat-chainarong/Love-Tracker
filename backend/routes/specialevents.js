const express = require('express');
const SpecialEvent = require('../models/SpecialEvent');
const router = express.Router();

// Create a new special event
router.post('/', async (req, res) => {
  const specialEvent = new SpecialEvent(req.body);
  await specialEvent.save();
  res.send(specialEvent);
});

// Get all special events
router.get('/', async (req, res) => {
  const specialEvents = await SpecialEvent.find();
  res.send(specialEvents);
});

module.exports = router;
