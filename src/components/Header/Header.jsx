import { NavLink, Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="container header__inner">
      <Link to="/" className="logo">
        <spin className="first-latter">S</spin>potFlix
      </Link>

      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/all">Movies</NavLink>
        {/* Removed “Popular” link because that content lives on Home now */}
        <button className="bg-transparent text-red-500 border-2 border-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition-all duration-300">
          Sign Up
        </button>
      </nav>
    </div>
  </header>
);

export default Header;
