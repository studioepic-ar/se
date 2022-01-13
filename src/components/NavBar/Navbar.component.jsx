// import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.styles.scss";
import Logo from "../Logo/Logo.component";

export default function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <div className="flex lg:-mt-4">
              <Logo />
            </div>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/projects"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Projects
              </NavLink>
            </li>
            {/* todo: uncomment gallery after adding gallery data */}
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/gallery"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Gallery
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/careers"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Careers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
