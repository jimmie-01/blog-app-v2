const User = require('../server/models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Post = require('../server/models/Post');

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
		const { email, password } = req.body
		const user = await User.findOne( { email } );

		if(!user){
			return res.status(401).json({ message: 'Invalid Credentials' });
		}

		const isPasswordValid = await bcrypt.compare(password, user.password);

		if(!isPasswordValid){
			return res.status(401).json({ message: 'Invalid Credentials' });
		}
		
		const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET);
		res.cookie('blog_token', token, { httpOnly: true});
		res.redirect('/dashboard');
	} catch (error) {
		console.log(error)
	};
};


/**
 * POST
 * Admin - Register
 */

module.exports.post_register = async (req, res) => {
	try {
		const { email, password } = req.body;
		console.log({ email, password });
		const hashedPassword = await bcrypt.hash(password, 10);
		try {
			const user = await User.create({ email, password: hashedPassword });
			res.status(201).json({ message: "User created", user });
		} catch (error) {
			if(error.code === 11000) {
				res.status(409).json({ message: 'User Already in use'});
			}
			res.status(500).json({ message: 'Internal Server Error'});
		}
	} catch (error) {
		console.log(error);
	}
};