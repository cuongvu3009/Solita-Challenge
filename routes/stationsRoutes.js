const express = require('express');
const router = express.Router();

const {
  getAllStations,
  getSingleStation,
} = require('../controllers/stationsController');

router.route('/').get(getAllStations);
router.route('/:id').get(getSingleStation);

module.exports = router;
