import Subtitle from "../../ui/subtitle/subtitle";
import "./dataYear.css";

export default function DataYear() {
  return (
    <section className="dataYear-section">
          <Subtitle subtitle="Chiffres de l'année" />
          <p className="data-value font-bold">30 salariés en moyenne</p>
    </section>
  );
}
