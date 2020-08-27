const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	MONGODB_URI: process.env.MONGODB_URI,
	PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
	PAYPAL_SECRET: process.env.PAYPAL_SECRET,
};
