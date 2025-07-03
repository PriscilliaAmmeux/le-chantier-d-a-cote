import "./subSubtitle.css";

interface SubSubtitleProps {
  subSubtitle: string;
}

export default function SubSubtitle({ subSubtitle }: SubSubtitleProps) {
  return (
    <section>
      <h3 className="sub-subtitle font-bold">{subSubtitle}</h3>
    </section>
  );
}
