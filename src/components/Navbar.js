import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			navBarActiveClass: ""
		};
	}

	toggleHamburger = () => {
		this.setState(
			{
				active: !this.state.active
			},
			() => {
				this.state.active
					? this.setState({
							navBarActiveClass: "is-active"
					  })
					: this.setState({
							navBarActiveClass: ""
					  });
			}
		);
	};

	render() {
		return (
			<nav className="navbar" role="navigation" aria-label="main-navigation">
				<div className="navbar-brand">
					<div
						className={`navbar-burger burger ${this.state.navBarActiveClass}`}
						data-target="navMenu"
						onClick={() => this.toggleHamburger()}
					>
						<span />
						<span />
						<span />
					</div>
				</div>
				<div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
					<div className="navbar-start has-text-centered">
						<Link className="navbar-item" to="/about">
							About
						</Link>
						<Link className="navbar-item" to="/projects">
							Projekti
						</Link>
						<Link to="/" className="navbar-item" title="Logo">
							<img src={logo} alt="Ekletka" />
						</Link>
						<Link className="navbar-item" to="/services">
							Usluge
						</Link>
						<Link className="navbar-item" to="/contact/examples">
							Kontakt
						</Link>
					</div>
				</div>
			</nav>
		);
	}
};

export default Navbar;
