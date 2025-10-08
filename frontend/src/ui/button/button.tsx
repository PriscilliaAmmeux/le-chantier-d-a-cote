import { Link } from "react-router-dom";
import "./button.css";

interface ButtonProps {
  text: string;
  to?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
}
export default function Button({ text, to, ariaLabel, type }: ButtonProps) {
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
      type={type}
      aria-label={ariaLabel || text}>
      {text}
    </button>
  );
}
