require('dotenv').config();

//	populate journeys
const data = require('./data/journeys.json');
const Journey = require('./models/Journey');

//	populate stations
// const data = require('../data/stations.json');
// const Station = require('../models/Station');

const connectDB = require('./db/connect');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Journey.deleteMany();
    await Journey.create(data);
    // await Station.deleteMany();
    // await Station.create(data);
    console.log('populated successfully');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
