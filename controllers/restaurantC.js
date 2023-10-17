const Restaurant = require('../models/restaurant');

// Get all restaurants
exports.getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


