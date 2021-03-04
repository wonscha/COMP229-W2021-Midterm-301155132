/*
File name: book.js
Student’s Name: -
StudentID: 301155132
Date: 2021.03.04.
*/

// import mongoose module
let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: String
}, {
    collection: "books"
})

// export model 
module.exports = mongoose.model('Book', bookModel);