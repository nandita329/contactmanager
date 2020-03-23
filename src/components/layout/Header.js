import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = props => {
  const { name } = props;
  return (
    //For testting only
    // <div>
    //   {/* <h1 style={headingStyle}>{name}</h1> */}
    //   <h1>{name}</h1>
    // </div>

    //Now crete a navbar

    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {name}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                exact
                activeStyle={{ color: "white" }}
              >
                home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact/add"
                className="nav-link"
                exact
                activeStyle={{ color: "white" }}
              >
                <i className="fa fa-plus"></i>
                Add
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                exact
                activeStyle={{ color: "white" }}
              >
                <i className="fa fa-question"></i>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  name: "My App"
};

// const headingStyle = {
//   color: "green",
//   fontSize: "50px"
// };

export default Header;
