const express = require('express');

const Product = require('../models/productModel');

const router = express.Router();

router.get('/menu', async (req, res) => {
	const products = await Product.find({});
	res.send(products);
});

router.get('/:id', async (req, res) => {
	const products = await Product.findOne({ _id: req.params.id });

	if (products) {
		res.send(products);
	} else {
		res.status(404).send({ message: 'Product not found.' });
	}
});

router.post('/', async (req, res) => {
	const product = new Product({
		category: req.body.category,
		name: req.body.name,
		// image: req.body.image,
		description: req.body.description,
		price: req.body.price,
	});

	const newProduct = await product.save();

	if (newProduct) {
		return res
			.status(201)
			.send({ message: 'new product created', data: newProduct });
	}

	return res.status(500).send({ message: 'Error in creating product' });
});

module.exports = router;
