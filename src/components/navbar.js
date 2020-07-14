import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import "./navbar.scss"

/**
 * Navs:
 *  Our animals   /   Animals
 *  Our plants    /   Plants
 *  Our story     /   About Us
 *  Get in touch  /   Contact
 *  Our products  /   Products  /   Store   /   Shop
 */

const Navbar = () => {
  const transparent = "navbar-dark animate__fadeIn"
  const solid =
    "navbar-light bg-light border-bottom animate__slideInDown animate__faster"

  const [navbarClass, setNavbarClass] = useState(transparent)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setNavbarClass(window.scrollY < 300 ? transparent : solid)
    })
  }, [])

  return (
    <nav
      id="navbar"
      className={`animate__animated navbar navbar-expand-lg fixed-top ${navbarClass}`}
      style={{ zIndex: 100 }}
    >
      <div className="container">
        <Link className="navbar-brand font-peacock-loop m-0 p-0" to="/">
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
                Our Animals
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Our Story
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Lively News
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Our Shop
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
