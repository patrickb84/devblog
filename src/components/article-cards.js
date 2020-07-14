import React from "react"
import ArticleCard from "./article-card"

const ArticleCards = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <ArticleCard />
      </div>
      <div className="col-md-4">
        <ArticleCard />
      </div>
      <div className="col-md-4">
        <ArticleCard />
      </div>
    </div>
  )
}

export default ArticleCards
