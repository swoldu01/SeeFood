const Restaurant = require('../models/restaurant');
const Dish = require('../models/dish');

exports.search = async (req, res) => {
    const query = req.query.q;
    const type = req.query.type;

    try {
        let results = [];
        if (type === 'restaurant') {
            //If type is 'restaurant', it searches the Restaurant collection for any documents where the name field matches the query value. The search is case-insensitive ('i' flag in the RegExp).
            results = await Restaurant.find({ name: new RegExp(query, 'i') });
        } else if (type === 'dish') {
            results = await Dish.find({ name: new RegExp(query, 'i') });
        }
        res.json(results);
    } catch (err) {
        res.status(500).json({ message: 'Error searching' });
    }
};
