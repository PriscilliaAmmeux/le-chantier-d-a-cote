import { Link } from "react-router-dom";
import "./notFound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-text">Oups, cette page n'existe pas ou plus.</p>
      <Link to="/" className="notfound-link">
        Retour à l'accueil
      </Link>
    </div>
  );
}
