import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';

function CartScreen(props) {
	//get access to cart
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const productId = props.match.params.id;

	//qty grabs the qty from the productscreen props.location.search.split seperates the that using the split method after the "=" sign, grabbing the number to the right of that.
	const qty = props.location.search
		? Number(props.location.search.split('='[1]))
		: 1;

	const disptach = useDispatch();

	useEffect(() => {
		if (productId) {
			disptach(addToCart(productId, qty));
		}
	}, []);

	return (
		<div className="cart-container">
			<div className="cart-list">
				<li>Shopping Cart</li>
				<li>Price</li>
				<li>
					{cartItems.length === 0 ? (
						<div>
							<h2> Cart is Empty. </h2>
						</div>
					) : (
						cartItems.map((item) => (
							<div>
								<div>{item.name}</div>

								<div>
									Qty:
									<select>
										<option value="1"> 1 </option>
										<option value="2"> 2 </option>
										<option value="3"> 3 </option>
										<option value="4"> 4 </option>
										<option value="5"> 5 </option>
									</select>
								</div>

								<div>{item.price}</div>
							</div>
						))
					)}
				</li>
			</div>

			<div className="cart-action">
				<h3>
					{' '}
					SubTotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
					{cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
				</h3>
				<button className="cart-button" disabled={cartItems.length === 0}>
					Proceed To Checkout
				</button>
			</div>
		</div>
	);
}

export default CartScreen;