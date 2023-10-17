const mongoose = require('mongoose')
const {Schema} = mongoose;

const dishSchema = new Schema(
    {
    name: String,
    description: String,
    imageUrl: String,
    restaurant: { type: Schema.Types.ObjectId, ref: 'restaurant' },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'review' }]
},
{ timestamps: true }
);
const Dish = mongoose.model('dish', dishSchema)
module.exports = Dish;
