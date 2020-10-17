import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

export const Footer = props => {
	return (
		<footer className="footer">
			<div className="footer-copyright">Copyright © 2020 Eklekta</div>
			<div className="footer-links">
				<Link to="/" className="footer-link">
					Impressum
				</Link>

				<Link className="footer-link" to="/about">
					Uvjeti korištenja
				</Link>

				<Link className="footer-link" to="/contact/examples">
					O Nama
				</Link>

				<a className="footer-link" href="/admin/" target="_blank" rel="noopener noreferrer">
					Kontakt
				</a>
			</div>
		</footer>
	);
};
