import { Link } from "react-router-dom";
import "./contactLink.css";

export default function ContactLink() {
  return (
    <p>
      <Link to="/contact" className="link-contact font-bold">
        Bénéficier de notre programme d’insertion professionnelle
      </Link>
    </p>
  );
}
