const Restaurant = require('../models/restaurant');
const Dish = require('../models/dish')

// Get all restaurants
const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const getRestaurantById = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id).populate('dishes');
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        res.json(restaurant);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Route to fetch a specific dish within a specific restaurant
const getSpecificDishInRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.restaurantId);
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        const dish = await Dish.findOne({ _id: req.params.dishId, restaurant: req.params.restaurantId });
        if (!dish) {
            return res.status(404).json({ message: 'Dish not found in this restaurant' });
        }

        res.json(dish);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};

module.exports = {
    getAllRestaurants,
    getRestaurantById,
    getSpecificDishInRestaurant
};
