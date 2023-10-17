const express = require('express');
const restaurantController = require('../controllers/restaurantC');
const router = express.Router();

router.get('/', restaurantController.getAllRestaurants);
// Pending

module.exports = router;
