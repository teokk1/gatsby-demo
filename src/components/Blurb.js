import React from "React";

import Img from "gatsby-image";

export const Blurb = props => {
	const { text, image } = props;

	const resolveImage = () => {
		if (!image.childImageSharp && image.extension === "svg") {
			return <img src={image.publicURL} alt="" />;
		}
		return <Img fluid={image.childImageSharp.fluid} />;
	};

	return (
		<div className={`blurb-container ${props.blurbClass}`}>
			{resolveImage()}
			<h5 className="service-description">{text}</h5>
		</div>
	);
};
