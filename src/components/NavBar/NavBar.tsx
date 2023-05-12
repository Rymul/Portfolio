import * as React from 'react';
import { GiMountaintop } from 'react-icons/gi';

export const NavBar = () => {
	return (
		<div className="navbar-container">
			<div className="navbar-home">
				<GiMountaintop />
				<h1>Ryan Mullen</h1>
			</div>
			<div className="navbar-buttons">
				<p>About</p>
				<p>Projects</p>
				<p>Testimonials</p>
				<p>Travel</p>
				<p>Books</p>
				<p>Contact</p>
			</div>
		</div>
	);
};
