import React from "react"
import ArticleCards from "./article-cards"

const HomeAbout = () => {
  return (
    <div className="container-fluid bg-light py-5 border-bottom">
      <div className="container my-5 py-5">
        <h2
          className="font-peacock text-center mx-auto mb-5 mw-800"
        >
          Every hobby farm has a story. Lively farm has a fountain of stories.
          What's it like running Lively?
        </h2>

        <ArticleCards />
      </div>
    </div>
  )
}

export default HomeAbout
