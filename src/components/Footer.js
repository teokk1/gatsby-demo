import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
	render() {
		return (
			<footer className="footer">
				<img src={logo} alt="Ekletka" className="footer-logo" />
				<div className="footer-links">
					<Link to="/" className="navbar-item">
						Glavna
					</Link>

					<Link className="navbar-item" to="/about">
						O nama
					</Link>

					<Link className="navbar-item" to="/contact/examples">
						Form Examples
					</Link>

					<a className="navbar-item" href="/admin/" target="_blank" rel="noopener noreferrer">
						Admin
					</a>
				</div>
			</footer>
		);
	}
};

export default Footer;
