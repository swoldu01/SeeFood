const Review = require('../models/review');

// Get all reviews
exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate('user').populate('dish');
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


