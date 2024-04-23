import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <div>
        <nav
          className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode}`}
        >
          <div className="container-fluid">
            <a className="navbar-brand navbar-title" href="/">
              {props.title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    {props.home}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    {props.about}
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <div className="form-check form-switch">
                  <input
                    onClick={props.toggleMode}
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    {props.mode === 'dark' ? 'Enable Light Mode': 'Enable Dark Mode'}
                  </label>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Guest",
};
