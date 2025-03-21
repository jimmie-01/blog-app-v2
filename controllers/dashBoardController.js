const Post = require('../server/models/Post');

const adminLayout = '../views/layouts/admin';


/**
 * GET
 * Admin - Dashboard
 */

module.exports.get_dashboard = async(req, res) => {
	try {
		const locals = {
			title: "Dashboard",
			description: "Simple Blog created with NodeJs, express & MongoDb"
		}
		const data = await Post.find();
		res.render('admin/dashboard', {
			locals,
			data,
			layout: adminLayout
		});
	} catch(error) {
		console.log(error);
	}
};

/**
 * GET /
 * Admin - Create New Post
 */

module.exports.get_add_post = (req, res) => {
	try {
		const locals = {
			title: "Add Post",
			description: "Simple Blog Created with Nodejs, express & MongoDb"
		}
		res.render('admin/add-post', {
			locals,
			layout: adminLayout
		})

	} catch (error) {
		console.log(error);
	}
};

/**
 * POST /
 * Dashboard - Create New Post
 */

module.exports.post_add_post = async(req, res) => {
	try {
		const newPost = await new Post({
			title: req.body.title,
			body: req.body.body
		});
		await Post.create(newPost);
		res.redirect('dashboard');
	} catch (error) {
		console.log(error);
	}
};