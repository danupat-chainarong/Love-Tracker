const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  location: String,
  description: String,
});

module.exports = mongoose.model('Place', placeSchema);
