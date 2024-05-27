const mongoose = require('mongoose');

const specialEventSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  event: String,
  description: String,
});

module.exports = mongoose.model('SpecialEvent', specialEventSchema);
