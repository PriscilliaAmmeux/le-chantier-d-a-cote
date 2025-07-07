import { Link } from "react-router-dom";
import "./contactLink.css";

interface ContactLinkProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ContactLink({ children }: ContactLinkProps) {
  return (
    <Link to="/contact" className="link-contact font-bold">
      {children || "page contact"}
    </Link>
  );
}
