import React from "React";

export const Blurb = props => {
	return (
		<div className="blurb-container">
			<img src={!!props.image.childImageSharp ? props.image.childImageSharp.fluid.src : props.image} />
		</div>
	);
};
