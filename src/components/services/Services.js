import React from "react";

import { Link } from "gatsby";

import { IconDesign } from "./IconDesign";
import { IconWeb } from "./IconWeb";
import { Icon3D } from "./Icon3D";
import { IconMarketing } from "./IconMarketing";

import { useHover } from "react-use";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

const images = [IconDesign, IconWeb, Icon3D, IconMarketing];

export const ServiceContainer = props => {
	const [hoverable, hovered] = useHover(<div />);

	return (
		<div className="service-container">
			{hoverable}
			<props.image hovered={hovered} />
			{/* {props.image({hovered})} */}
			<h5 className="service-description">{props.text}</h5>
		</div>
		// <div className="service-wrapper">
		/* <svg viewBox="0 0 115 200">
				<path d="M110.44 104.72l-2.43-8.33-31-82.31C74.33 5.94 66.01 0 56.17 0c-9.85 0-18.16 5.94-20.84 14.08l-31 82.31-2.43 8.33a102.48 102.48 0 000 38.56l2.43 8.32 31 82.32c2.68 8.14 11 14.08 20.84 14.08 9.85 0 18.16-5.94 20.84-14.08l31-82.32 2.43-8.32a102.48 102.48 0 000-38.56z" />
			</svg> */
		// <div className="service-container">
		// 	{hoverable}
		// 	<props.image hovered={hovered} />
		// 	{/* {props.image({hovered})} */}
		// 	<h5 className="service-description">{props.text}</h5>
		// </div>
		// </div>
	);
};

const transformations = [trans1, trans2, trans3, trans4];

export const Services = props => {
	return (
		<div className="services-container">
			<div className="services-title-container">
				<h3 className="title">{props.title}</h3>
			</div>
			{props.services.map((s, index) => (
				<ServiceContainer key={index} image={images[index]} text={s.text} />
			))}

			<div className="services-more-container">
				<Link className="link link-button" to="/services">
					Više o uslugama
				</Link>
			</div>
		</div>
	);
};
