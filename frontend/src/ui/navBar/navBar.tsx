import { Link } from "react-router-dom";
import "./navBar.css";
import { useState, useRef, useEffect } from "react";

export default function NavBar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const prestationsRef = useRef<HTMLLIElement>(null);
  const missionsRef = useRef<HTMLLIElement>(null);
  const convergencesRef = useRef<HTMLLIElement>(null);

  const scrollToSection = (sectionId: string) => {
    setOpenDropdown(null);
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        prestationsRef.current &&
        !prestationsRef.current.contains(event.target as Node) &&
        missionsRef.current &&
        !missionsRef.current.contains(event.target as Node) &&
        convergencesRef.current &&
        !convergencesRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (dropdown: string) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="navbar navbar-desktop" aria-label="Menu principal">
      <ul className="navbar-list">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">Qui sommes-nous ?</Link>
        </li>
        {/* Dropdown Prestations */}
        <li ref={prestationsRef} className="dropdown">
          <button
            className="dropdown-trigger"
            onClick={() =>
              setOpenDropdown(
                openDropdown === "prestations" ? null : "prestations"
              )
            }
            onMouseEnter={() => setOpenDropdown("prestations")}
            aria-expanded={openDropdown === "prestations"}
            aria-haspopup="true"
            type="button">
            Nos prestations / nos activités
            <span
              className={`dropdown-arrow ${
                openDropdown === "prestations" ? "open" : ""
              }`}>
              ▼
            </span>
          </button>
          {openDropdown === "prestations" && (
            <div
              className="dropdown-menu"
              role="menu"
              onMouseEnter={() => setOpenDropdown("prestations")}
              onMouseLeave={handleMouseLeave}>
              <Link
                to="/activities#espace-verts"
                className="dropdown-item"
                role="menuitem"
                onClick={() => scrollToSection("green-space")}>
                Entretien des espaces verts et des espaces naturels
              </Link>
              <Link
                to="/activities#rénovation"
                className="dropdown-item"
                role="menuitem"
                onClick={() => scrollToSection("building")}>
                Rénovation second œuvre des bâtiments
              </Link>
              <Link
                to="/activities#viticoles"
                className="dropdown-item"
                role="menuitem"
                onClick={() => scrollToSection("viticultural")}>
                Prestations manuelles viticoles
              </Link>
            </div>
          )}
        </li>
        {/* Dropdown Missions */}
        <li ref={missionsRef} className="dropdown">
          <button
            className="dropdown-trigger"
            onClick={() => toggleDropdown("missions")}
            onMouseEnter={() => handleMouseEnter("missions")}
            aria-expanded={openDropdown === "missions"}
            aria-haspopup="true"
            type="button">
            Missions
            <span
              className={`dropdown-arrow ${
                openDropdown === "missions" ? "open" : ""
              }`}>
              ▼
            </span>
          </button>
          {openDropdown === "missions" && (
            <div
              className="dropdown-menu"
              role="menu"
              onMouseEnter={() => handleMouseEnter("missions")}
              onMouseLeave={handleMouseLeave}>
              <Link
                to="/missions#encadrement-accompagnement"
                className="dropdown-item"
                role="menuitem"
                onClick={() => scrollToSection("encadrement-accompagnement")}>
                Encadrement et Accompagnement Socioprofessionnel
              </Link>
              <Link
                to="/missions#insertion-economique"
                className="dropdown-item"
                role="menuitem"
                onClick={() => scrollToSection("insertion-economique")}>
                Insertion par l'activité économique
              </Link>
            </div>
          )}
        </li>
        {/* Dropdown Convergences */}
        <li ref={convergencesRef} className="dropdown">
          <button
            className="dropdown-trigger"
            onClick={() =>
              setOpenDropdown(
                openDropdown === "convergences" ? null : "convergences"
              )
            }
            onMouseEnter={() => setOpenDropdown("convergences")}
            aria-expanded={openDropdown === "convergences"}
            aria-haspopup="true"
            type="button">
            Convergences
            <span
              className={`dropdown-arrow ${
                openDropdown === "convergences" ? "open" : ""
              }`}>
              ▼
            </span>
          </button>
          {openDropdown === "convergences" && (
            <div
              className="dropdown-menu"
              role="menu"
              onMouseEnter={() => setOpenDropdown("convergences")}
              onMouseLeave={handleMouseLeave}>
              <Link
                to="/convergences#association-convergence-france"
                className="dropdown-item"
                role="menuitem"
                onClick={() =>
                  scrollToSection("association-convergence-france")
                }>
                L'association Convergence France
              </Link>
              <Link
                to="/convergences#premieres-heures"
                className="dropdown-item"
                role="menuitem"
                onClick={() => scrollToSection("premieres-heures")}>
                Premières Heures en Chantier
              </Link>
            </div>
          )}
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
