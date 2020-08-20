import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

/** Screens */
import PlaceOrder from './Screens/placeOrderScreen';

function App() {
	return (
		<BrowserRouter>
			<div className="grid-container">
				<header className="home-header">
					<h1>E-Z-Slice Pizza</h1>
					<navbar className="home-navBar">
						<ul>
							<li>
								<Link to="/placeorder"> Order Now</Link>
							</li>
							<li>Menu</li>
							<li>About Us</li>
						</ul>
					</navbar>
				</header>
				<main>
					<div className="content">
						<Route path="/placeorder" component={PlaceOrder} />
					</div>
				</main>

				<footer>All rights reserved 2020.</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
