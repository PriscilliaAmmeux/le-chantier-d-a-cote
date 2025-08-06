import VideoSection from "../../components/videoSection/VideoSection";
import Layout from "../../ui/layout/layout";
import SubSubtitle from "../../ui/subSubtitle/subSubtitle";
import Subtitle from "../../ui/subtitle/subtitle";
import Title from "../../ui/title/title";
import "./missions.css";

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

export default function Missions() {
  return (
    <Layout>
      <Title text="Missions" />
      <div className="missions-subtitle">
        <Subtitle subtitle="Encadrement et Accompagnement Socioprofessionnel" />
      </div>
      <VideoSection videos={videosData} />
    </Layout>
  );
}
