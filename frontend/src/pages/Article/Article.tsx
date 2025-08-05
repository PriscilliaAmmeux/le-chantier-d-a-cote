import { useParams, Link } from "react-router-dom";
import Layout from "../../ui/layout/layout";
import Title from "../../ui/title/title";
import articlesData from "../../api/articles.json";
import "./article.css";

export default function Article() {
  const { slug } = useParams();
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    return (
      <Layout>
        <Title text="Article non trouvé" />
        <Link to="/blog">← Retour au blog</Link>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="article-header">
        <Link to="/blog" className="back-link">
          ← Retour au blog
        </Link>
        <Title text={article.title} />
        <img
          src={article.image}
          alt={article.title}
          className="article-hero-image"
        />
      </div>

      <article className="article-content">
        {article.content?.map((section, index) => (
          <section key={index} className="article-section">
            <h2 className="article-subtitle">{section.subtitle}</h2>
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex} className="article-paragraph">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </article>
    </Layout>
  );
}
