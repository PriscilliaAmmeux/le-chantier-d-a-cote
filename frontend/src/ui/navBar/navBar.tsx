import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-desktop" aria-label="Menu principal">
      <ul className="navbar-list">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">Qui sommes-nous ?</Link>
        </li>
        <li>
          <Link to="/activities">Nos prestations / nos activités</Link>
        </li>
        <li>
          <Link to="/missions">Missions</Link>
        </li>
        <li>
          <Link to="/convergences">Convergences</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
