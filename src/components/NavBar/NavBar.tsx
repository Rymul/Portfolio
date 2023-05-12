import * as React from 'react';
import { GiMountaintop } from 'react-icons/gi';
import { BsEnvelope } from 'react-icons/bs'

export const NavBar = () => {
	return (
		<div className="navbar-container">
			<div className="navbar-home">
				<GiMountaintop />
				<h1>Ryan Mullen</h1>
			</div>
			<div className="navbar-buttons">
                <ul className='navbar-list'>
                    <li className='navbar-list-item'>
                        <a className='navbar-link' href="">About</a>
                    </li>
                    <li className='navbar-list-item'>
                        <a className='navbar-link' href="">Projects</a>
                    </li>
                    <li className='navbar-list-item'>
                        <a className='navbar-link' href="">Travel</a>
                    </li>
                    <li className='navbar-list-item'>
                        <a className='navbar-link' href="">Books</a>
                    </li>
                    <li className='navbar-list-item'>
                        <a className='navbar-link' href="">Testimonials</a>
                    </li>
                    <li className='navbar-list-item'>
                        <a className='navbar-link' href="">Contact</a>
                    </li>
                </ul>
                <a className='btn-primary' href="mailto:ryanfmullen@gmail.com">
                    <BsEnvelope />
                    Contact Me
                </a>
			</div>
		</div>
	);
};
