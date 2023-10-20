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

// const getRestaurantWithDishes = async (req, res) => {
//     try {
//         // Fetch the restaurant
//         const restaurant = await Restaurant.findById(req.params.id);
        
//         if (!restaurant) {
//             return res.status(404).json({ message: 'Restaurant not found' });
//         }

//         // Fetch the dishes related to the restaurant
//         const dishes = await Dish.find({ '_id': { $in: restaurant.dishes } });

//         // Attach the dishes to the restaurant object
//         restaurant.dishes = dishes;

//         res.json(restaurant);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };


// Route to fetch a specific dish within a specific restaurant
const getSpecificDishInRestaurant = async (req, res) => {
    try {
        const dish = await Dish.findOne({ _id: req.params.dishId, restaurant: req.params.restaurantId });
        if (!dish) {
            return res.status(404).json({ message: 'Dish not found in this restaurant' });
        }

        res.json(dish);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

module.exports = {
    getAllRestaurants,
    getRestaurantById,
    getSpecificDishInRestaurant
};
