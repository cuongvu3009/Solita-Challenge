const mongoose = require('mongoose');

const JourneySchem = new mongoose.Schema({
  Departure: {
    type: Date,
  },
  Return: {
    type: Date,
  },
  DepartureStationId: {
    type: Number,
  },
  DepartureStationName: {
    type: String,
  },
  ReturnStationId: {
    type: Number,
  },
  ReturnStationName: {
    type: String,
  },
  CoveredDistance: {
    type: Number,
  },
  Duration: {
    type: Number,
  },
});

module.exports = mongoose.model('Journey', JourneySchem);
