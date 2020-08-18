import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const ProjectRoll = props => {
	const { data } = props;
	const { edges: posts } = data.allMarkdownRemark;

	return (
		<div className="projects-container">
			<div className="projects-title-container">
				<h3 className="title">{props.title}</h3>
			</div>

			{posts &&
				posts.map(({ node: post }) => (
					<div className="project-wrapper" key={post.id}>
						<article className="project-list-item">
							<header>
								<div className="featured-thumbnail">
									<PreviewCompatibleImage
										imageInfo={{
											image: post.frontmatter.featuredimage,
											alt: `featured image thumbnail for post ${post.frontmatter.title}`
										}}
									/>
								</div>
								<p className="project-meta">
									<Link className="project-title" to={post.fields.slug}>
										{post.frontmatter.title}
									</Link>
									<br />
									<span className="project-date">{post.frontmatter.date}</span>
								</p>
							</header>
							<div className="project-body">
								<p>
									{post.excerpt}
									<br />
									<br />
									<Link className="project-link" to={post.fields.slug}>
										Više o projektu →
									</Link>
								</p>
							</div>
						</article>
					</div>
				))}
			<div className="projects-more-container">
				<Link className="link link-button" to="/projects">
					Svi projekti
				</Link>
			</div>
		</div>
	);
};

ProjectRoll.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

export default () => (
	<StaticQuery
		query={graphql`
			query ProjectRollQuery {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					filter: { frontmatter: { templateKey: { eq: "project-post" } } }
				) {
					edges {
						node {
							excerpt(pruneLength: 400)
							id
							fields {
								slug
							}
							frontmatter {
								title
								templateKey
								date(formatString: "DD.MM.YYYY.")
								featuredpost
								featuredimage {
									childImageSharp {
										fluid(maxWidth: 420, quality: 100) {
											...GatsbyImageSharpFluid
										}
									}
								}
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <ProjectRoll data={data} count={count} title="Najnoviji projekti" />}
	/>
);
