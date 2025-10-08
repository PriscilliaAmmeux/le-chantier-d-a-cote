import logo from "/logo-footer.webp";
import { FaFacebook } from "react-icons/fa";
import "./footer.css";
import ScrollToTopButton from "../../components/scrollToTopButton/scrollToTopButton";
import { Link } from "react-router-dom";
import logoUE from "/UE.webp";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <section className="footer-left">
          <img
            src={logo}
            alt="Logo du Chantier d'à Côté"
            aria-label="Logo du Chantier d'à Côté"
            className="footer-logo"
          />
        </section>
        <section className="footer-center">
          <div className="footer-links-columns">
            <div className="footer-links-col">
              <Link to="/about" className="footer-link">
                Qui sommes-nous ?
              </Link>
              <Link to="/activities" className="footer-link">
                Nos prestations
              </Link>
              <Link to="/missions" className="footer-link">
                Missions
              </Link>
              <Link to="/convergence" className="footer-link">
                Convergence
              </Link>
              <Link to="/faq" className="footer-link">
                FAQ
              </Link>
            </div>
            <div className="footer-links-col">
              <Link to="/blog" className="footer-link">
                Blog
              </Link>
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
              <Link to="/legalNotices" className="footer-link">
                Mentions légales
              </Link>
              <Link to="/privacyPolicy" className="footer-link">
                Politiques de confidentialité
              </Link>
            </div>
            <div className="footer-social-col">
              <a
                href="https://www.facebook.com/groups/520437525576711?locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Page Facebook du Chantier d'à Côté"
                className="footer-link">
                <FaFacebook className="social-icon" />
              </a>
              <img
                src={logoUE}
                alt="Logo Union Européenne"
                aria-label="Logo Union Européenne"
                className="footer-logo-ue"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="footer-copyright">
        © {new Date().getFullYear()} Le Chantier d'à Côté. Tous droits réservés.
      </div>
      <div className="footer-credits">
        Design et développement par{" "}
        <a
          href="https://www.pixelia-and-co.fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link">
          Pixelia&Co
        </a>{" "}
        & rédaction par{" "}
        <a
          href="https://www.instagram.com/motssurmesure/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link">
          Christelle Debrabant (Mots sur Mesure)
        </a>
      </div>
      <ScrollToTopButton />
    </footer>
  );
}
