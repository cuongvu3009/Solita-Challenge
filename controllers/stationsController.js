const Station = require('../models/Station');

const createStation = async (req, res) => {
  const station = await Station.create(req.body);
  res.status(200).json(station);
};

const getAllStations = async (req, res) => {
  const stations = await Station.find({});
  res.status(200).json(stations);
};

const getSingleStation = async (req, res) => {
  const { id } = req.params;
  const station = await Station.findOne({ _id: id });
  res.status(200).json(station);
};

module.exports = { getAllStations, getSingleStation, createStation };
