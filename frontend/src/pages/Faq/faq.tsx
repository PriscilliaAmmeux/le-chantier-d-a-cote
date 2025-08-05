import { useState } from "react";
import Layout from "../../ui/layout/layout";
import Title from "../../ui/title/title";
import faqData from "../../api/faq.json";
import "./faq.css";

export default function Faq() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <Layout>
      <Title text="FAQ" />
      <section className="faq-container">
        {faqData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="faq-category">
            <h2 className="faq-category-title">{category.category}</h2>
            <div className="faq-questions">
              {category.questions.map((item, questionIndex) => {
                const itemId = `${categoryIndex}-${questionIndex}`;
                const isOpen = openItems.includes(itemId);

                return (
                  <div key={itemId} className="faq-item">
                    <button
                      className="faq-question"
                      onClick={() => toggleItem(itemId)}
                      aria-expanded={isOpen}>
                      <span className="faq-question-text">{item.question}</span>
                      <span className="faq-icon">{isOpen ? "×" : "+"}</span>
                    </button>
                    <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
