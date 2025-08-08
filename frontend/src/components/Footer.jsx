import logo from '../assets/logo-kasa-white.png' // Ajoute un logo blanc pour le footer
import "../styles/Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
