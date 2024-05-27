const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  type: String,
  restaurantName: String,
  location: String,
});

module.exports = mongoose.model('Meal', mealSchema);
