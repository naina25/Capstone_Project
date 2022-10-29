import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
	return (
		<footer className="footer">
			<div class="col-1">
				<h3>About</h3>
				<a href="#A">About Us</a>
				<a href="#A">Contact Us</a>
				<a href="#A">Offers</a>
			</div>

			<div class="col-2">
				<h3>Contact</h3>
				<p>
					Noida sector 62, Logix park
					<br />
					10th floor c wing
				</p>
				<div class="social">
					<FacebookIcon />
					<InstagramIcon />
					<WhatsAppIcon />
					<TwitterIcon />
					<LinkedInIcon />
				</div>
			</div>

			<div class="col-3">
				<img src="https://cdn-icons-png.flaticon.com/512/748/748481.png?w=740&t=st=1666000669~exp=1666001269~hmac=c1a70a67ef3824596ce3f4c76b7536dc630bb5ca01d24102561a56d626d92372" alt="" />
				<h3>KnowYourBus</h3>
				<p>
					KnowYourBus is the world's largest online <br />
					bus ticket booking service trusted by over 25
					<br />
					million happy customers globally.KnowYourBus <br />
					offers bus ticket booking through its website
					<br />
					for all major routes.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
