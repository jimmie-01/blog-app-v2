const User = require('../server/models/User');

const adminLayout = '../views/layouts/admin';
/**
 * GET
 * Admin - login Page
 */

module.exports.get_login = (req, res) => {
	try {
		const locals = {
			title: "Admin",
			Description: "Simple Blog created with NodeJs, express & MongoDb"
		}

		res.render('admin/login', { locals, layout: adminLayout });

	} catch (error) {
		console.log(error);
	}
};

/**
 * POST
 * Admin - Check login
 */

module.exports.post_login = async(req, res) => {
	try {
		const locals = {
			title: "",
			description: ""
		}
		const { email, password} = req.body
	} catch (error) {
		console.log(error);
	};
};