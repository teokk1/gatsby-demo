import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo_no_type.svg";

export const Navbar = props => {
	return (
		<nav className="navbar" role="navigation" aria-label="main-navigation">
			<img src={logo} alt="Eklekta" className="nav-logo" />

			<Link className="navbar-item" to="/about">
				About
			</Link>
			<Link className="navbar-item" to="/projects">
				Projekti
			</Link>
			<Link to="/" className="navbar-item navbar-centerpiece" title="Logo">
				Eklekta
			</Link>
			<Link className="navbar-item" to="/services">
				Usluge
			</Link>
			<Link className="navbar-item" to="/contact/examples">
				Kontakt
			</Link>
		</nav>
	);
};
