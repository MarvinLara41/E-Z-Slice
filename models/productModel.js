const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	category: { type: String, required: true },
	name: { type: String, required: true },
	// image: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, default: 0, required: true },
});

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;
