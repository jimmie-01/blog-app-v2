const Post = require('../server/models/Post');


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
			data
		});
	} catch(error) {
		console.log(error);
	}
};
