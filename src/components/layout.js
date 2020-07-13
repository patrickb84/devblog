import React from "react"
// import { Link } from "gatsby"

import "../styles/style.scss"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

// const Layout = ({ location, title, children }) => {

// const rootPath = `${__PATH_PREFIX__}/`

// let header
// if (location.pathname === rootPath) {
//   header = <h1 className="">THIS IS THE INDEX {title}</h1>
// } else {
//   header = <h1>Not Index</h1>
// }

// <header>{header}</header>
