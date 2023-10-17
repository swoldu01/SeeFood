const mongoose = require('mongoose')
const {Schema} = mongoose;

const reviewSchema = new Schema(
    {
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    dish: { type: Schema.Types.ObjectId, ref: 'dish' },
    rating: Number,
    comment: String,
    date: { type: Date, default: Date.now }
},
{ timestamps: true }
);
const Review = mongoose.model('review', reviewSchema)
module.exports = Review;