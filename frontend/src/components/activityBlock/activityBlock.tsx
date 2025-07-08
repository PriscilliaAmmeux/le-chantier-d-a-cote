import "./activityBlock.css";

interface ActivityBlockProps {
  image: string;
  alt: string;
  imageLeft?: boolean;
  children: React.ReactNode;
}

export default function ActivityBlock({
  image,
  alt,
  imageLeft = true,
  children,
}: ActivityBlockProps) {
  return (
    <section className="activity-block-section">
      <div className={`activity-block-flex ${imageLeft ? "left" : "right"}`}>
        <img src={image} alt={alt} className="activity-block-img" />
        <div className="activity-block-content">{children}</div>
      </div>
    </section>
  );
}
