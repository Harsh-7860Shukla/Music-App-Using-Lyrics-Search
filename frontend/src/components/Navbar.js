import React from "react"
import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        {/* Container wrapper */}
        <div className="container">
          {/* Navbar brand */}
          <NavLink className="navbar-brand" to="">
            My React App
          </NavLink>
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Link */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              
             
              <li className="nav-item">
                <NavLink className="nav-link" to="/addmusic">
                  Add Music
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  Sign Up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/listmusic">
                  List Music
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/manageuser">
                  Manage User
                </NavLink>
              </li>
            </ul>
            {/* Icons */}
            <ul className="navbar-nav d-flex flex-row me-1">
              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="#">
                  <i className="fas fa-shopping-cart" />
                </a>
              </li>
              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
            </ul>
            {/* Search */}
            <form className="w-auto">
              <input type="search" className="form-control" placeholder="Type query" aria-label="Search" />
            </form>
          </div>
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  )
}

export default Navbar
