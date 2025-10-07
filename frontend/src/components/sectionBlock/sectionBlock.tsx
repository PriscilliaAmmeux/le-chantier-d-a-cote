import SubSubtitle from "../../ui/subSubtitle/subSubtitle";
import "./sectionBlock.css";

export interface SectionBlockProps {
  title: string;
  paragraphs: string[];
  list?: string[];
  listClass?: string;
  extraParagraphs?: string[];
  imgSrc?: string;
  imgAlt?: string;
  index?: number; 
}

export default function SectionBlock({
  title,
  paragraphs,
  list,
  listClass,
  extraParagraphs,
  imgSrc,
  imgAlt,
  index = 0, 
}: SectionBlockProps) {
  const isImgLeft = index % 2 === 1;

  return (
    <section className="margin-bottom-section section-block">
      <div
        className={`section-block-flex${
          isImgLeft ? " img-left" : " img-right"
        }`}>
        {imgSrc && isImgLeft && (
          <div className="section-block-img-wrapper">
            <img
              src={imgSrc}
              alt={imgAlt || ""}
              className="section-block-img"
            />
          </div>
        )}
        <div className="section-block-content">
          <SubSubtitle subSubtitle={title} />
          {paragraphs.map((text, i) => (
            <p className="section-text" key={i}>
              {text}
            </p>
          ))}
          {list && (
            <ul className={listClass}>
              {list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          {extraParagraphs &&
            extraParagraphs.map((text, i) => (
              <p className="section-text" key={`extra-${i}`}>
                {text}
              </p>
            ))}
        </div>
        {imgSrc && !isImgLeft && (
          <div className="section-block-img-wrapper">
            <img
              src={imgSrc}
              alt={imgAlt || ""}
              className="section-block-img"
            />
          </div>
        )}
      </div>
    </section>
  );
}
