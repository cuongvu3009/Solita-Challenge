const express = require('express');
const router = express.Router();

const {
  getAllJourney,
  createJourney,
  deleteJorney,
  getSingleJourney,
} = require('../controllers/journeysController');

router.route('/').get(getAllJourney).post(createJourney);
router.route('/:id').get(getSingleJourney).delete(deleteJorney);

module.exports = router;
