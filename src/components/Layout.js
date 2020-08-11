import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../css/all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

import blob1 from "../img/blob1.svg";
import blob2 from "../img/blob2.svg";
import blob3 from "../img/blob3.svg";

import DrawBlob, { generatePoints } from "blob-animated";

const TemplateWrapper = ({ children }) => {
	const { title, description } = useSiteMetadata();

	// useEffect(() => {
	// 	const Blob = new DrawBlob({
	// 		vectors: generatePoints({ sides: 7 }),
	// 		canvas: document.getElementById("blobCanvas"),
	// 		speed: 400,
	// 		scramble: 0.02,
	// 		color: "#ff66cc",
	// 		colorFunction: ctx => console.log(ctx)
	// 	});
	// }, []);

	return (
		<div className="main-container">
			<canvas id="blobCanvas" style={{ width: "100%", height: "100%", zIndex: -1, position: "absolute" }} />

			<Helmet>
				<html lang="en" />
				<title>{title}</title>
				<meta name="description" content={description} />

				<link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix("/")}img/apple-touch-icon.png`} />
				<link rel="icon" type="image/png" href={`${withPrefix("/")}img/favicon-32x32.png`} sizes="32x32" />
				<link rel="icon" type="image/png" href={`${withPrefix("/")}img/favicon-16x16.png`} sizes="16x16" />

				<link rel="mask-icon" href={`${withPrefix("/")}img/safari-pinned-tab.svg`} color="#ff4400" />
				<meta name="theme-color" content="#fff" />

				<meta property="og:type" content="business.business" />
				<meta property="og:title" content={title} />
				<meta property="og:url" content="/" />
				<meta property="og:image" content={`${withPrefix("/")}img/og-image.jpg`} />
			</Helmet>
			<Navbar />
			<div className="main-wrapper">
				{children}
				<Footer />
			</div>

			<img src={blob1} className="blob" />
			<img src={blob2} className="blob" />
			<img src={blob3} className="blob" />
		</div>
	);
};

export default TemplateWrapper;
