import Subtitle from "../../ui/subtitle/subtitle";
import SubSubtitle from "../../ui/subSubtitle/subSubtitle";
import StoryChantier from "../../ui/storyChantier/storyChantier";
import Team from "../../ui/team/team";
import "./About.css";
import Layout from "../../ui/layout/layout";
import WhyWorkTogether from "../../ui/whyWorkTogether/whyWorkTogether";
import WhoWeAre from "../../ui/whoWeAre/whoWeAre";
import InterventionZones from "../../ui/interventionZones/interventionZones";

export default function About() {
  return (
    <Layout>
      <WhoWeAre />
      <StoryChantier />
      <Team />
      <div className="about-cards-row">
        <WhyWorkTogether />
        <InterventionZones />
      </div>

      <section>
        <Subtitle subtitle={"Comment finançons-nous nos missions ?"} />
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
