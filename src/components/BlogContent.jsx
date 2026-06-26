import './BlogContent.css';

const SUMMARY_LINKS = [
  { label: 'About these Projects', active: true },
  { label: 'Why Do Many Travelers Choose Slow Travel In the first place?' },
  { label: 'About these Projects' },
  { label: 'About these Projects' },
];

const SOCIAL_ICONS = [
  {
    name: 'Facebook',
    path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
  {
    name: 'LinkedIn',
    path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
    isMultiPath: true,
  },
  {
    name: 'Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    name: 'YouTube',
    path: 'M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z M9.75 15.02l5.75-3.02-5.75-3.02v6.04z',
  },
];

const ARTICLE_SECTIONS = [
  {
    id: 1,
    title: 'About these Projects',
    body: 'Slow travel focuses on depth instead of distance. Rather than visiting many places quickly, travelers spend more time in fewer locations. This approach encourages cultural connection, reduces travel fatigue, and supports local communities through mindful exploration and longer stays. A question then arises: does our travel spending support local culture and sustainability, or does it harm the places we visit?',
    image: null,
    bullet: null,
  },
  {
    id: 2,
    title: 'Why Do Many Travelers Choose Slow Travel in the first place?',
    body: 'Sometimes travel becomes rushed and overwhelming, leaving little time to enjoy the place you are visiting. When every day is filled with tight schedules, constant movement, and long journeys, the experience can feel exhausting rather than rewarding. Slow travel offers a calmer approach, allowing travelers to stay longer, move less, and connect more deeply with local life, culture, food, and everyday routines, without pressure or hurry always.',
    image: 'https://picsum.photos/seed/brick-row/700/380',
    bullet: [
      'Encourages deeper cultural connection and local interaction',
      'Reduces travel stress, fatigue, and constant rushing',
      'Creates meaningful memories through mindful exploration',
    ],
  },
  {
    id: 3,
    title: 'About these Projects',
    body: 'Slow travel focuses on depth instead of distance. Rather than visiting many places quickly, travelers spend more time in fewer locations. This approach encourages cultural connection, reduces travel fatigue, and supports local communities through mindful exploration and longer stays. A question then arises: does our travel spending support local culture and sustainability, or does it harm the places we visit?',
    images: [
      'https://picsum.photos/seed/buildings-row/340/220',
      'https://picsum.photos/seed/people-group/340/220',
    ],
  },
  {
    id: 4,
    title: 'About these Projects',
    body: 'Slow travel focuses on depth instead of distance. Rather than visiting many places quickly, travelers spend more time in fewer locations. This approach encourages cultural connection, reduces travel fatigue, and supports local communities through mindful exploration and longer stays. A question then arises: does our travel spending support local culture and sustainability, or does it harm the places we visit?',
  },
];

function SocialIcon({ icon }) {
  if (icon.isMultiPath) {
    const paths = icon.path.split(' M').map((p, i) => (i === 0 ? p : 'M' + p));
    return (
      <a href="#" className="social-icon" aria-label={icon.name}>
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          {paths.map((p, i) => (
            <path key={i} d={p} />
          ))}
        </svg>
      </a>
    );
  }
  return (
    <a href="#" className="social-icon" aria-label={icon.name}>
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d={icon.path} />
      </svg>
    </a>
  );
}

export default function BlogContent() {
  return (
    <div className="blog-content-wrap">
      <div className="blog-content__inner">
        <aside className="blog-sidebar">
          <div className="sidebar-card">
            <h3 className="sidebar-card__heading">Summary</h3>
            <ul className="sidebar-summary">
              {SUMMARY_LINKS.map((link, i) => (
                <li key={i}>
                  <a
                    href={`#section-${i + 1}`}
                    className={`sidebar-summary__link${link.active ? ' sidebar-summary__link--active' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-card sidebar-card--social">
            <h3 className="sidebar-card__heading">Social Share</h3>
            <div className="social-icons">
              {SOCIAL_ICONS.map((icon) => (
                <SocialIcon key={icon.name} icon={icon} />
              ))}
            </div>
          </div>
        </aside>

        <article className="blog-article">
          {ARTICLE_SECTIONS.map((section) => (
            <div key={section.id} id={`section-${section.id}`} className="article-section">
              <h2 className="article-section__title">{section.title}</h2>
              <p className="article-section__body">{section.body}</p>

              {section.bullet && (
                <ul className="article-section__bullets">
                  {section.bullet.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}

              {section.image && (
                <div className="article-section__img-wrap">
                  <img src={section.image} alt="" className="article-section__img" />
                </div>
              )}

              {section.images && (
                <div className="article-section__img-row">
                  {section.images.map((src, i) => (
                    <img key={i} src={src} alt="" className="article-section__img-half" />
                  ))}
                </div>
              )}
            </div>
          ))}
        </article>
      </div>
    </div>
  );
}
