import { Link } from 'react-router-dom'
import logo from '../assets/logo-kasa-red.jpg' // Mets bien ton logo ici
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa" className="logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">À propos</Link>
      </nav>
    </header>
  )
}

export default Header
