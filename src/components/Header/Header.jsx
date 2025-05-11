import { NavLink, Link } from "react-router-dom";


const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark border-bottom  border-danger">
    <div className="container">
      <Link className="navbar-brand fw-bolder" to="/">
        <span className="first-latter fs-4 text-danger">S</span>potFlix
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto ">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link text-danger fw-bolder"
                  : "nav-link text-white"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link text-danger fw-bolder"
                  : "nav-link text-white"
              }
              to="/all"
            >
              Movies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link text-danger fw-bolder"
                  : "nav-link text-white"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item ms-4">
            <Link className="btn btn-outline-danger" to="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
