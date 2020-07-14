import React from "react"

const defaultTitle = "Article Card"
const defaultDesc =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempora quisquam quod!"

const ArticleCard = ({ title, image, description }) => {
  return (
    <div className="card shadow mb-3">
      <img src={image ? image : `https://picsum.photos/150/270`} alt={title} />
      <div className="card-body text-center">
        <div className="card-title d-none">{title ? title : defaultTitle}</div>
        <p className="card-text">{description ? description : defaultDesc}</p>
      </div>
    </div>
  )
}

export default ArticleCard
