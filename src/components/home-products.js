import React from "react"
import ProductCards from "./product-cards"

const HomeProducts = () => {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "white" }}>
      <div className="container my-5 py-5">
        <div className="mw-800 mx-auto text-center">
          <h2 className="h1 font-peacock-loop mb-3">Products</h2>
          <p className="lead mb-5 pb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            dolorem at unde?
          </p>
        </div>
        <ProductCards />
      </div>
    </div>
  )
}

export default HomeProducts
