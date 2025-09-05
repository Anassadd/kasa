import { NavLink, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/logo-kasa-red.png";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className={`navbar ${isHome ? "navbar-home" : ""}`}>
      <div className="navbar-logo">
        <img src={logo} alt="Kasa" />
      </div>
      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}
        >
          À propos
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

