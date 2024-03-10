import React from "react";
import logo from "../assets/LOGO IN COLOR (3).png";
import logoTitle from "../assets/LOGO TITLE.png";
import user from "../assets/noun-user-1612313 (1).png";

function Header() {
	return (
		<div>
			<nav>
        <div className="logo">
         <a href='#'>
					<img className='logo' src={logo} alt='logo' />
				</a>
				<img src={logoTitle} alt='logoTitle' />
				<img src={user} alt='user' /> 
        </div>
        <div className="userButton">
          <img src={user} alt="user" />
        </div>
			</nav>
		</div>
	);
}

export default Header;
