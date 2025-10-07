import SectionConvergences from "../../ui/sectionConvergences/sectionConvergences";
import Layout from "../../ui/layout/layout";
import Title from "../../ui/title/title";
import "./convergences.css";
import SectionFirstHours from "../../ui/sectionFirstHours/sectionFirstHours";

export default function Convergences() {
  return (
    <Layout className="convergences">
      <Title text="Convergences" />
      <section id="association-convergence-france">
        <SectionConvergences />
      </section>

      <section className="data-section">
        <div className="data-placeholder">
          <h3 className="data-title">Données et chiffres clés</h3>
          <p className="data-text">
            30 salariés convergence
          </p>
          <p className="data-text">
            3 parcours 1eres heures en milieu rural
          </p>
        </div>
      </section>
      <section id="premieres-heures">
        <SectionFirstHours />
      </section>
    </Layout>
  );
}
