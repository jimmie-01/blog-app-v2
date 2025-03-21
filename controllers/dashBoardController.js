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
		res.redirect('/dashboard');
	} catch (error) {
		console.log(error);
	}
};

/**
 * GET /
 * Dashboard - Edit Post
 */
module.exports.get_edit_post = async(req ,res) => {
	try {

		const locals = {
			title: "Edit Post",
			description: "Free NodeJs User Management" 
		};
		const data = await Post.findOne({ _id: req.params.id });
		
		res.render('admin/edit-post', {
			locals,
			data,
			layout: adminLayout
		});
	} catch (error) {
		console.log(error);
	}
};

/**
 * PUT /
 * Dashboard - Edit Post
 */

module.exports.put_edit_post = async(req, res) => {
	try {
		await Post.findByIdAndUpdate(req.params.id, {
			title: req.body.title,
			body: req.body.body,
			updatedAt: Date.now()
		});
		res.redirect(`/edit-post/${req.params.id}`);
	} catch (error) {
		console.log(error);
	}
};

/**
 * DELETE /
 * Dashboard - Delete Post
 */

module.exports.delete_post = async(req, res) => {

	try {
		await Post.deleteOne({ _id: req.params.id});

		res.redirect('/dashboard');
	} catch (error) {
		console.log(error);
	}
}