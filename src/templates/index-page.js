import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import ProjectRoll from "../components/ProjectRoll";

import { ParticleDisplay } from "../components/ParticleDisplay";
import { Blurb } from "../components/Blurb";

export const IndexPageTemplate = ({ image, title, subtitle, mainpitch, services }) => (
	<div>
		<header
			className="header"
			style={{
				backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`
			}}
		>
			<ParticleDisplay />

			<div className="main-title-container">
				<h1 className="title">{title}</h1>
				<h2 className="subtitle">{subtitle}</h2>
			</div>
		</header>

		<section className="section section--gradient">
			<div className="mainpitch">
				<h3 className="title">{mainpitch.title}</h3>
				<h4 className="subtitle">{mainpitch.description}</h4>
			</div>

			<div className="services-container">
				{services.map(b => (
					<Blurb image={s.image} text={s.text} />
				))}
			</div>
			<div className="columns">
				<div className="">
					<Link className="btn" to="/services">
						Više o uslugama
					</Link>
				</div>
			</div>
			<div className="column">
				<h3 className="">Najnoviji projekti</h3>
				<ProjectRoll />
				<div className="">
					<Link className="btn" to="/projects">
						Više projekata
					</Link>
				</div>
			</div>
		</section>
	</div>
);

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	subtitle: PropTypes.string,
	mainpitch: PropTypes.object,
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
				mainpitch={frontmatter.mainpitch}
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
				mainpitch {
					title
					description
				}
				services {
					image {
						childImageSharp {
							fluid(maxWidth: 240, quality: 64) {
								...GatsbyImageSharpFluid
							}
						}
					}
					text
				}
			}
		}
	}
`;
