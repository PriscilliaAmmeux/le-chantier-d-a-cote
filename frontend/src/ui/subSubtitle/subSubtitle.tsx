import "./subSubtitle.css";

interface SubSubtitleProps {
  subSubtitle: string;
  className?: string;
}

export default function SubSubtitle({
  subSubtitle,
  className,
}: SubSubtitleProps) {
  return (
    <section>
      <h3 className={`sub-subtitle font-bold ${className}`}>{subSubtitle}</h3>
    </section>
  );
}
