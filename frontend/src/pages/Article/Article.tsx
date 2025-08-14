import { useParams, Link } from "react-router-dom";
import Layout from "../../ui/layout/layout";
import Title from "../../ui/title/title";
import articlesData from "../../api/articles.json";
import "./article.css";

import type {
  Article,
  Section,
  ContentItem,
  SubSection,
  ListContent,
} from "../../types/articles.types";
import type { JSX } from "react";

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const article = articlesData.find((a) => a.slug === slug) as
    | Article
    | undefined;

  if (!article) {
    return (
      <Layout>
        <Title text="Article non trouvé" />
        <Link to="/blog">← Retour au blog</Link>
      </Layout>
    );
  }

  // Rendu d'un élément de liste
  const renderList = (item: ListContent, index: number) => (
    <ul key={index} className="article-list">
      {item.items.map((listItem, listIndex) => (
        <li key={listIndex} className="article-list-item">
          {listItem}
        </li>
      ))}
    </ul>
  );

  // Rendu d'une sous-section (subsubtitle + text)
  const renderSubSection = (subSection: SubSection, index: number) => (
    <div key={index} className="article-subsection">
      <h4 className="article-subsubtitle">{subSection.subsubtitle}</h4>
      <div className="article-subtext">
        {Array.isArray(subSection.text) ? (
          subSection.text.map((textItem, textIndex) =>
            renderContentItem(textItem, textIndex)
          )
        ) : (
          <p className="article-paragraph">{subSection.text}</p>
        )}
      </div>
    </div>
  );

  // Rendu d'un élément de contenu (gérant tous les types)
  const renderContentItem = (item: ContentItem, index: number): JSX.Element => {
    // Cas simple : texte
    if (typeof item === "string") {
      return (
        <p key={index} className="article-paragraph">
          {item}
        </p>
      );
    }
    // Cas : liste
    if (typeof item === "object" && "type" in item && item.type === "list") {
      return renderList(item, index);
    }

    // Cas : sous-section (subsubtitle + text)
    if (typeof item === "object" && "subsubtitle" in item) {
      return renderSubSection(item, index);
    }

    // Cas : array de sous-sections
    if (Array.isArray(item)) {
      return (
        <div key={index} className="article-subsections-group">
          {item.map((subItem, subIndex) =>
            renderContentItem(subItem, subIndex)
          )}
        </div>
      );
    }

    return <div key={index}>Contenu non reconnu</div>;
  };

  // Rendu du contenu d'une section (description)
  const renderSectionDescription = (description: Section["description"]) => {
    // Description simple (string)
    if (typeof description === "string") {
      return <p className="article-paragraph">{description}</p>;
    }

    // Description complexe (array)
    return description.map((item, index) => renderContentItem(item, index));
  };

  // Rendu d'une section complète
  const renderSection = (section: Section, index: number) => (
    <div key={index} className="article-section">
      <h2 className="article-subtitle">{section.subtitle}</h2>
      {renderSectionDescription(section.description)}
    </div>
  );

  return (
    <Layout>
      <section className="article-header">
        <Link to="/blog" className="back-link">
          ← Retour au blog
        </Link>
        <Title className="article-title" text={article.title} />
        <img
          src={article.image}
          alt={article.title}
          className="article-hero-image"
        />
      </section>
      <section className="article-content">
        {article.summary && (
          <div className="article-intro">
            <p className="article-summary">{article.summary}</p>
          </div>
        )}
        <div className="article-body">
          {Array.isArray(article.content) ? (
            article.content.map(renderSection)
          ) : (
            <p className="article-paragraph">{article.content}</p>
          )}
        </div>
      </section>
    </Layout>
  );
}
