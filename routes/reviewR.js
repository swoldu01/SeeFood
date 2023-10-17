const express = require('express');
const reviewController = require('../controllers/reviewC');
const router = express.Router();

router.get('/', reviewController.getAllReviews);
// Pending

module.exports = router;
