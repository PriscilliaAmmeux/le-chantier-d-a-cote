import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { useState, useRef, useEffect } from "react";

export default function NavBar() {
  const [isMissionsOpen, setIsMissionsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Simple function to scroll to a section
  const scrollToSection = (sectionId: string) => {
    setIsMissionsOpen(false);

    // If we're already on the missions page
    if (location.pathname === "/missions") {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  };

  // Close the dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMissionsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle opening with delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsMissionsOpen(true);
  };

  // Handle closing with delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMissionsOpen(false);
    }, 300); // 300ms delay before closing
  };

  // Toggle the dropdown
  const toggleDropdown = () => {
    setIsMissionsOpen(!isMissionsOpen);
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
        <li>
          <Link to="/activities">Nos prestations / nos activités</Link>
        </li>

        {/* Dropdown Missions */}
        <li
          ref={dropdownRef}
          className="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <button
            className="dropdown-trigger"
            onClick={toggleDropdown}
            aria-expanded={isMissionsOpen}
            aria-haspopup="true">
            Missions
            <span className={`dropdown-arrow ${isMissionsOpen ? "open" : ""}`}>
              ▼
            </span>
          </button>

          {isMissionsOpen && (
            <div
              className="dropdown-menu"
              role="menu"
              onMouseEnter={handleMouseEnter}
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
