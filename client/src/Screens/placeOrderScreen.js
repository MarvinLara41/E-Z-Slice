import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/checkOutSteps';
import { createOrder } from '../actions/orderActions';

function PlaceOrderScreen(props) {
	const cart = useSelector((state) => state.cart);
	const orderCreate = useSelector((state) => state.orderCreate);
	const { loading, success, error, order } = orderCreate;

	const { cartItems, shipping, payment } = cart;

	if (!shipping.address) {
		props.history.push('/shipping');
	} else if (!payment.paymentMethod) {
		props.history.push('/payment');
	}

	const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
	const deliveryPrice = itemsPrice > 100 ? 0 : 3;
	const taxPrice = 0.15 * itemsPrice;
	const totalPrice = itemsPrice + deliveryPrice + taxPrice;

	const dispatch = useDispatch();

	const placeOrderHandler = (e) => {
		e.preventDefault();
		// create an order
		dispatch(
			createOrder({
				orderItems: cartItems,
				shipping,
				payment,
				itemsPrice,
				deliveryPrice,
				taxPrice,
				totalPrice,
			})
		);
	};

	useEffect(() => {
		if (success) {
			props.history.push('/order/' + order._id);
		}
	}, [success]);

	return (
		<div>
			<div className="placeorder">
				<CheckoutSteps step1 step2 step3 step4></CheckoutSteps>{' '}
				<div className="placeorder-data">
					<div className="placeorder-info">
						<div className="placeorder-shipping">
							<h3>Shipping</h3>
							<div>
								{cart.shipping.address}, {cart.shipping.city},
								{cart.shipping.state},{cart.shipping.postalCode},
								{cart.shipping.country},
							</div>
						</div>
						<div className="placeorder-payment">
							<h3>Payment</h3>
							<div>Payment Method: {cart.payment.paymentMethod}</div>
						</div>
						<div>
							<ul className="cart-list-container">
								<li>
									<h3>Shopping Cart Items</h3>
								</li>
								{cartItems.length === 0 ? (
									<div>Cart is empty</div>
								) : (
									cartItems.map((item) => (
										<li>
											{/* <div className="cart-image">
											<img src={item.image} alt="product" />
										</div> */}
											<div className="cart-name">
												<div>
													<Link to={'/product/' + item.product}>
														{item.name}
													</Link>
												</div>
												<div>Qty: {item.qty}</div>
											</div>
											<div className="cart-price">
												Price each: ${item.price}
											</div>
										</li>
									))
								)}
							</ul>
						</div>
					</div>
					<div className="placeorder-action">
						<ul>
							<li>
								<button
									className="placeorder-button"
									onClick={placeOrderHandler}
								>
									Place Order
								</button>
							</li>
							<li>
								<h3>Order Summary</h3>
							</li>
							<li>
								<div>Items</div>
								<div>${itemsPrice}</div>
							</li>
							<li>
								<div>Delivery </div>
								<div>${deliveryPrice}</div>
							</li>
							<li>
								<div>Tax</div>
								<div>${taxPrice}</div>
							</li>
							<li>
								<div>Order Total</div>
								<div>${totalPrice}</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PlaceOrderScreen;
