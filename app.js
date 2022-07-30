require('dotenv').config();
const express = require('express');
const app = express();

//	packages
const cors = require('cors');

//	database
const connectDB = require('./db/connect');

//	routes
const journeysRouter = require('./routes/journeysRoutes');
const stationsRouter = require('./routes/stationsRoutes');

//	middleware
app.use(express.json());
app.use(cors());

//	routing
app.get('/', (req, res) => {
  res.send('Server running');
});

app.use('/api/v1/journeys', journeysRouter);
app.use('/api/v1/stations', stationsRouter);

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
