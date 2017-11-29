// get home page
module.exports.homelist = function(req, res){
	res.render('index', { title: 'Home' })
}

// get movie info page
module.exports.movieInfo = function(req, res){
	res.render('index', { title: 'Movie info' })
}

// get add review page
module.exports.addReview = function(req, res){
	res.render('index', { title: 'Add review' })
}
