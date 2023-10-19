const express = require('express');
const reviewController = require('../controllers/reviewC');
const router = express.Router({ mergeParams: true });

router.get('/', reviewController.getAllReviews);

router.post('/', reviewController.createReview);

router.get('/', reviewController.getReviewsByDish);

router.put('/:id', reviewController.updateReview);

router.delete('/:id', reviewController.deleteReview);


module.exports = router;
