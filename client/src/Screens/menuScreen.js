import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function MenuScreen(props) {
	const productList = useSelector((state) => state.productList);
	const { products, loading, error } = productList;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listProducts());
		return () => {};
	}, []);

	return (
		<div className="menu-container">
			{loading ? (
				<div> Loading.. </div>
			) : error ? (
				<div> {error} </div>
			) : (
				<ul className="menu-products">
					{products.map((product) => (
						<li key={product._id}>
							<div className="product-category">
								<h1> {product.category}</h1>
							</div>
							<div className="product-name">
								<Link to={'/product/' + product._id}>{product.name}</Link>
							</div>
							<div className="product-brand">{product.description}</div>
							<div className="product-price">${product.price}</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default MenuScreen;
