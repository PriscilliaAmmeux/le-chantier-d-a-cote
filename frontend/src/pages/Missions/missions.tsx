import EconomicInsertionSection from "../../components/economicInsertionSection/economicInsertionSection";
import SocioprofessionalSection from "../../components/socioprofessionalSection/socioprofessionalSection";
import Layout from "../../ui/layout/layout";
import Title from "../../ui/title/title";
import "./missions.css";

export default function Missions() {
  return (
    <Layout>
      <Title text="Missions" />
      <SocioprofessionalSection />

      <EconomicInsertionSection />
    </Layout>
  );
}
