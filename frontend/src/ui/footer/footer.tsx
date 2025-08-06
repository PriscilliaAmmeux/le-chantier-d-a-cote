import logo from "/logo-footer.webp";
import { FaFacebook } from "react-icons/fa";
import "./footer.css";
import { GrLinkedin } from "react-icons/gr";
import ScrollToTopButton from "../../components/scrollToTopButton/scrollToTopButton";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img
          src={logo}
          alt="Logo du Chantier d'à Côté"
          aria-label="Logo du Chantier d'à Côté"
          className="footer-logo"
        />
      </div>

      <div className="footer-center">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-bold-white">Le Chantier d'à côté.</span>{" "}
          <span className="not-display-mobile">Tous droits réservés.</span>
        </p>
        <div className="footer-links">
          <p className="footer-link cursor-pointer">Mentions légales</p>
          <p className="footer-link cursor-pointer">
            Politiques de confidentialités
          </p>
        </div>
        <p>
          Design et développement par{" "}
          <a
            href="https://www.priscillia-ammeux-portfolio.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link">
            Priscillia Ammeux
          </a>{" "}
          & rédaction par{" "}
          <a
            href="https://www.instagram.com/motssurmesure/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link">
            Christelle (Mots sur Mesure)
          </a>
        </p>
      </div>

      <div className="footer-right">
        <a
          href="https://www.facebook.com/groups/520437525576711?locale=fr_FR"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Page Facebook du Chantier d'à Côté">
          <FaFacebook className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Page LinkedIn du Chantier d'à Côté">
          <GrLinkedin className="social-icon" />
        </a>
      </div>
      <ScrollToTopButton />
    </footer>
  );
}
