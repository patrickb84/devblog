import React from "react"

const SubNavCard = ({ name }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <div className="text-center">{name}</div>
        </div>
      </div>
    </div>
  )
}

const SubNav = () => {
  return (
    <section className="w-100 bg-light py-4">
      <div className="container">
        <div className="row">
          <SubNavCard name="blog" />
          <SubNavCard name="shop" />
          <SubNavCard name="our story" />
        </div>
      </div>
    </section>
  )
}

export default SubNav
