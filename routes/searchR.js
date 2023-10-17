const express = require('express');
const searchController = require('../controllers/searchC');
const router = express.Router();

router.get('/', searchController.search);

module.exports = router;
