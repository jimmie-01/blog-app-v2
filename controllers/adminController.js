const User = require('../server/models/User');
const bcrypt = require('bcrypt');
const e = require('express');
const jwt = require('jsonwebtoken');

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

/**
 * POST
 * Admin - Register
 */

module.exports.post_register = async (req, res) => {
	try {
		const { email, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);
		try {
			const user = await User.create({ email, password: hashedPassword });
			res.status(201).json({ message: "User created", user });
		} catch (error) {
			console.log(error);
		}
		console.log({ email, password: hashedPassword });
	} catch (error) {
		console.log(error);
	}
};