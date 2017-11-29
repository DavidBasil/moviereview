var express = require('express');
var router = express.Router();
var ctrlMovies = require('../controllers/movies')
var ctrlOthers = require('../controllers/others')

// movies pages
router.get('/', ctrlMovies.homelist)
router.get('/movie', ctrlMovies.movieInfo)
router.get('/movie/review/new', ctrlMovies.addReview)

// other pages
router.get('/about', ctrlOthers.about)

module.exports = router;
