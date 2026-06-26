import './RelatedBlogs.css';

const BLOGS = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/blog-a/400/220',
    category: 'Residential Property',
    title: 'Residential Property Management Details Owner',
    author: 'James Olive',
    avatar: 'https://i.pravatar.cc/32?img=12',
    date: 'July 16, 2026',
    readTime: '10 min to read',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/blog-b/400/220',
    category: 'Residential Property',
    title: 'Residential Property Management Details Owner',
    author: 'James Olive',
    avatar: 'https://i.pravatar.cc/32?img=12',
    date: 'July 16, 2026',
    readTime: '10 min to read',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/blog-c/400/220',
    category: 'Residential Property',
    title: 'Residential Property Management Details Owner',
    author: 'James Olive',
    avatar: 'https://i.pravatar.cc/32?img=12',
    date: 'July 16, 2026',
    readTime: '10 min to read',
  },
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
                <img src={blog.image} alt={blog.title} className="blog-card__img" />
              </div>
              <div className="blog-card__body">
                <span className="blog-card__category">{blog.category}</span>
                <h3 className="blog-card__title">{blog.title}</h3>
                <div className="blog-card__meta">
                  <div className="blog-card__author">
                    <img src={blog.avatar} alt={blog.author} className="blog-card__avatar" />
                    <span className="blog-card__author-name">{blog.author}</span>
                    <span className="blog-card__date">{blog.date}</span>
                  </div>
                  <span className="blog-card__read">{blog.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
