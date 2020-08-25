import React, { useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Swiper from 'swiper';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import Pizza from '../Images/pizza.jpg';
import Brownie from '../Images/brownie.jpg';
import CheeseSteak from '../Images/cheesesteak.jpg';
import Mozzarella from '../Images/mozzarella.jpg';

function LandingScreen(props) {
	useEffect(() => {
		var swiper = new Swiper('.swiper-container', {
			spaceBetween: 30,
			centeredSlides: true,
			loop: true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: true,
			},
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	}, []);

	return (
		<div className="landing-container">
			<div className="landing-display">
				<div className="swiper-container" id="/projects">
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<Link to="/pizza">
								<img src={Pizza} alt="pizza" />
							</Link>
						</div>
						<div className="swiper-slide">
							<Link to="/wings">
								<img src={Mozzarella} alt="mozzarella" />
							</Link>
						</div>
						<div className="swiper-slide">
							<Link to="/desserts">
								<img src={Brownie} alt="brownie" />
							</Link>
						</div>
						<div className="swiper-slide">
							<Link to="/sandwiches">
								<img src={CheeseSteak} alt="cheesesteak" />
							</Link>
						</div>
						{SwiperCore.use([Autoplay, Navigation, Pagination])}
					</div>

					<div className="swiper-pagination" />
				</div>
			</div>

			<div className="landing-deals">
				<ul>
					<li>
						<div>
							<Link to="/pizza">Pizza</Link>
						</div>
					</li>
					<li>
						<div>
							<Link to="/wings">Wings</Link>
						</div>
					</li>
					<li>
						<div>
							<Link to="/sandwiches"> SandWiches</Link>{' '}
						</div>
					</li>
					<li>
						<div>
							<Link to="/desserts">Desserts </Link>
						</div>
					</li>
				</ul>
			</div>

			<div className="landing-order-button">
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
				<div className="landing-contact">
					<h3> Contact Info </h3>
					<br />
					<b> Phone Number:</b> 111-111-1111
					<br />
					<b> Email: </b> pizzastoreemail@gmail.com
					<br />
					<b> Address: </b> address
				</div>
			</div>
		</div>
	);
}

export default LandingScreen;
