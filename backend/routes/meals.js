const express = require('express');
const Meal = require('../models/Meal');
const router = express.Router();

// Create a new meal
router.post('/', async (req, res) => {
  const meal = new Meal(req.body);
  await meal.save();
  res.send(meal);
});

// Get all meals
router.get('/', async (req, res) => {
  const meals = await Meal.find();
  res.send(meals);
});

module.exports = router;
