import React from "react";
import "./Navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
	return (
		<div className="header">
			<nav className="flex space-between">
				<div className="left flex items-center">
					<img
						src="https://cdn-icons-png.flaticon.com/512/748/748481.png?w=740&t=st=1666000669~exp=1666001269~hmac=c1a70a67ef3824596ce3f4c76b7536dc630bb5ca01d24102561a56d626d92372"
						className="logo-img"
						alt="logo"
					></img>
					<h3 className="navbar-brand">Know Your Bus</h3>
					<ul className="flex items-center justify-center uppercase semibold">
						{/* <li>Know Your Bus</li> */}
						<li>Bus Tickets</li>
						<li>New rides</li>
						<li></li>
					</ul>
				</div>
				<div className="right flex items-center">
					<div className="mx-2">About</div>
					<div className="mx-2">Help</div>
					<div className="mx-2">
						<AccountCircleIcon />
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
