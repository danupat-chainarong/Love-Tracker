// models/Fight.js
const mongoose = require('mongoose');

const fightSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  initiator: String,
  apologizer: String,
});

module.exports = mongoose.model('Fight', fightSchema);
