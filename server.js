const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const PORT = process.env.PORT || 4444;
require('dotenv').config();

/** Routes **/
const productRoute = require('./routes/productRoute');
const orderRoute = require('./routes/placeOrderRoute');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
} else {
	app.use(express.static('client/public'));
}

const mongodbURI = config.MONGODB_URI;

mongoose
	.connect(mongodbURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.catch((error) => console.log(error.reason));

// API

app.use(cors());

app.use('/api/products', productRoute);

app.use('/api/', orderRoute);

app.get('/api/config/paypal', (req, res) => {
	res.send(config.PAYPAL_CLIENT_ID);
});

app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
