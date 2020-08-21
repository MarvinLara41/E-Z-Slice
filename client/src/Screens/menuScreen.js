import React from 'react';

function MenuScreen(props) {
	return (
		<div className="menu-container">
			<h2> Menu </h2>
			<div className="menu-list">
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
			</div>
		</div>
	);
}

export default MenuScreen;
