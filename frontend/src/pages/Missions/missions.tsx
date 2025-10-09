import EconomicInsertionSection from "../../components/economicInsertionSection/economicInsertionSection";
import SocioprofessionalSection from "../../components/socioprofessionalSection/socioprofessionalSection";
import Layout from "../../ui/layout/layout";
import Title from "../../ui/title/title";
import "./missions.css";
import logoUE from "/logo-Union-Européenne-cofinancé-par-l-UE.webp";

export default function Missions() {
  return (
    <Layout>
      <Title text="Missions" />
      <section id="encadrement-accompagnement">
        <SocioprofessionalSection />
      </section>
      <img
        src={logoUE}
        alt="Logo cofinancé par l'Union Européenne"
        aria-label="Logo cofinancé par l'Union Européenne"
        className="missions-logo-ue"
      />
      <section id="insertion-economique">
        <EconomicInsertionSection />
      </section>
    </Layout>
  );
}
