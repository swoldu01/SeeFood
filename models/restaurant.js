const mongoose = require('mongoose')
const {Schema} = mongoose;

const restaurantSchema = new Schema(
    {
    name: String,
    address: String,
    description: String,
    imageUrl: String,
    dishes: [{ type: Schema.Types.ObjectId, ref: 'dish' }]
},
{ timestamps: true }
);

const Restaurant = mongoose.model('restaurant', restaurantSchema)
module.exports = Restaurant;
