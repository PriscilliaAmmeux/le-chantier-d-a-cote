import "./subtitle.css";

interface SubtitleProps {
  subtitle: string;
  className?: string;
}

export default function Subtitle({ subtitle }: SubtitleProps) {
  return (
    <section>
      <h3 className="subtitle font-bold">{subtitle}</h3>
    </section>
  );
}
