import Subtitle from "../../ui/subtitle/subtitle";
import "./dataMonth.css";

export default function DataMonth() {
  return (
    <section className="dataMonth-section">
      <h2 className="title-data-month font-bold"></h2>
      <div className="data-grid">
        <div className="data-block">
          <Subtitle subtitle="Chiffres de l'année" />
          <p className="data-value font-bold">30 salariés en moyenne</p>
        </div>
      </div>
    </section>
  );
}
