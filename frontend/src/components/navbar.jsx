import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo-kasa-red.png";

const Navbar = () => {
  return (
    <nav className="navbar">
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
