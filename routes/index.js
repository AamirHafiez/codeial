const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('Yipee!! Router is loaded');

router.use('/users', require('./users.js'));
router.get('/', homeController.home);

module.exports = router;