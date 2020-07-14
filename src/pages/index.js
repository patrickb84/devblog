import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import AllPosts from "../components/all-posts"
import VideoHeader from "../components/video-header"
// import SubNav from "../components/sub-nav"
import HomeAbout from "../components/home-about"
import HomeProducts from "../components/home-products"
import EmailSignUp from "../components/email-signup"
import InstagramBlock from "../components/instagram-block"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Fluffy bunnies like crazy" />

      <VideoHeader />
      <HomeAbout />
      <div className="row no-gutters">
        <div className="col-md-6">
          <div
            className="bg-dark text-white d-flex align-items-center justify-content-center"
            style={{ height: 500 }}
          >
            <h2 className="h1 font-peacock-loop">Meet the animals</h2>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="bg-secondary text-white d-flex align-items-center justify-content-center"
            style={{ height: 500 }}
          >
            <h2 className="h1 font-peacock-loop">Our Story</h2>
          </div>
        </div>
      </div>
      <HomeProducts />

      {/* <section className="d-none">
        <AllPosts />
      </section> */}

      <EmailSignUp />
      <InstagramBlock />
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
