import "./title.css";

interface TitleProps {
  text: string;
  isHome?: boolean; // true = h1, false = h2
  className?: string;
}

export default function Title({ text, isHome = false, className }: TitleProps) {
  const Tag = isHome ? "h1" : "h2";

  return <Tag className={`title ${className}`}>{text}</Tag>;
}
