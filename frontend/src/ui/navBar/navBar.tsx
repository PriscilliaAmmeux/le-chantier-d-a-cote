import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar" aria-label="Menu principal">
      <ul className="navbar-list">
        <li>
          <a href="#home">Accueil</a>
        </li>
        <li>
          <a href="#about">Qui sommes-nous ?</a>
        </li>{" "}
        <li>
          <a href="#services">Nos prestations / nos activités </a>
        </li>
        <li>
          <a href="#missions">Missions</a>
        </li>
        <li>
          <a href="#convergences">Convergences</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
