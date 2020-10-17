import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import ProjectRoll from "../components/ProjectRoll";

import { useWindowScroll } from "react-use";

import { ParticleDisplay } from "../components/ParticleDisplay";
import { Services } from "../components/services/Services";
import { Background } from "../components/Background";

import topRightBlob from "../img/top_right_blob.svg";
import secondSectionBlob from "../img/second_section_blob.svg";
import thirdSectionMainBlob from "../img/third_section_main_blob.svg";
import thirdSectionSecondaryBlob from "../img/third_section_secondary_blob.svg";
import fourthSectionBlob from "../img/fourth_section_blob.svg";
import fifthSectionBlob from "../img/fifth_section_blob.svg";
import fifthSectionSecondaryBlob from "../img/fifth_section_secondary_blob.svg";
import sixthSectionBlob from "../img/sixth_section_blob.svg";
import seventhSectionBlob from "../img/seventh_section_blob.svg";
import eighthSectionBlob from "../img/eighth_section_blob.svg";
import ninthSectionBlob from "../img/ninth_section_blob.svg";
import tenthSectionBlob from "../img/tenth_section_blob.svg";
import eleventhSectionBlob from "../img/eleventh_section_blob.svg";

import mockup from "../img/full_mockup.png";

const Blob = (props) => {
	const { x, y } = useWindowScroll();

	const top = props.top + (y - Math.abs(props.top)) * props.parallaxPct;

	return <img className="main-page-blob" src={props.src} style={{ top: top, right: props.right, left: props.left, transition: "0.1s" }} />;
};

