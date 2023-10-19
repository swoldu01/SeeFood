const mongoose = require('mongoose');
const Restaurant = require('./models/restaurant');
const User = require('./models/user');
const Dish = require('./models/dish');
const Review = require('./models/review');

mongoose.connect('mongodb://127.0.0.1:27017/seefood', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', async () => {
    console.log('Connected to the database');

    // Clear the database
    await Restaurant.deleteMany({});
    await User.deleteMany({});
    await Dish.deleteMany({});
    await Review.deleteMany({});

// Seed data

// User Data
const user1 = new User({
    username: "johnDoe",
    email: "john@example.com",
    password: "password123"
});
await user1.save();

const user2 = new User({
    username: "janeDoe",
    email: "jane@example.com",
    password: "password456"
});
await user2.save();

// Dish Data
const dish1 = new Dish({
    name: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
   
});
await dish1.save();

const dish2 = new Dish({
    name: "Butter Chicken",
    description: "A rich and creamy tomato-based curry with tender chicken pieces.",
    
});
await dish2.save();

// Restaurant Data
const restaurant1 = new Restaurant({
    name: "The Tasty Spoon",
    address: "123 Food St, Food City, FC 12345",
    cuisine: "Italian",
    dishes: [dish1._id] 
});
await restaurant1.save();

const restaurant2 = new Restaurant({
    name: "Spicy Corner",
    address: "456 Spice Rd, Food City, FC 12345",
    cuisine: "Indian",
    dishes: [dish2._id]  
});
await restaurant2.save();

// Update the dish with the restaurant reference
dish1.restaurant = restaurant1._id;
await dish1.save();

dish2.restaurant = restaurant2._id;
await dish2.save();

// Review Data
const review1 = new Review({
    user: user1._id,
    dish: dish1._id,
    rating: 5,
    comment: "Absolutely delicious! Would definitely order again."
});
await review1.save();

const review2 = new Review({
    user: user2._id,
    dish: dish2._id,
    rating: 4,
    comment: "Very flavorful and creamy. A bit too spicy for my taste, but still great!"
});
await review2.save();

    console.log('Database seeded!');
    mongoose.connection.close();
});
