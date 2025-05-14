import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";



export default function Header() {
 
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  const handleLogout = () => signOut(auth);

  
  const navClass = ({ isActive }) =>
    isActive ? "nav-link text-danger fw-bolder" : "nav-link text-white";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark border-bottom  border-danger">
      <div className="container bg-black">
        {/* logo*/}
        <NavLink className="navbar-brand fw-bolder" to="/">
          <span className="first-latter fs-4 text-danger">S</span>potFlix
        </NavLink>

        {/* mobile btn*/}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/*home for all*/}
            <li className="nav-item bg-black">
              <NavLink to="/" className={navClass}>
                Home
              </NavLink>
            </li>

            {/*protected links*/}
            {user && (
              <>
                <li className="nav-item bg-black">
                  <NavLink to="/all" className={navClass}>
                    All&nbsp;Movies
                  </NavLink>
                </li>
                <li className="nav-item bg-black">
                  <NavLink to="/contact" className={navClass}>
                    Contact
                  </NavLink>
                </li>
              </>
            )}

            {/* Sign Up / Logout bbtn */}
            <li className="nav-item ms-4 bg-black">
              {user ? (
                <button
                  className="btn btn-outline-danger bg-black"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                
                <NavLink
                  to="/auth"
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-danger active-signup bg-black"
                      : "btn btn-outline-danger signup-btn bg-black"
                  }
                >
                  Sign&nbsp;Up
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
