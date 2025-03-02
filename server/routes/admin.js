const express = require('express').Router();
const router = express();
const Post = require('../models/post');

/**
 * GET
 * Admin - login Page
 */

router.get('/admin', (req, res) => {
	try {
		locals = {
			title: "Admin",
			Description: "Simple Blog created with NodeJs, express & MongoDb"
		}

		res.render('admin/index', { locals });

	} catch (error) {
		console.log(error);
	}
})

module.exports = router;