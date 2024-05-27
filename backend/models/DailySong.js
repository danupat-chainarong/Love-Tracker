const mongoose = require('mongoose');

const dailySongSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  songTitle: String,
  artist: String,
});

module.exports = mongoose.model('DailySong', dailySongSchema);
