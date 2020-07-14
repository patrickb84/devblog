import React from "react"

const defaultTitle = "Product Card"
const defaultDesc =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempora quisquam quod!"

const ProductCard = ({ title, image, description }) => {
  return (
    <div className="card shadow mb-3">
      <img src={image ? image : `https://picsum.photos/150/225`} alt={title} />
      <div className="card-body">
        <div className="card-title d-none">{title ? title : defaultTitle}</div>
        <p className="card-text">{description ? description : defaultDesc}</p>
      </div>
    </div>
  )
}

export default ProductCard
