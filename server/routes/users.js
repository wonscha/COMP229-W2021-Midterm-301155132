/*
File name: index.js
Student’s Name: -
StudentID: 301155132
Date: 2021.03.04.
*/

// create an instance of router and import mongoose
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Placeholder');
});

// export router
module.exports = router;
