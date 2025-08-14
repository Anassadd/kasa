import { Link } from 'react-router-dom';
import './error.css';

function Error() {
  return (
    <div className="error-wrapper">
      <main className="error-container">
        <div className="error-content">
          <h1 className="error-code">404</h1>
          <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
          <Link to="/" className="error-link">
            Retourner sur la page d'accueil
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Error;