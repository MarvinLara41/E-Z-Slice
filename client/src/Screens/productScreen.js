import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props) {
	const [qty, setQty] = useState(1);
	const productDetails = useSelector((state) => state.productDetails);
	const { product, loading, error } = productDetails;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(detailsProduct(props.match.params.id));
		return () => {};
	}, []);

	const handleAddToCart = () => {
		props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
	};

	return (
		<div>
			<div className="back-to-result">
				<Link to="/menu"> Back to results </Link>
			</div>
			{loading ? (
				<div> loading...</div>
			) : error ? (
				<div> {error}</div>
			) : (
				<div className="product-details">
					{/* <div className="product-image">
						<img src={product.image} alt="product"></img>
					</div> */}
					<div className="product-info">
						<ul>
							<li>
								<h4>{product.name}</h4>
							</li>

							<li>
								Price:<b>${product.price}</b>
							</li>
							<li>
								Description:
								{product.description}
							</li>
							<li>
								<button onClick={handleAddToCart} className="button">
									Add To Cart
								</button>
							</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
}

export default ProductScreen;
