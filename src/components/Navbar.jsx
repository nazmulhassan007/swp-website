import './Navbar.css';
import logo from '../assets/logo.svg';
import iconLogin from '../assets/icon-login.svg';
import iconCall from '../assets/icon-call.svg';

const NAV_LINKS = ['Home', 'About us', 'Services', "FAQ's", 'Contact'];

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
            <img src={iconLogin} alt="" className="navbar__btn-icon" />
            Login Portal
          </a>
          <a href="#" className="navbar__btn-speak">
            <img src={iconCall} alt="" className="navbar__btn-icon" />
            Speak to our Team
          </a>
        </div>
      </div>
    </nav>
  );
}