export const IndexPageTemplate = ({ image, title, subtitle, servicesTitle, servicesSubtitle, services }) => {
	const pathLengthModifier = (percentage) => {
		console.log(percentage);

		const difference = (stop) => Math.abs(percentage - stop);

		const stop1Difference = difference(0.2);
		if (stop1Difference < 0.05) return 1 + Math.abs(percentage - 0.2 < 0.05);
		if (percentage < 0.21) return 1.05;
		if (percentage < 0.22) return 1.1;
		if (percentage < 0.23) return 1.15;
		if (percentage < 0.24) return 1.2;
		if (percentage < 0.25) return 1.25;
		if (percentage < 0.3) return 1.3;
		if (percentage < 0.35) return 1.35;
		if (percentage < 0.5) return 1.45;

		return 1;
	};

	useEffect(() => {
		const path = document.querySelector("#background-line");

		const pathLength = path.getTotalLength();

		// Make very long dashes (the length of the path itself)
		path.style.strokeDasharray = pathLength + " " + pathLength;

		// Offset the dashes so the it appears hidden entirely
		path.style.strokeDashoffset = 0.95 * pathLength;

		window.addEventListener("scroll", (e) => {
			const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) + 0.05;

			const drawLength = pathLength * scrollPercentage * (1 - 0.35 * (1 - scrollPercentage));

			path.style.strokeDashoffset = pathLength - drawLength;
		});
	});

	return (
		<div className="main-page-container">
			{/* <img src={mockup} style={{ position: "absolute", zIndex: 1000, top: 0, left: 0, opacity: 0.5, width: "100%", filter: "sepia(1)" }} /> */}

			<div className="background-container" style={{ position: "absolute", width: "100%", top: 0, left: 0, zIndex: -1 }}>
				<Background />
			</div>

			<div className="background-blobs-container" style={{ position: "absolute", width: "100%", top: 0, left: 0, zIndex: -2 }}>
				<Blob top={-245} right="-13%" src={topRightBlob} parallaxPct={-0.1} />
				<Blob top={1500} right="9%" src={secondSectionBlob} parallaxPct={-0.25} />
				<Blob top={2152} left="2%" src={thirdSectionMainBlob} parallaxPct={-0.25} />
				<Blob top={2790} left="41%" src={thirdSectionSecondaryBlob} parallaxPct={-0.45} />
				<Blob top={3200} right="-11%" src={fourthSectionBlob} parallaxPct={-0.45} />
				<Blob top={4440} left="0" src={fifthSectionBlob} parallaxPct={-0.9} />
				<Blob top={4875} right="-4.5%" src={fifthSectionSecondaryBlob} parallaxPct={-0.7} />
				<Blob top={5400} right="4%" src={sixthSectionBlob} parallaxPct={-0.3} />
				<Blob top={6320} left="-9.5%" src={seventhSectionBlob} parallaxPct={-0.4} />
				<Blob top={7240} right="-37%" src={eighthSectionBlob} parallaxPct={-0.14} />
				<Blob top={8660} left="10%" src={ninthSectionBlob} parallaxPct={-0.2} />
				<Blob top={8830} left="-30%" src={tenthSectionBlob} parallaxPct={-0.25} />
				<Blob top={10890} right="18.5%" src={eleventhSectionBlob} parallaxPct={-0.1} />
			</div>

			{/* <header className="header">
				<div className="main-title-container">
					<h1 className="title">{title}</h1>
					<h2 className="subtitle">{subtitle}</h2>
				</div>
			</header> */}

			<section className="main-page-section main-page-hero-section">
				<h1>Sve vaše potrebe na jednom mjestu</h1>
				<h2>
					Moderni svijet pun je izazova.
					<br />
					Uz Ekletku izazovi postaju uspjesi.
				</h2>
			</section>

			<section className="main-page-section main-page-service">
				<h2>Dizajn, izrada vizuala i logoa, branding i vizualni identitet</h2>
			</section>
			<section className="main-page-section main-page-service" style={{ alignItems: "flex-end" }}>
				<h2 style={{ textAlign: "right", maxWidth: "15ch" }}>Izrada web stranica, web, mobilnih i desktop aplikacija</h2>
			</section>
			<section className="main-page-section main-page-service">
				<h2 style={{ textAlign: "right", maxWidth: "15ch" }}>Izrada 3D modela, animacija i vizualizacija</h2>
			</section>
			<section className="main-page-section main-page-service" style={{ alignItems: "flex-end" }}>
				<h2 style={{ textAlign: "right", maxWidth: "15ch" }}>Marketing i oglašavanje</h2>
			</section>
			<section className="main-page-section main-page-service">
				<h2>O nama</h2>
				<p className="main-page-service-copy">Lorem ipsum dolor tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis est laborum.</p>
			</section>
			<section className="main-page-section main-page-service">
				<h2>Projekti</h2>
				<p className="main-page-service-copy">Lorem ipsum dolor tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis est laborum.</p>
			</section>
			<section className="main-page-section main-page-service main-page-projects">
				<div className="main-page-project" />
				<div className="main-page-project" />
			</section>
			<section className="main-page-section main-page-service main-page-projects">
				<div className="main-page-project" />
				<div className="main-page-project" />
			</section>
			<section className="main-page-section main-page-service main-page-projects">
				<div className="main-page-project" />
				<div className="main-page-project" />
			</section>
			<section className="main-page-section main-page-service">
				<h2 style={{ textAlign: "right", maxWidth: "15ch" }}>Kontakt</h2>
				<p className="main-page-service-copy">Lorem ipsum dolor tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis est laborum.</p>
			</section>

			{/* <section className="section section--gradient">
				<Services title={servicesTitle} subtitle={servicesSubtitle} services={services} />
				<div className="column">
					<ProjectRoll title="Najnoviji Projekti" />
				</div>
			</section> */}
		</div>
	);
};

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	subtitle: PropTypes.string,
	servicesTitle: PropTypes.string,
	servicesSubtitle: PropTypes.string,
	services: PropTypes.array,
};

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				subtitle={frontmatter.subtitle}
				servicesTitle={frontmatter.servicesTitle}
				servicesSubtitle={frontmatter.servicesSubtitle}
				services={frontmatter.services}
			/>
		</Layout>
	);
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				image {
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				title
				subtitle
				servicesTitle
				servicesSubtitle
				services {
					image {
						childImageSharp {
							fluid(maxWidth: 240, quality: 64) {
								...GatsbyImageSharpFluid
							}
						}
						extension
						publicURL
					}
					text
				}
			}
		}
	}
`;
