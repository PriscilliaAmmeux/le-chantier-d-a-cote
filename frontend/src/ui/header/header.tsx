import logo from "/logo.webp";
import logoUE from "/logo-Union-Européenne-cofinancé-par-l-UE.webp";
import NavBar from "../navBar/navBar";
import NavBarMobile from "../navBarMobile/navBarMobile";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-logos">
        <div className="header-logo-center">
          <img
            src={logo}
            alt="Logo du Chantier d'à Côté"
            aria-label="Logo du Chantier d'à Côté"
            className="header-logo"
          />
        </div>
        <img
          src={logoUE}
          alt="Logo cofinancé par l'Union Européenne"
          aria-label="Logo cofinancé par l'Union Européenne"
          className="header-logo-ue"
        />
      </div>
      <NavBar />
      <NavBarMobile />
    </header>
  );
}
