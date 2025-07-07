import Subtitle from "../../ui/subtitle/subtitle";
import SubSubtitle from "../../ui/subSubtitle/subSubtitle";
import StoryChantier from "../../ui/storyChantier/storyChantier";
import Team from "../../ui/team/team";
import "./About.css";
import Layout from "../../ui/layout/layout";
import WhyWorkTogether from "../../ui/whyWorkTogether/whyWorkTogether";
import WhoWeAre from "../../ui/whoWeAre/whoWeAre";
import InterventionZones from "../../ui/interventionZones/interventionZones";
import HowFinance from "../../ui/howFinance";

export default function About() {
  return (
    <Layout>
      <WhoWeAre />
      <StoryChantier />
      <Team />
      <section className="about-cards-row">
        <div className="about-cards-col-left">
          <WhyWorkTogether />
        </div>
        <div className="about-cards-col-right">
          <InterventionZones />
          <HowFinance />
        </div>
      </section>

      <section>
        <Subtitle subtitle={"Comment rejoindre le Chantier d’à Côté ?"} />
        <SubSubtitle subSubtitle="Pour bénéficier du Parcours d’Insertion" />
        <SubSubtitle subSubtitle="Aucun prérequis, aucune sélection" />
        <SubSubtitle subSubtitle="Une intégration progressive, adaptée à chacun (PHC)" />
        <SubSubtitle subSubtitle="Nos promesses et objectifs" />
      </section>
    </Layout>
  );
}
