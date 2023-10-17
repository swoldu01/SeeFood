const express = require('express');
const userController = require('../controllers/userC');
const router = express.Router();

router.get('/', userController.getAllUsers);
// Pending

module.exports = router;
