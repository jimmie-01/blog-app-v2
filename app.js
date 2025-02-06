const express = require('express');
const dotenv = require('dotenv');

const expressLayout = require('express-ejs-layouts');
const connectDB = require('./server/config/db');

dotenv.config();

const app = express();
const PORT = 5000 || process.env.PORT;

// Connect to  DB
connectDB();

app.use(express.static('public'));

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use('/', require('./server/routes/main'));

app.listen(5000, () => {
	console.log(`App listening on port ${PORT}`);
});