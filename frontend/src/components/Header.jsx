import { Link } from 'react-router-dom';
import logo from '.../src/assets/logo-kasa-red.jpg'; // À importer

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa" className="header-logo" />
      <nav>
        <Link to="/" className="nav-link active">Accueil</Link>
        <Link to="/about" className="nav-link">À propos</Link>
      </nav>
    </header>
  );
}