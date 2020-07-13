import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AllPosts from "../components/all-posts"
import VideoHeader from "../components/video-header"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Fluffy bunnies like crazy" />

      <VideoHeader />

      <div className="bg-light py-5 text-center">
        <div className="my-5 mx-auto" style={{maxWidth: 800}}>
          <h2 className="h1 font-peacock">Every hobby farm has a story</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            est repudiandae doloribus, cumque expedita eum ipsa? Molestiae omnis
            sed animi!
          </p>
        </div>
      </div>

      <div className="bg-light py-5 border-top border-bottom">
        <AllPosts />
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
