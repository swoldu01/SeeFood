const Review = require('../models/review');


exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate('user').populate('dish');
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createReview = async (req, res) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.status(201).json(review);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getReviewsByDish = async (req, res) => {
    try {
        const reviews = await Review.find({ dish: req.params.dishId }).populate('user');
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.json(review);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.json({ message: 'Review deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



