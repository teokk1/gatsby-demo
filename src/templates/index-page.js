import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import ProjectRoll from "../components/ProjectRoll";

import { ParticleDisplay } from "../components/ParticleDisplay";
import { Services } from "../components/services/Services";

export const IndexPageTemplate = ({ image, title, subtitle, servicesTitle, servicesSubtitle, services }) => (
	<div>
		<header
			className="header"
			style={
				{
					// backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`
				}
			}
		>
			{/* <ParticleDisplay /> */}

			<div className="main-title-container">
				<h1 className="title">{title}</h1>
				<h2 className="subtitle">{subtitle}</h2>
			</div>
		</header>

		<section className="section section--gradient">
			<Services title={servicesTitle} subtitle={servicesSubtitle} services={services} />
			<div className="column">
				<ProjectRoll title="Najnoviji Projekti" />
			</div>
		</section>
	</div>
);

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	subtitle: PropTypes.string,
	servicesTitle: PropTypes.string,
	servicesSubtitle: PropTypes.string,
	services: PropTypes.array
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
			frontmatter: PropTypes.object
		})
	})
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
