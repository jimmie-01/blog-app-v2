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

		let perPage = 10;
		let page = req.query.page || 1;
	
		const data = await Post.aggregate([ { $sort: { createdAt: -1 } } ])
		.skip(perPage * page - perPage)
		.limit(perPage)
		.exec();

		const count = await Post.count();
		const nextPage = parseInt(page) + 1;
		const hasNextPage = nextPage <= Math.ceil(count / perPage);

		res.render('index', { 
			locals, 
			data,
			current: page,
			nextPage: hasNextPage ? nextPage : null
		 });
	} catch (error) {
		console.log(error);
	}
};

module.exports.get_about = (req, res) => {
	res.render('about');
};