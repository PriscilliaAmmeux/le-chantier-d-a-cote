import Subtitle from "../../ui/subtitle/subtitle";
import VideoSection from "../videoSection/videoSection";
import "./socioprofessionalSection.css";

const videosData = [
  {
    id: "Cw6kfgFLe68",
    title: "Mon chantier d'insertion par le travail",
    subtitle: "Mon chantier d'insertion par le travail",
  },
  {
    id: "nQC-W7h7eyg",
    title: "Présentation de l'Atelier Chantier d'Insertion",
    subtitle: "Présentation de l'Atelier Chantier d'Insertion (ACI)",
  },
];

export default function SocioprofessionalSection() {
  return (
    <section>
      <div className="missions-subtitle">
        <Subtitle subtitle="Encadrement et Accompagnement Socioprofessionnel" />
      </div>
      <VideoSection videos={videosData} />
    </section>
  );
}
