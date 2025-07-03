import Subtitle from "../../ui/subtitle/subtitle";
import Title from "../../ui/title/title";
import SubSubtitle from "../../ui/subSubtitle/subSubtitle";
import StoryChantier from "../../ui/storyChantier/storyChantier";
import Team from "../../ui/team/team";
import "./About.css";
import Layout from "../../ui/layout/layout";

export default function About() {
  return (
    <Layout>
      <div className="margin-title">
        <Title text="Qui sommes-nous ?" />
      </div>
      <p className="about-presentation  text-align-justify">
        Le Chantier d’à Côté est une structure de l'Économie Sociale et
        Solidaire (ESS). Basée depuis sa création en 2021 à Val de Cognac
        (16370), elle est présidée par Francis Bouchereau et gérée par Karynne
        Aubert, directrice du chantier. Le chantier dépend du dispositif de
        l’insertion par l’activité économique.
      </p>
      <StoryChantier />

      <Team />

      <section>
        <Subtitle subtitle={"Nos zones d’intervention"} />
      </section>

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
