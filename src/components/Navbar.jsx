import React, { Fragment } from "react";
import "./Navbar.css";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg bg-transparent  navbar-light">
              <a className="navbar-brand" href="#">
                <img
                  src="/images/aptaLogo.png"
                  alt="logo"
                  style={{ width: "130px" }}
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item ">
                    <a className="nav-link" href="#">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Your Carrers
                    </a>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="#rev">
                      Reviews
                    </a> */}
                    <ScrollLink
                      className="nav-link"
                      to="rev"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-90}
                      style={{ cursor: "pointer" }}
                    >
                      Reviews
                    </ScrollLink>
                  </li>
                  <li className="nav-item pr-0">
                    {/* <a className="nav-link" href="#">
                      Contact Us
                    </a> */}
                    <Link to="/contact" className="nav-link">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
