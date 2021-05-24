import React, { Component } from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link } from "react-router-dom";
class Navbar extends Component {
  state = {};

  render() {
    return (
      <div className="container-fluid navbg-fluid">
        <nav
          className="container navbar navbar-expand-lg navbar-dark"
          style={{ zIndex: "5" }}
        >
          <Link className="navbar-brand" to="/">
            Rapid Render
          </Link>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/Blob">
                  Blob
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/Gradients">
                  Gradients
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Patterns">
                  Patterns
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SVG">
                  SVGs
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <ul className="content">
          <li className="content__item" id="content-item-02"></li>
        </ul> */}
      </div>
    );
  }
}

export default Navbar;
