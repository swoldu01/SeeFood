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

const user3 = new User({
    username: "aliceW",
    email: "alice@example.com",
    password: "alicepass789"
});
await user3.save();

const user4 = new User({
    username: "bobT",
    email: "bob@example.com",
    password: "bobpass012"
});
await user4.save();

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

const dish3 = new Dish({
    name: "Sushi Platter",
    description: "An assortment of fresh sushi including salmon, tuna, and eel.",
});
await dish3.save();

const dish4 = new Dish({
    name: "Beef Taco",
    description: "A crispy taco filled with spiced beef, lettuce, and cheese.",
});
await dish4.save();

// Additional Dishes for Restaurant 1: The Tasty Spoon (Italian)
const dish5 = new Dish({
    name: "Margherita Pizza",
    description: "Traditional pizza with tomato sauce, mozzarella cheese, fresh basil, and olive oil.",
});
await dish5.save();

const dish6 = new Dish({
    name: "Tiramisu",
    description: "A classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese, topped with cocoa powder.",
});
await dish6.save();

// Additional Dishes for Restaurant 2: Spicy Corner (Indian)
const dish7 = new Dish({
    name: "Paneer Tikka Masala",
    description: "Grilled paneer cubes in a creamy tomato gravy, seasoned with aromatic spices.",
});
await dish7.save();

const dish8 = new Dish({
    name: "Gulab Jamun",
    description: "A sweet dessert made from milk solids, deep-fried and soaked in a sugary syrup.",
});
await dish8.save();

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

const restaurant3 = new Restaurant({
    name: "Sushi Palace",
    address: "789 Ocean Ave, Fish City, FC 12345",
    cuisine: "Japanese",
    dishes: [dish3._id]
});
await restaurant3.save();

const restaurant4 = new Restaurant({
    name: "Taco House",
    address: "101 Taco Blvd, Food City, FC 12345",
    cuisine: "Mexican",
    dishes: [dish4._id]
});
await restaurant4.save();

// Add the dishes to the restaurant's dishes array
restaurant1.dishes.push(dish5._id, dish6._id);
await restaurant1.save();

restaurant2.dishes.push(dish7._id, dish8._id);
await restaurant2.save();

// Update the dish with the restaurant reference
dish1.restaurant = restaurant1._id;
await dish1.save();

dish2.restaurant = restaurant2._id;
await dish2.save();

dish3.restaurant = restaurant3._id;
await dish3.save();

dish4.restaurant = restaurant4._id;
await dish4.save();

dish5.restaurant = restaurant1._id;
await dish5.save();

dish6.restaurant = restaurant1._id;
await dish6.save();

dish7.restaurant = restaurant2._id;
await dish7.save();

dish8.restaurant = restaurant2._id;
await dish8.save();

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

const review3 = new Review({
    user: user3._id,
    dish: dish3._id,
    rating: 5,
    comment: "So fresh and delicious! Love the variety in the platter."
});
await review3.save();

const review4 = new Review({
    user: user4._id,
    dish: dish4._id,
    rating: 3,
    comment: "It was okay, could have used more toppings and a bit more spice."
});
await review4.save();

    console.log('Database seeded!');
    mongoose.connection.close();
});
