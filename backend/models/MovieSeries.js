const mongoose = require('mongoose');

const movieSeriesSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  title: String,
  description: String,
});

module.exports = mongoose.model('MovieSeries', movieSeriesSchema);
