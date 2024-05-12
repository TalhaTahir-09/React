import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="nav">
        <div className="ul-container">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-a" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active-a" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/forms"
                className={({ isActive }) => (isActive ? "active-a" : "")}
              >
                Forms
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-btn-container">
          <button>Button</button>
        </div>
      </nav>
    </div>
  );
}
