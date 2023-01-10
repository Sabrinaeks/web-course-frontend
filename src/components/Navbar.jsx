import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container">
          <NavLink
            className="navbar-toggler"
            type="NavLink"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  Tentang
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/course">
                  Kursus
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Kontak
                </NavLink>
              </li>
            </ul>
            <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/">
              Kursus Online
            </NavLink>
            <NavLink
              to="/login"
              className="btn btn-outline-primary ms-auto px-4 rounded-pill"
            >
              <i className="fa fa-sign-in me-2"></i> Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn btn-outline-primary ms-2 px-4 rounded-pill"
            >
              <i className="fa fa-user-plus me-2"></i> Register
            </NavLink>
            <NavLink
              to="/userpage"
              className="btn btn-outline-primary ms-2 px-4 rounded-pill"
            >
              <i className="fa fa-user me-2"></i> Profile
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
