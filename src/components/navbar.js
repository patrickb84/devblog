import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg text-light bg-transparent fixed-top" style={{zIndex: 100}}>
      <Link className="navbar-brand font-sofia-soft m-0 p-0" to="/">
        Lively Farm
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Link
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
