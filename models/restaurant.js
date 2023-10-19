const mongoose = require('mongoose')
const {Schema} = mongoose;

const restaurantSchema = new Schema(
    {
    name: String,
    address: String,
    description: String,
    imageUrl: String,
    dishes: [{ type: Schema.Types.ObjectId, ref: 'Dish' }]
},
{ timestamps: true }
);

const Restaurant = mongoose.model('Restaurant', restaurantSchema)
module.exports = Restaurant;
