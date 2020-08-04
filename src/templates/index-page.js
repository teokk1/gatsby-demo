import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import ProjectRoll from "../components/ProjectRoll";
import Particles from "react-particles-js";

const ParticleDisplay = () => {
	return (
		<Particles
			params={{
				particles: {
					number: {
						value: 100
					},
					size: {
						value: 3
					},
					color: "#FFF",
					density: {
						enable: true
					},
					move: {
						random: true,
						speed: 1,
						out_mode: "out"
					},
					lineLinked: {
						color: "#aaaaaa"
					}
				},
				interactivity: {
					events: {
						onhover: {
							enable: true,
							mode: "grab"
						},
						onclick: {
							enable: true,
							mode: "repulse"
						}
					}
				}
			}}
			style={{ position: "absolute", top: "0", left: "0", width: "200%", height: "200%" }}
		/>
	);
};

export const IndexPageTemplate = ({ image, title, subtitle, mainpitch, blurbs }) => (
	<div>
		<div
			className="full-width-image margin-top-0"
			style={{
				backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`,
				backgroundAttachment: `fixed`,
				position: "relative"
			}}
		>
			<ParticleDisplay />

			<div className="title-container">
				<h1 className="title">{title}</h1>
				<h3 className="subtitle">{subtitle}</h3>
			</div>
		</div>

		<section className="section section--gradient">
			<div className="container">
				<div className="section">
					<div className="columns">
						<div className="column is-10 is-offset-1">
							<div className="content">
								<div className="content">
									<div className="tile">
										<h1 className="title">{mainpitch.title}</h1>
									</div>
									<div className="tile">
										<h3 className="subtitle">{mainpitch.description}</h3>
									</div>
								</div>
								{/* <Features gridItems={blurbs} /> */}
								<div className="columns">
									<div className="column is-12 has-text-centered">
										<Link className="btn" to="/services">
											Više o uslugama
										</Link>
									</div>
								</div>
								<div className="column is-12">
									<h3 className="has-text-weight-semibold is-size-2">Najnoviji projekti</h3>
									<ProjectRoll />
									<div className="column is-12 has-text-centered">
										<Link className="btn" to="/projects">
											Više projekata
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
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
	blurbs: PropTypes.array
};

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	console.log(frontmatter.image);

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				subtitle={frontmatter.subtitle}
				mainpitch={frontmatter.mainpitch}
				intro={frontmatter.intro}
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
				blurbs {
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
