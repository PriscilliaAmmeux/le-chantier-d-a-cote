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

  const renderContentItem = (
    item: string | { type: string; items: string[] },
    index: number
  ) => {
    if (typeof item === "string") {
      return (
        <p key={index} className="article-paragraph">
          {item}
        </p>
      );
    }

    if (item.type === "list") {
      return (
        <ul key={index} className="article-list">
          {item.items.map((listItem, listIndex) => (
            <li key={listIndex} className="article-list-item">
              {listItem}
            </li>
          ))}
        </ul>
      );
    }

    return null;
  };

  const renderSectionContent = (
    content: string | Array<string | { type: string; items: string[] }>
  ) => {
    if (typeof content === "string") {
      return <p className="article-paragraph">{content}</p>;
    }

    return content.map((item, index) => renderContentItem(item, index));
  };

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
            {renderSectionContent(section.content)}
          </section>
        ))}
      </article>
    </Layout>
  );
}
