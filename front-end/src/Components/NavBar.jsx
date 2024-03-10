import React from 'react'
import Avatar from "./Avatar";
import logo from "../assets/LOGO IN COLOR (3).png";
import live from "../assets/noun-add-video-3015959 (1).png";
import community from "../assets/noun-presentation-213773.png";
import user from "../assets/noun-user-1612313 (1).png";
import ".'/'NavBar.css";

function NavBar() {
  return (
		<div className='sidebar'>
			<nav className='sidebar-menu'>
				<a href='#'>
					<Avatar />
				</a>
				<br />
				<a href='#'>
					<img className='logo' src={logo} alt='logo' />
				</a>
				<br />
				<a href='#'>
					<img src={live} alt='live' />
				</a>
				<br />
				<a href='#'>
					<img src={community} alt='community' />
				</a>
				<br />
				<a href='#'>
					<img src={user} alt='user' />
				</a>
			</nav>
		</div>
	);
}

export default NavBar
