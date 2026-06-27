import './Navbar.css';

const NAV_LINKS = ['Home', 'About us', 'Services', "FAQ's", 'Contact'];

function SWPLogo() {
  return (
    <svg
      className="navbar__logo-svg"
      viewBox="0 0 110 70"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer oval border */}
      <ellipse cx="55" cy="35" rx="52" ry="32" fill="none" stroke="#C9A84C" strokeWidth="2" />

      {/* Curved "SNOW WHITE" text along top arc */}
      <path id="topArc" d="M 12,35 A 43,28 0 0,1 98,35" fill="none" />
      <text fontSize="7" fill="#C9A84C" fontWeight="700" letterSpacing="1.5">
        <textPath href="#topArc" startOffset="10%">SNOW WHITE</textPath>
      </text>

      {/* Inner oval behind SWP */}
      <ellipse cx="55" cy="36" rx="26" ry="14" fill="none" stroke="#C9A84C" strokeWidth="1.2" />

      {/* SWP text */}
      <text
        x="55"
        y="41"
        textAnchor="middle"
        fontSize="18"
        fontWeight="900"
        fill="#C9A84C"
        fontFamily="Arial, sans-serif"
        letterSpacing="1"
      >
        SWP
      </text>

      {/* Curved "MANAGEMENT" text along bottom arc */}
      <path id="bottomArc" d="M 12,35 A 43,28 0 0,0 98,35" fill="none" />
      <text fontSize="6" fill="#C9A84C" fontWeight="700" letterSpacing="1.2">
        <textPath href="#bottomArc" startOffset="8%">MANAGEMENT</textPath>
      </text>
    </svg>
  );
}

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
          <SWPLogo />
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
