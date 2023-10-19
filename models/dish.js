const mongoose = require('mongoose')
const {Schema} = mongoose;

const dishSchema = new Schema(
    {
    name: String,
    description: String,
    imageUrl: String,
    restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
},
{ timestamps: true }
);
const Dish = mongoose.model('Dish', dishSchema)
module.exports = Dish;
