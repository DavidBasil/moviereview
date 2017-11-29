// get home page
module.exports.homelist = function(req, res){
	res.render('movies-list', { title: 'Home' })
}

// get movie info page
module.exports.movieInfo = function(req, res){
	res.render('movie-info', { title: 'Movie info' })
}

// get add review page
module.exports.addReview = function(req, res){
	res.render('index', { title: 'Add review' })
}

