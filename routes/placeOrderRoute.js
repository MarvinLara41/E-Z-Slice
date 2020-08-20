const express = require('express');

const Order = require('../models/placeOrderModel');

const router = express.Router();

router.post('/placeorder', async (req, res) => {
	const newOrder = new Order({
		orderItems: req.body.orderItems,
		pizzaOptions: req.body.pizzaOptions,
		shipping: req.body.shipping,
		payment: req.body.payment,
		itemsPrice: req.body.itemsPrice,
		taxPrice: req.body.taxPrice,
		shippingPrice: req.body.shippingPrice,
		totalPrice: req.body.totalPrice,
	});
	const newOrderCreated = await newOrder.save();
	res.status(201).send({ message: 'New Order Created', data: newOrderCreated });
});

module.exports = router;
