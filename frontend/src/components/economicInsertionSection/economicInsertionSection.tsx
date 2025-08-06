import SubSubtitle from "../../ui/subSubtitle/subSubtitle";
import Subtitle from "../../ui/subtitle/subtitle";
import "./economicInsectionSection.css";

const textContent = ["Attente texte"];

export default function EconomicInsertionSection() {
  return (
    <section className="content-section">
      <div className="missions-subtitle">
        <Subtitle subtitle="Insertion par l'activité économique" />
      </div>
      <div className="video-text-container">
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/O7olB-_1X9w"
            title="Insertion par l'activité économique"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="content-wrapper">
          <SubSubtitle subSubtitle="Accompagnateur SocioProfessionel & Encadrant Technique d'Insertion des métiers spécifiques aux SIAE" />
          <div className="text-content">
            {textContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
      <p>attente texte</p>
    </section>
  );
}
