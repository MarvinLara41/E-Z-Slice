import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

/** Screens */
import PlaceOrder from './Screens/placeOrderScreen';
import LandingScreen from './Screens/landingScreen';
import MenuScreen from './Screens/menuScreen';
import CartScreen from './Screens/cartScreen';

function App() {
	return (
		<BrowserRouter>
			<div className="grid-container">
				<header className="home-header">
					<h1>
						<FontAwesomeIcon icon={['fas', 'pizza']} size="3x" />{' '}
						<Link to="/">E-Z-Slice Pizza</Link>
					</h1>
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
						<Route path="/placeorder" component={PlaceOrder} />
						<Route path="/" exact={true} component={LandingScreen} />
						<Route path="/menu" component={MenuScreen} />
						<Route path="/cart/:id?" component={CartScreen} />
					</div>
				</main>

				<footer className="footer">All rights reserved 2020.</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
