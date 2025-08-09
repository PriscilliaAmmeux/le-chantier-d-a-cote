import SectionConvergences from "../../ui/sectionConvergences/sectionConvergences";
import Layout from "../../ui/layout/layout";
import Title from "../../ui/title/title";
import "./convergences.css";
import SectionFirstHours from "../../ui/sectionFirstHours/sectionFirstHours";

export default function Convergences() {
  return (
    <Layout className="convergences">
      <Title text="Convergences" />
      <SectionConvergences />

      <section className="data-section">
        <div className="data-placeholder">
          <h3 className="data-title">Données et chiffres clés</h3>
          <p className="data-text">
            Section en attente des statistiques officielles
          </p>
        </div>
      </section>

      <SectionFirstHours />
    </Layout>
  );
}
