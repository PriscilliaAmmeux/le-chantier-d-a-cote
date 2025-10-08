
import CardSection from "../../components/cardSection/cardSection";
import Subtitle from "../subtitle/subtitle";
import "./interventionZones.css";

export default function InterventionZones() {
  return (
    <CardSection>
      <Subtitle subtitle="Nos zones d’intervention" />
      <p className="">
        Nous intervenons dans un rayon de 35 à 40 km autour de Val de Cognac,
        principalement sur le territoire de Grand Cognac, ainsi que dans les
        communes limitrophes du côté de Burie et Chérac (17).
      </p>
    </CardSection>
  );
}
