/*
File name: index.js
Student’s Name: -
StudentID: 301155132
Date: 2021.03.04.
*/

// create an instance of router and import mongoose
let express = require('express');
let router = express.Router();

// import indexController module
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/products', indexController.displayProductsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

// export router
module.exports = router;
