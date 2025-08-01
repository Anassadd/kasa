import logoWhite from '.../src/assets/logo-kasa-white.jpg'; // À importer

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logoWhite} alt="Kasa" className="footer-logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}