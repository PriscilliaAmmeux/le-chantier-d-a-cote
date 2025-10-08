import { Link, useLocation } from "react-router-dom";
import "./navBar.css";
import { useState, useRef, useEffect } from "react";

type DropdownKey = "prestations" | "missions" | "convergence" | null;

const PRESTATIONS_ITEMS = [
  {
    to: "/activities#espace-verts",
    label: "Entretien des espaces verts et des espaces naturels",
    section: "green-space",
  },
  {
    to: "/activities#rénovation",
    label: "Rénovation second œuvre des bâtiments",
    section: "building",
  },
  {
    to: "/activities#viticoles",
    label: "Prestations manuelles viticoles",
    section: "viticultural",
  },
];

const MISSIONS_ITEMS = [
  {
    to: "/missions#encadrement-accompagnement",
    label: "Encadrement et Accompagnement Socioprofessionnel",
    section: "encadrement-accompagnement",
  },
  {
    to: "/missions#insertion-economique",
    label: "Insertion par l'activité économique",
    section: "insertion-economique",
  },
];

const CONVERGENCE_ITEMS = [
  {
    to: "/convergence#association-convergence-france",
    label: "L'association Convergence France",
    section: "association-convergence-france",
  },
  {
    to: "/convergence#premieres-heures",
    label: "Premières Heures en Chantier",
    section: "premieres-heures",
  },
];

function DropdownMenu({
  label,
  to,
  isActive,
  isOpen,
  setOpenDropdown,
  onMouseEnter,
  onMouseLeave,
  items,
  scrollToSection,
}: {
  label: string;
  to: string;
  isActive: boolean;
  isOpen: boolean;
  setOpenDropdown: (key: DropdownKey) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  items: { to: string; label: string; section: string }[];
  location: ReturnType<typeof useLocation>;
  scrollToSection: (sectionId: string) => void;
}) {
  return (
    <li className="dropdown">
      <Link
        to={to}
        className={`dropdown-trigger${isActive ? " active" : ""}`}
        onMouseEnter={onMouseEnter}
        aria-expanded={isOpen}
        aria-haspopup="true"
        style={{ display: "flex", alignItems: "center" }}>
        {label}
        <span
          className={`dropdown-arrow${isOpen ? " open" : ""}`}
          style={{ marginLeft: 6 }}
          onClick={(e) => {
            e.preventDefault();
            setOpenDropdown(
              isOpen
                ? null
                : label === "Nos prestations / nos activités"
                ? "prestations"
                : (label.toLowerCase() as DropdownKey)
            );
          }}
          tabIndex={0}
          role="button"
          aria-label={`Ouvrir le menu ${label}`}>
          ▼
        </span>
      </Link>
      {isOpen && (
        <div
          className="dropdown-menu"
          role="menu"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="dropdown-item"
              role="menuitem"
              onClick={() => scrollToSection(item.section)}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}

// ...imports et définitions inchangés...

export default function NavBar() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const prestationsRef = useRef<HTMLLIElement>(null);
  const missionsRef = useRef<HTMLLIElement>(null);
  const convergenceRef = useRef<HTMLLIElement>(null);

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
        convergenceRef.current &&
        !convergenceRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (to: string, exact = false) => {
    if (exact) return location.pathname === to;
    return location.pathname === to || location.pathname.startsWith(to + "/");
  };

  return (
    <nav className="navbar navbar-desktop" aria-label="Menu principal">
      <ul className="navbar-list">
        {/* Accueil */}
        <li>
          <Link
            to="/"
            className={
              isActive("/", true) ? "navbar-link active" : "navbar-link"
            }>
            Accueil
          </Link>
        </li>
        {/* Qui sommes-nous ? */}
        <li>
          <Link
            to="/about"
            className={
              isActive("/about") ? "navbar-link active" : "navbar-link"
            }>
            Qui sommes-nous ?
          </Link>
        </li>
        {/* Nos prestations / nos activités */}
        <DropdownMenu
          label="Nos prestations / nos activités"
          to="/activities"
          isActive={
            location.pathname === "/activities" ||
            location.pathname.startsWith("/activities/")
          }
          isOpen={openDropdown === "prestations"}
          setOpenDropdown={setOpenDropdown}
          onMouseEnter={() => setOpenDropdown("prestations")}
          onMouseLeave={() => setOpenDropdown(null)}
          items={PRESTATIONS_ITEMS}
          location={location}
          scrollToSection={scrollToSection}
        />
        {/* Missions */}
        <DropdownMenu
          label="Missions"
          to="/missions"
          isActive={
            location.pathname === "/missions" ||
            location.pathname.startsWith("/missions/")
          }
          isOpen={openDropdown === "missions"}
          setOpenDropdown={setOpenDropdown}
          onMouseEnter={() => setOpenDropdown("missions")}
          onMouseLeave={() => setOpenDropdown(null)}
          items={MISSIONS_ITEMS}
          location={location}
          scrollToSection={scrollToSection}
        />
        {/* Convergence */}
        <DropdownMenu
          label="Convergence"
          to="/convergence"
          isActive={
            location.pathname === "/convergence" ||
            location.pathname.startsWith("/convergence/")
          }
          isOpen={openDropdown === "convergence"}
          setOpenDropdown={setOpenDropdown}
          onMouseEnter={() => setOpenDropdown("convergence")}
          onMouseLeave={() => setOpenDropdown(null)}
          items={CONVERGENCE_ITEMS}
          location={location}
          scrollToSection={scrollToSection}
        />
        {/* FAQ */}
        <li>
          <Link
            to="/faq"
            className={isActive("/faq") ? "navbar-link active" : "navbar-link"}>
            FAQ
          </Link>
        </li>
        {/* Blog */}
        <li>
          <Link
            to="/blog"
            className={
              isActive("/blog") ? "navbar-link active" : "navbar-link"
            }>
            Blog
          </Link>
        </li>
        {/* Contact */}
        <li>
          <Link
            to="/contact"
            className={
              isActive("/contact") ? "navbar-link active" : "navbar-link"
            }>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
