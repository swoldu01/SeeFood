const express = require('express');
const dishController = require('../controllers/dishC');
const router = express.Router();

router.get('/', dishController.getAllDishes);

router.get('/:dishId', dishController.getDishById);


module.exports = router;
