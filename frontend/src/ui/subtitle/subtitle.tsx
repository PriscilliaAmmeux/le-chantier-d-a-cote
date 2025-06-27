import "./subtitle.css";

interface SubtitleProps {
  subtitle: string;
}

export default function Subtitle({ subtitle }: SubtitleProps) {
  return (
    <section>
      <h3 className="subtitle">{subtitle}</h3>
    </section>
  );
}
