const express = require('express');
const HangoutParty = require('../models/HangoutParty');
const router = express.Router();

// Create a new hangout/party
router.post('/', async (req, res) => {
  const hangoutParty = new HangoutParty(req.body);
  await hangoutParty.save();
  res.send(hangoutParty);
});

// Get all hangouts/parties
router.get('/', async (req, res) => {
  const hangoutParties = await HangoutParty.find();
  res.send(hangoutParties);
});

module.exports = router;
