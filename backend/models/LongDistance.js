const mongoose = require('mongoose');

const longDistanceSchema = new mongoose.Schema({
  startDate: { type: Date },
  endDate: { type: Date },
  reason: String,
});

module.exports = mongoose.model('LongDistance', longDistanceSchema);
