import './Footer.css';

const QUICK_LINKS = ['Home', 'About Us', 'Services', 'FAQs', 'Contact'];
const SERVICES = [
  'Residential Property Management',
  'Block Management',
  'Flexible Property Support Services',
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__inner">
          <div className="footer__col footer__col--brand">
            <div className="footer__logo">
              <div className="footer__logo-circle">
                <span className="footer__logo-top">SNOW WHITE</span>
                <span className="footer__logo-swp">SWP</span>
                <span className="footer__logo-bottom">MANAGEMENT</span>
              </div>
            </div>
            <p className="footer__desc">
              Refined, attentive and organised property management for landlords,
              residents and residential blocks across West London, South West
              London and Surrey
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social-link">Facebook</a>
              <a href="#" className="footer__social-link">Instagram</a>
              <a href="#" className="footer__social-link">LinkedIn</a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-heading">Quick Links</h4>
            <ul className="footer__list">
              {QUICK_LINKS.map((link) => (
                <li key={link}><a href="#" className="footer__list-link">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-heading">Services</h4>
            <ul className="footer__list">
              {SERVICES.map((s) => (
                <li key={s}><a href="#" className="footer__list-link">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-heading">Contact</h4>
            <ul className="footer__contact-list">
              <li>
                <span className="footer__contact-icon">&#128222;</span>
                020 3677 3337
              </li>
              <li>
                <span className="footer__contact-icon">&#9993;</span>
                info@swpmanagement.co.uk
              </li>
              <li>
                <span className="footer__contact-icon">&#128205;</span>
                44a Ewell Road, Surbiton, KT6 7EL
              </li>
              <li>
                <span className="footer__contact-icon">&#128337;</span>
                Monday to Friday, 8am to 5pm
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copy">
            &copy;2026 Snow white Management, All Rights Reserved
          </p>
          <p className="footer__reg">
            Company registration: 14556650FI1
          </p>
          <div className="footer__badges">
            <span className="footer__badge footer__badge--ico">ico.</span>
            <span className="footer__badge footer__badge--prs">PRS</span>
            <span className="footer__badge footer__badge--nrla">NRLA</span>
          </div>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <a href="#" className="footer__legal-link">Cookie Policy</a>
            <a href="#" className="footer__legal-link">Terms of Business</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
