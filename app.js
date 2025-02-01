const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = 5000 || process.env.PORT;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(5000, () => {
	console.log(`App listening on port ${PORT}`);
});