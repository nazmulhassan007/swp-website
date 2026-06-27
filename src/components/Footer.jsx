import './Footer.css';
import logo from '../assets/logo.svg';
import iconCall from '../assets/icon-call2.svg';
import iconSms from '../assets/icon-sms.svg';
import iconLocation from '../assets/icon-location.svg';
import iconTimer from '../assets/icon-timer.svg';
import logoIco from '../assets/logo-ico.png';
import logoPrs from '../assets/logo-prs.png';
import logoNrla from '../assets/logo-nrla.png';

const QUICK_LINKS = ['Home', 'About Us', 'Services', 'FAQs', 'Contact'];
const SERVICES = ['Residential Property Management', 'Block Management', 'Flexible Property Support Services'];
const CONTACT = [
  { icon: iconCall,     text: '020 3677 3337' },
  { icon: iconSms,      text: 'info@swpmanagement.co.uk' },
  { icon: iconLocation, text: '446 Ewell Road, Surbiton, KT6 7EL' },
  { icon: iconTimer,    text: 'Monday to Friday, 8am to 5pm' },
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* ── Top section ── */}
      <div className="footer__top">
        <div className="footer__inner">
          {/* Brand */}
          <div className="footer__brand">
            <img src={logo} alt="Snow White Management" className="footer__logo" />
            <p className="footer__desc">
              Refined, attentive and organised property management for landlords, residents and residential blocks across West London, South West London and Surrey
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social-link">Facebook</a>
              <a href="#" className="footer__social-link">Instagram</a>
              <a href="#" className="footer__social-link">Linkedin</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-heading">Quick Links</h4>
            <ul className="footer__list">
              {QUICK_LINKS.map((l) => <li key={l}><a href="#" className="footer__list-link">{l}</a></li>)}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-heading">Services</h4>
            <ul className="footer__list">
              {SERVICES.map((s) => <li key={s}><a href="#" className="footer__list-link">{s}</a></li>)}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-heading">Contact</h4>
            <ul className="footer__contact-list">
              {CONTACT.map((item, i) => (
                <li key={i} className="footer__contact-item">
                  <img src={item.icon} alt="" className="footer__contact-icon" />
                  <span className="footer__contact-text">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="footer__divider" />

      {/* ── Badges row ── */}
      <div className="footer__badges-row">
        <div className="footer__badges">
          <img src={logoIco} alt="ICO" className="footer__badge-img footer__badge-img--ico" />
          <img src={logoPrs} alt="PRS" className="footer__badge-img footer__badge-img--prs" />
          <img src={logoNrla} alt="NRLA" className="footer__badge-img footer__badge-img--nrla" />
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="footer__divider" />

      {/* ── Bottom bar ── */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__bottom-text">@2026 Snow white Management, All Rights Reserved</p>
          <p className="footer__bottom-text">Company registration: T455565DF11</p>
          <p className="footer__bottom-text">Privacy Policy | Cookie Policy | Terms of Business</p>
        </div>
      </div>
    </footer>
  );
}
