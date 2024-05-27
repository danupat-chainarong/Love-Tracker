const express = require('express');
const Fight = require('../models/Fight');
const router = express.Router();

// Create a new fight
router.post('/', async (req, res) => {
  const fight = new Fight(req.body);
  await fight.save();
  res.send(fight);
});

// Get all fights
router.get('/', async (req, res) => {
  const fights = await Fight.find();
  res.send(fights);
});

module.exports = router;
