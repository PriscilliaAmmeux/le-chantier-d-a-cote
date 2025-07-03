import { Link } from "react-router-dom";
import "./Button.css";

interface ButtonProps {
  text: string;
  to?: string;
  ariaLabel?: string;
}

export default function Button({ text, to, ariaLabel }: ButtonProps) {
  if (to) {
    return (
      <Link
        to={to}
        className="custom-button font-bold"
        aria-label={ariaLabel || text}
        role="button"
        tabIndex={0}>
        {text}
      </Link>
    );
  }
  return (
    <button
      className="custom-button font-bold"
      type="button"
      aria-label={ariaLabel || text}>
      {text}
    </button>
  );
}
