/*
File name: book.js
Student’s Name: -
StudentID: 301155132
Date: 2021.03.04.
*/

// create an instance of router
let express = require('express');
let router = express.Router();

// controller: display home page
module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home' });
}

// controller: display about page
module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About' });
}

// controller: display products page
module.exports.displayProductsPage = (req, res, next) => {
    res.render('index', { title: 'Products' });
}

// controller: display services page
module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', { title: 'Services' });
}

// controller: display contact page
module.exports.displayContactPage = (req, res, next) => {
    res.render('index', { title: 'Contact' });
}