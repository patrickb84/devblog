import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import "./blog-post.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = <data className="site siteMetadata title"></data>
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <Img
            fluid={post.frontmatter.featuredimage.childImageSharp.fluid}
            alt="cool stuff."
            style={{ width: 640 }}
          />
          <h1 className="font-weight-bold">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section className="blog-post-inner" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 640) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
