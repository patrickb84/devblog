import React from "react"

const SquareImage = () => (
  <div className="col-4 col-sm-3 col-md-2">
    <img src={`https://picsum.photos/240/250`} alt="..." className="w-100" />
  </div>
)

const InstagramBlock = () => {
  return (
    <div className="row no-gutters">
      <SquareImage />
      <SquareImage />
      <SquareImage />
      <SquareImage />
      <SquareImage />
      <SquareImage />
    </div>
  )
}

export default InstagramBlock
