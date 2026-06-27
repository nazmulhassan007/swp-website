import './BlogHero.css';
import heroBg from '../assets/hero-bg.jpg';
import avatar from '../assets/avatar.png';
import iconHome from '../assets/icon-home.svg';

export default function BlogHero() {
  return (
    <section className="blog-hero">
      <div className="blog-hero__inner">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <img src={iconHome} alt="" className="breadcrumb__home-icon" />
          <span className="breadcrumb__item breadcrumb__item--muted">Home</span>
          <span className="breadcrumb__sep breadcrumb__sep--muted">/</span>
          <span className="breadcrumb__item breadcrumb__item--muted">Blogs</span>
          <span className="breadcrumb__sep">/</span>
          <span className="breadcrumb__item">Blogs Details Page</span>
        </nav>

        {/* Title */}
        <h1 className="blog-hero__title">
          That&rsquo;s A Wrap! The Best Of Out{' '}
          <em className="blog-hero__title--playball">Travel The System 2024</em>
        </h1>

        {/* Meta */}
        <div className="blog-hero__meta">
          <div className="blog-hero__author-wrap">
            <img src={avatar} alt="James Olive" className="blog-hero__avatar" />
            <span className="blog-hero__author-name">James Olive</span>
          </div>
          <div className="blog-hero__date-wrap">
            <span className="blog-hero__date">July 16, 2026</span>
          </div>
        </div>

        {/* Hero image */}
        <div className="blog-hero__img-wrap">
          <img src={heroBg} alt="Blog hero" className="blog-hero__img" />
          <div className="blog-hero__img-overlay" />
        </div>
      </div>
    </section>
  );
}
