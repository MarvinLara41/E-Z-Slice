const express = require('express');

const Order = require('../models/placeOrderModel');

const router = express.Router();

router.post('/', async (req, res) => {
	const newOrder = new Order({
		orderItems: req.body.orderItems,
		shipping: req.body.shipping,
		payment: req.body.payment,
		itemsPrice: req.body.itemsPrice,
		shippingPrice: req.body.shippingPrice,
		taxPrice: req.body.taxPrice,
		totalPrice: req.body.totalPrice,
	});
	const newOrderCreated = await newOrder.save();
	res.status(201).send({ message: 'New Order Created', data: newOrderCreated });
});

router.get('/:id', async (req, res) => {
	const order = await Order.findOne({ _id: req.params.id });

	if (order) {
		res.send(order);
	} else {
		res.status(404).send('Order Not Found.');
	}
});

module.exports = router;
