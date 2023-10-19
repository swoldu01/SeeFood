const mongoose = require('mongoose')
const {Schema} = mongoose;

const reviewSchema = new Schema(
    {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    dish: { type: Schema.Types.ObjectId, ref: 'Dish' },
    rating: Number,
    comment: String,
    date: { type: Date, default: Date.now }
},
{ timestamps: true }
);
const Review = mongoose.model('Review', reviewSchema)
module.exports = Review;