import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function LandingScreen(props) {
	return (
		<div className="landing-container">
			<div className="landing-deals">
				<ul>
					<li>
						<div>Pizza</div>
					</li>
					<li>
						<div>Wings</div>
					</li>
					<li>
						<div> SandWiches </div>
					</li>
					<li>
						<div>Desserts </div>
					</li>
					<li>
						<div>Drinks </div>
					</li>
				</ul>

				<button>
					<Link to="/menu">Order Now</Link>
				</button>
			</div>

			<div className="landing-store-hours">
				<table>
					<h1> Store Hours </h1>

					<trow>
						<b>Sunday</b>: 11:00Am - 1:00Am
						<br />
						<b>Monday</b>: 11:00Am - 1:00Am
						<br />
						<b>Tuseday</b>: 11:00Am - 1:00Am
						<br />
						<b>Wednesday</b>: 11:00Am - 1:00Am
						<br />
						<b>Thursday</b>: 11:00Am - 1:00Am
						<br />
						<b>Friday</b>: 11:00Am - 1:00Am
						<br />
						<b>Saturday</b>: 11:00Am - 1:00Am
						<br />
					</trow>
				</table>
			</div>

			<div className="landing-contact">
				<h5> Contact Info </h5>
				<br />
				<b> Phone Number:</b> 111-111-1111
				<br />
				<b> Email: </b> pizzastoreemail@gmail.com
				<br />
				<b> Address: </b> address
			</div>
		</div>
	);
}

export default LandingScreen;
