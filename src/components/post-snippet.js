import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const PostSnippet = ({ node }) => {
  console.log({ node })
  const title = node.frontmatter.title || node.fields.slug

  return (
    <article key={node.fields.slug}>
      <header>
        {/* <Img
          fluid={node.frontmatter.featuredimage.childImageSharp.fluid}
          alt="cool stuff."
          style={{ width: 640 }}
        /> */}
        <h3>
          <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
            {title}
          </Link>
        </h3>
        <small>{node.frontmatter.date}</small>
      </header>

      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
      </section>
    </article>
  )
}

export default PostSnippet
