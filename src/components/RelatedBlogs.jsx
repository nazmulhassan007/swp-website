import './RelatedBlogs.css';
import blogCardImg from '../assets/blog-card.jpg';
import avatar from '../assets/avatar.png';

const BLOGS = [
  { id: 1, title: 'Residential Property Management Details Owner', author: 'James Olive', date: 'July 16, 2026', readTime: '10 min to read' },
  { id: 2, title: 'Residential Property Management Details Owner', author: 'James Olive', date: 'July 16, 2026', readTime: '10 min to read' },
  { id: 3, title: 'Residential Property Management Details Owner', author: 'James Olive', date: 'July 16, 2026', readTime: '10 min to read' },
];

export default function RelatedBlogs() {
  return (
    <section className="related-blogs">
      <div className="related-blogs__inner">
        <div className="related-blogs__header">
          <h2 className="related-blogs__heading">Related Blogs</h2>
          <a href="#" className="related-blogs__cta">Explore All Blogs</a>
        </div>

        <div className="related-blogs__grid">
          {BLOGS.map((blog) => (
            <a href="#" key={blog.id} className="blog-card">
              <div className="blog-card__img-wrap">
                <img src={blogCardImg} alt={blog.title} className="blog-card__img" />
              </div>
              <div className="blog-card__body">
                <h3 className="blog-card__title">{blog.title}</h3>
                <div className="blog-card__meta">
                  <div className="blog-card__author">
                    <img src={avatar} alt={blog.author} className="blog-card__avatar" />
                    <span className="blog-card__author-name">{blog.author}</span>
                  </div>
                  <span className="blog-card__date">{blog.date}</span>
                </div>
                <p className="blog-card__read">{blog.readTime}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
