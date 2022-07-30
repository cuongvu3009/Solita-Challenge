const Journey = require('../models/Journey');

const getAllJourney = async (req, res) => {
  const journeys = await Journey.find({});
  res.status(200).json({ journeys });
};

const getSingleJourney = async (req, res) => {
  res.send('get single journey');
};

const createJourney = async (req, res) => {
  res.send('create journey');
};

const deleteJorney = async (req, res) => {
  res.send('delete journey');
};

const updateJourney = async (req, res) => {
  res.send('Update journey');
};

module.exports = {
  getAllJourney,
  getSingleJourney,
  createJourney,
  deleteJorney,
  updateJourney,
};
