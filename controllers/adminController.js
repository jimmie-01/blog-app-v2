
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

		res.render('admin/index', { locals, layout: adminLayout });

	} catch (error) {
		console.log(error);
	}
};