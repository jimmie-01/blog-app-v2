const Post = require('../server/models/post');

// ROUTES

/**
 * GET /
 * Home Page
 */
module.exports.get_blog = async (req, res) => {

	try {
		const locals = {
			title: "Nodejs Blog-v2",
			Description: "Simple Blog Created with Nodejs, Express and MongoDB"
		}
	
		const data = await Post.find().sort({ createdAt: -1});
	
		res.render('index', { locals, data });
	} catch (error) {
		console.log(error);
	}
};

module.exports.get_about = (req, res) => {
	res.render('about');
};