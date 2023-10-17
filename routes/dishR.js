const express = require('express');
const dishController = require('../controllers/dishC');
const router = express.Router();

router.get('/', dishController.getAllDishes);
// Pending routes

module.exports = router;
