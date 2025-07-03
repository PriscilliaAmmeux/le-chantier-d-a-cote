import "./Title.css";

interface TitleProps {
  text: string;
  isHome?: boolean; // true = h1, false = h2
  classname?: string;
}

export default function Title({ text, isHome = false }: TitleProps) {
  const Tag = isHome ? "h1" : "h2";

  return <Tag className="title">{text}</Tag>;
}
