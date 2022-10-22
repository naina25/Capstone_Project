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
				<a href="">About Us</a>
				<a href="">Blog</a>
				<a href="">Careers</a>
				<a href="">Contact Us</a>
				<a href="">Offers</a>
			</div>

			<div class="col-2">
				<h3>CONTACT</h3>
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
