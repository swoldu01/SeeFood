const Dish = require('../models/dish');

// Get all dishes
exports.getAllDishes = async (req, res) => {
    try {
        const dishes = await Dish.find().populate('reviews');
        res.json(dishes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


