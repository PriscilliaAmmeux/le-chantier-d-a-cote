import logo from "/logo.webp";
import NavBar from "../navBar/navBar";
import NavBarMobile from "../navBarMobile/navBarMobile";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Logo du Chantier d'à Côté"
        aria-label="Logo du Chantier d'à Côté"
        className="header-logo"
      />
      <NavBar />
      <NavBarMobile />
    </header>
  );
}
