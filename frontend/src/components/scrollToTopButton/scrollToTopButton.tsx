import { useState, useEffect } from "react";
import "./ScrollToTopButton.css"; 


export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <section>
      <button
        onClick={scrollToTop}
        className={`style-button-scroll ${isVisible ? "visible" : ""}`}
        aria-label="Remonter en haut de la page">
        ↑ Haut de page
      </button>
    </section>
  );
}
