const mongoose = require('mongoose');

const StationSchema = new mongoose.Schema({
  FID: {
    type: Number,
  },
  ID: {
    type: Number,
  },
  Nimi: {
    type: String,
  },
  Namn: {
    type: String,
  },
  Osoite: {
    type: String,
  },
  Adress: {
    type: String,
  },
  Kaupunki: {
    type: String,
  },
  Stad: {
    type: String,
  },
  Operaattor: {
    type: String,
  },
  Kapasiteet: {
    type: String,
  },
  x: {
    type: Number,
  },
  y: {
    type: Number,
  },
});

module.exports = mongoose.model('Station', StationSchema);
