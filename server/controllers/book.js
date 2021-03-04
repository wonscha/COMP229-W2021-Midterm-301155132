/*
File name: book.js
Student’s Name: Wonsuk Cha
StudentID: 301155132
Date: 2021.03.04.
*/

// import modules
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Book = require('../models/book');

// controller: display book list page
module.exports.displayBookList = (req, res, next) => {
    Book.find((err, bookList) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.render('book/list', { title: 'Books', BookList: bookList });
        }
    });
}

// controller: display book add page
module.exports.displayAddPage = (req, res, next) => {
    res.render('book/add', { title: 'Add Book' })
}

// controller: process book add page
module.exports.processAddPage = (req, res, next) => {
    let newBook = Book({
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });

    Book.create(newBook, (err, Book) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/book-list');
        }
    });

}

// controller: display edit page
module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Book.findById(id, (err, book) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.render('book/edit', {
                title: 'Edit Book',
                book: book
            })
        }
    })
}

// controller: procee edit page
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    updatedBook = {
        name: req.body.name,
        author: req.body.author,
        published: req.body.published,
        description: req.body.description,
        price: req.body.price
    }

    Book.updateOne({ _id: id }, updatedBook, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/book-list');
        }
    })
}

// controller: perform delete
module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Book.deleteOne({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/book-list');
        }
    })
}