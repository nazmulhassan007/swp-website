import './BlogContent.css';
import articleImg1 from '../assets/article-img1.jpg';
import articleImg2 from '../assets/article-img2.jpg';
import articleImg3 from '../assets/article-img3.jpg';
import socialFacebook from '../assets/social-facebook.png';
import socialLinkedinBg from '../assets/social-linkedin-bg.png';
import socialLinkedin from '../assets/social-linkedin.png';
import socialInstagram from '../assets/social-instagram.png';
import socialYoutubeBg from '../assets/social-youtube-bg.png';
import socialYoutube from '../assets/social-youtube.png';

const SUMMARY_LINKS = [
  { label: 'About these Projects', active: true },
  { label: 'Why Do Many Travelers Choose Slow Travel in the first place?' },
  { label: 'About these Projects' },
  { label: 'About these Projects' },
];

const SLOW_TRAVEL_BODY = 'Slow travel focuses on depth instead of distance. Rather than visiting many places quickly, travelers spend more time in fewer locations. This approach encourages cultural connection, reduces travel fatigue, and supports local communities through mindful exploration and longer stays. A question then arises: does our travel spending support local culture and sustainability, or does it harm the places we visit?';

export default function BlogContent() {
  return (
    <section className="blog-content">
      <div className="blog-content__inner">
        {/* ── Left Sidebar ── */}
        <aside className="blog-sidebar">
          {/* Summary card */}
          <div className="sidebar-card">
            <h3 className="sidebar-card__title">Summary</h3>
            <ul className="summary-list">
              {SUMMARY_LINKS.map((link, i) => (
                <li key={i}>
                  <a
                    href={`#section-${i + 1}`}
                    className={`summary-list__link${link.active ? ' summary-list__link--active' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social share card */}
          <div className="sidebar-card">
            <h3 className="sidebar-card__title">Social Share</h3>
            <div className="social-icons">
              {/* Facebook */}
              <div className="social-icon-wrap">
                <img src={socialFacebook} alt="Facebook" className="social-icon-img" />
              </div>
              {/* LinkedIn */}
              <div className="social-icon-wrap social-icon-wrap--stacked">
                <img src={socialLinkedinBg} alt="" className="social-icon-img" />
                <img src={socialLinkedin} alt="LinkedIn" className="social-icon-overlay" />
              </div>
              {/* Instagram */}
              <div className="social-icon-wrap">
                <img src={socialInstagram} alt="Instagram" className="social-icon-img" />
              </div>
              {/* YouTube */}
              <div className="social-icon-wrap social-icon-wrap--stacked">
                <img src={socialYoutubeBg} alt="" className="social-icon-img" />
                <img src={socialYoutube} alt="YouTube" className="social-icon-overlay social-icon-overlay--yt" />
              </div>
            </div>
          </div>
        </aside>

        {/* ── Main Article ── */}
        <article className="blog-article">
          {/* Section 1 */}
          <div id="section-1" className="article-section">
            <h2 className="article-section__heading">About these Projects</h2>
            <p className="article-section__body">{SLOW_TRAVEL_BODY}</p>
          </div>

          {/* Section 2 */}
          <div id="section-2" className="article-section">
            <h2 className="article-section__heading">Why Do Many Travelers Choose Slow Travel in the first place?</h2>
            <p className="article-section__body">
              Sometimes travel becomes rushed and overwhelming, leaving little time to enjoy the place you are visiting. When every day is filled with tight schedules, constant movement, and long journeys, the experience can feel exhausting rather than rewarding. Slow travel offers a calmer approach, allowing travelers to stay longer, move less, and connect more deeply with local life, culture, food, and everyday routines, without pressure or hurry always.
            </p>
            <ul className="article-section__bullets">
              <li>Encourages deeper cultural connection and local interaction</li>
              <li>Reduces travel stress, fatigue, and constant rushing</li>
              <li>Creates meaningful memories through mindful exploration</li>
            </ul>
          </div>

          {/* Article image 1 */}
          <div className="article-img-wrap">
            <img src={articleImg1} alt="" className="article-img" />
          </div>

          {/* Section 3 */}
          <div id="section-3" className="article-section">
            <h2 className="article-section__heading">About these Projects</h2>
            <p className="article-section__body">{SLOW_TRAVEL_BODY}</p>
          </div>

          {/* Two images side by side */}
          <div className="article-img-row">
            <img src={articleImg2} alt="" className="article-img-half" />
            <img src={articleImg3} alt="" className="article-img-half" />
          </div>

          {/* Section 4 */}
          <div id="section-4" className="article-section">
            <h2 className="article-section__heading">About these Projects</h2>
            <p className="article-section__body">{SLOW_TRAVEL_BODY}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
