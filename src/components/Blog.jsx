import "../css/Blog.css";
import { BLOG_POSTS } from "../data/siteData";
import { Tag, GoldDividerCenter } from "./UI";

export default function Blog() {
  return (
    <section id="blog" className="section">
      <div className="container">
        <div className="section-header-center">
          <Tag>लेख</Tag>
          <GoldDividerCenter />
          <h2 className="heading-display dk-blog-title">From Our Blog</h2>
        </div>

        <div className="dk-blog-grid">
          {BLOG_POSTS.map((p) => (
            <article key={p.id} className="dk-blog-card">
              <div className="dk-blog-img-wrap">
                <img src={p.img} alt={p.title} className="dk-blog-img" />
              </div>
              <div className="dk-blog-body">
                <div className="dk-blog-date">
                  {new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                </div>
                <h3 className="dk-blog-post-title heading-hindi">{p.title}</h3>
                <p className="dk-blog-excerpt">{p.excerpt}</p>
                <button className="dk-blog-read-more">Read More →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
