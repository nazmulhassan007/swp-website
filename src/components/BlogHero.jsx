import './BlogHero.css';

export default function BlogHero() {
  return (
    <div className="blog-hero">
      <div className="blog-hero__inner">
        <nav className="breadcrumb">
          <a href="#">Home</a>
          <span className="breadcrumb__sep">/</span>
          <a href="#">Blogs</a>
          <span className="breadcrumb__sep">/</span>
          <span className="breadcrumb__current">Blogs Details Page</span>
        </nav>

        <h1 className="blog-hero__title">
          That&rsquo;s A Wrap! The Best Of Out{' '}
          <em className="blog-hero__title--gold">Travel</em>
          <br />
          <em className="blog-hero__title--gold">The System 2024</em>
        </h1>

        <div className="blog-hero__meta">
          <div className="blog-hero__avatar">
            <img
              src="https://i.pravatar.cc/36?img=12"
              alt="James Olive"
            />
          </div>
          <span className="blog-hero__author">James Olive</span>
          <span className="blog-hero__dot">•</span>
          <span className="blog-hero__date">July 16, 2026</span>
        </div>

        <div className="blog-hero__image-wrap">
          <img
            src="https://picsum.photos/seed/london-buildings/1100/500"
            alt="Featured blog image"
            className="blog-hero__image"
          />
        </div>
      </div>
    </div>
  );
}
