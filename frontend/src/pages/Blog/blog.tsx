import { Link } from "react-router-dom";
import Layout from "../../ui/layout/layout";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button";
import articlesData from "../../api/articles.json";
import "./blog.css";

export default function Blog() {
  return (
    <Layout>
      <Title text="Blog" />
      <section className="blog-grid">
        {articlesData.map((article) => (
          <article key={article.id} className="blog-card">
            <div className="blog-card-image">
              <img
                src={article.image}
                alt={article.title}
                aria-label={article.aria}
              />
            </div>
            <div className="blog-card-content">
              <h3 className="blog-card-title">{article.title}</h3>
              <p className="blog-card-summary">{article.summary}</p>
              <div className="blog-card-action">
                <Link to={`/blog/${article.slug}`}>
                  <Button
                    text="Voir l'article"
                    ariaLabel={`Lire l'article ${article.title}`}
                  />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  );
}
