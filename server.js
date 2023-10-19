const db = require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

db.connect();


const restaurantRoutes = require('./routes/restaurantR');
const userRoutes = require('./routes/userR');
const dishRoutes = require('./routes/dishR');
const reviewRoutes = require('./routes/reviewR');
const searchRoutes = require('./routes/searchR');


app.get('/', (req, res) => {
    res.send('This is root!')
  })
  
app.use('/restaurants', restaurantRoutes);
app.use('/users', userRoutes);
app.use('/dishes', dishRoutes);
app.use('/reviews', reviewRoutes);
app.use('/dishes/:dishId/reviews', reviewRoutes);
app.use('/search', searchRoutes);

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })