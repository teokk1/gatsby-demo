import React from "react";

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
		<div className={`service-container`}>
			{hoverable}
			<props.image hovered={hovered} />
			{/* {props.image({hovered})} */}
			<h5 className="service-description">{props.text}</h5>
		</div>
	);
};

const transformations = [trans1, trans2, trans3, trans4];

export const Services = props => {
	return (
		<div className="services-container">
			<div className="services-title-container">
				<h3 className="title">{props.title}</h3>
				{/* <h4 className="subtitle">{servicesSubtitle}</h4> */}
			</div>
			{props.services.map((s, index) => (
				<ServiceContainer key={index} image={images[index]} text={s.text} />
			))}
		</div>
	);
};
