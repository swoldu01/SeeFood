const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/seefood', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Successfully connected to MongoDB.');
    } catch (e) {
        console.error('Connection error', e.message);
    }
};

module.exports = {
    connect: connectDB,
    connection: mongoose.connection
};
