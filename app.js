const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

const expressLayout = require('express-ejs-layouts');
const connectDB = require('./server/config/db');

dotenv.config();

const app = express();
const PORT = 5000 || process.env.PORT;

// Connect to  DB
connectDB();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));

app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	store: MongoStore.create({
		mongoUrl: process.env.MONGODB_URI
	}),
	//cookie: { maxAge: new Date(Date.now() + (3600000) ) }
}));

app.use(express.static('public'));

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use('/', require('./server/routes/main'));
app.use('/', require('./server/routes/admin'));
app.use('/', require('./server/routes/dashboard'));

app.listen(5000, () => {
	console.log(`App listening on port ${PORT}`);
});