import logo from "../../assets/logo-footer.webp";
import { FaFacebook } from "react-icons/fa";
import "./footer.css";
import { GrLinkedin } from "react-icons/gr";

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
          <span className="font-bold">Le Chantier d'à côté.</span> Tous droits
          réservés.
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
    </footer>
  );
}
