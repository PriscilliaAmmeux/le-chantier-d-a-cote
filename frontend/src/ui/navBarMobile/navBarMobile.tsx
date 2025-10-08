import "./navBarMobile.css";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserCircle,
  FaHandsHelping,
  FaTasks,
  FaUsers,
  FaQuestionCircle,
  FaBlog,
  FaEnvelope,
} from "react-icons/fa";

export default function NavBarMobile() {
  return (
    <nav className="navbar-mobile" aria-label="Menu mobile">
      <Link to="/" aria-label="Accueil">
        <FaHome className="nav-icon" />
      </Link>
      <Link to="/about" aria-label="Qui sommes-nous">
        <FaUserCircle className="nav-icon" />
      </Link>
      <Link to="/activities" aria-label="Prestations">
        <FaHandsHelping className="nav-icon" />
      </Link>
      <Link to="/missions" aria-label="Missions">
        <FaTasks className="nav-icon" />
      </Link>
      <Link to="/convergences" aria-label="Convergences">
        <FaUsers className="nav-icon" />
      </Link>
      <Link to="/faq" aria-label="FAQ">
        <FaQuestionCircle className="nav-icon" />
      </Link>
      <Link to="/blog" aria-label="Blog">
        <FaBlog className="nav-icon" />
      </Link>
      <Link to="/contact" aria-label="Contact">
        <FaEnvelope className="nav-icon" />
      </Link>
    </nav>
  );
}
