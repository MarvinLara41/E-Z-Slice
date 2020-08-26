import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

/** Screens */

import LandingScreen from './Screens/landingScreen';
import MenuScreen from './Screens/menuScreen';
import ProductScreen from './Screens/productScreen';
import CartScreen from './Screens/cartScreen';
import ShippingScreen from './Screens/shippingScreen';
import PaymentScreen from './Screens/paymentScreen';
import PlaceOrderScreen from './Screens/placeOrderScreen';
import DetailsOrderScreen from './Screens/detailsOrderScreen';

function App() {
	return (
		<BrowserRouter>
			<div className="grid-container">
				<header className="home-header">
					<h1>
						<FontAwesomeIcon icon={['fas', 'pizza']} size="3x" />{' '}
						<Link to="/">E-Z-Slice Pizza</Link>
					</h1>
					<h4> Any time is pizza time. </h4>
					<navbar className="home-navBar">
						<ul>
							<li>
								<Link to="/placeorder"> Order Now</Link>
							</li>
							<li>
								<Link to="/menu">Menu </Link>
							</li>
							<li>
								<Link to="/cart">Cart </Link>
							</li>
						</ul>
					</navbar>
				</header>
				<main>
					<div className="content">
						<Route path="/" exact={true} component={LandingScreen} />
						<Route path="/menu" component={MenuScreen} />
						<Route path="/product/:id" component={ProductScreen} />
						<Route path="/cart/:id?" component={CartScreen} />
						<Route path="/shipping" component={ShippingScreen} />
						<Route path="/payment" component={PaymentScreen} />
						<Route path="/placeorder" component={PlaceOrderScreen} />
						<Route path="/order/:id" component={DetailsOrderScreen} />
					</div>
				</main>

				<footer className="footer">All rights reserved 2020.</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
