import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light mt-2 mb-md-5">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <span className="fw-bold" style={{ color: "#5465ff" }}>
              {" "}
              AlphaTech{" "}
            </span>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end align-center"
            id="main-nav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link text-secondary">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link text-secondary">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/message" className="nav-link text-secondary">
                  Messages
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link text-secondary">
                  AboutUs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link text-secondary">
                  ContactUs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
