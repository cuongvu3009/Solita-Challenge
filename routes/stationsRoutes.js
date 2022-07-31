const express = require('express');
const router = express.Router();

const {
  getAllStations,
  getSingleStation,
  createStation,
} = require('../controllers/stationsController');

router.route('/').get(getAllStations).post(createStation);
router.route('/:id').get(getSingleStation);

module.exports = router;
