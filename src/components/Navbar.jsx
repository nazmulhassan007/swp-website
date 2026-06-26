import './Navbar.css';

const NAV_LINKS = ['Home', 'About us', 'Services', "FAQ's", 'Contact'];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="/" className="navbar__logo">
          <div className="navbar__logo-circle">
            <span className="navbar__logo-top">SNOW WHITE</span>
            <span className="navbar__logo-swp">SWP</span>
            <span className="navbar__logo-bottom">MANAGEMENT</span>
          </div>
        </a>

        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href="#"
                className={`navbar__link${link === 'Services' ? ' navbar__link--active' : ''}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <a href="#" className="navbar__btn-login">
            <span>&#8594;</span> Login Portal
          </a>
          <a href="#" className="navbar__btn-speak">
            &#128172; Speak to Our Team
          </a>
        </div>
      </div>
    </nav>
  );
}
