
import Layout from "../../ui/layout/layout";
import Title from "../../ui/title/title";
import "./convergence.css";
import SectionFirstHours from "../../ui/sectionFirstHours/sectionFirstHours";
import SectionConvergence from "../../ui/sectionConvergence/sectionConvergence";

export default function Convergence() {
  return (
    <Layout className="convergence">
      <Title text="Convergence" />
      <section id="association-convergence-france">
        <SectionConvergence />
      </section>

      <section className="data-section">
        <div className="data-placeholder">
          <h3 className="data-title">Données et chiffres clés</h3>
          <p className="data-text">30 salariés convergence</p>
          <p className="data-text">3 parcours 1eres heures en milieu rural</p>
        </div>
      </section>
      <section id="premieres-heures">
        <SectionFirstHours />
      </section>
    </Layout>
  );
}
