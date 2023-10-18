const express = require('express');
const restaurantController = require('../controllers/restaurantC');
const router = express.Router();

router.get('/', restaurantController.getAllRestaurants);

router.get('/:id', restaurantController.getRestaurantById);

router.get('/:restaurantId/dishes/:dishId', restaurantController.getSpecificDishInRestaurant);

module.exports = router;
