const mongoose = require('mongoose');

const hangoutPartySchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  location: String,
  description: String,
});

module.exports = mongoose.model('HangoutParty', hangoutPartySchema);
