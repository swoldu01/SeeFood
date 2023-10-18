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

exports.getDishById = async (req, res) => {
    try {
        const dish = await Dish.findById(req.params.dishId);
        if (!dish) {
            return res.status(404).json({ message: 'Dish not found' });
        }
        res.json(dish);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

