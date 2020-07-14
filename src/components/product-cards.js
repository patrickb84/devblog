import React from "react"
import ProductCard from "./product-card"

const ArticleCards = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <ProductCard />
      </div>
      <div className="col-md-3">
        <ProductCard />
      </div>
      <div className="col-md-3">
        <ProductCard />
      </div>
      <div className="col-md-3">
        <ProductCard />
      </div>
    </div>
  )
}

export default ArticleCards
