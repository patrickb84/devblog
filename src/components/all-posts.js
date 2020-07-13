import React from "react"
import { graphql, StaticQuery } from "gatsby"
import PostSnippet from "./post-snippet"

const AllPosts = () => {
  return (
    <StaticQuery
      query={componentQuery}
      render={data => (
        <>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <PostSnippet node={node} key={node.frontmatter.date} />
          ))}
        </>
      )}
    />
  )
}

export default AllPosts

export const componentQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
