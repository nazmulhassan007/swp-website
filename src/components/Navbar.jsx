import './Navbar.css';
import logo from '../assets/logo.svg';

const NAV_LINKS = ['Home', 'About us', 'Services', "FAQ's", 'Contact'];

function ArrowRightIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="/" className="navbar__logo">
          <img src={logo} alt="Snow White Management" className="navbar__logo-img" />
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
            <ArrowRightIcon />
            Login Portal
          </a>
          <a href="#" className="navbar__btn-speak">
            <PhoneIcon />
            Speak to our Team
          </a>
        </div>
      </div>
    </nav>
  );
}
