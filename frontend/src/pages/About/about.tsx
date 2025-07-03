import Layout from "../../ui/layout/layout";
import Subtitle from "../../ui/subtitle/subtitle";
import Title from "../../ui/title/title";
import SubSubtitle from "../../ui/subSubtitle/subSubtitle";
import "./About.css";
import StoryChantier from "../../ui/storyChantier/storyChantier";

export default function About() {
  return (
    <Layout>
      <Title text="Qui sommes-nous ?" />
      <p className="about-presentation  text-align-justify">
        Le Chantier d’à Côté est une structure de l'Économie Sociale et
        Solidaire (ESS). Basée depuis sa création en 2021 à Val de Cognac
        (16370), elle est présidée par Francis Bouchereau et gérée par Karynne
        Aubert, directrice du chantier. Le chantier dépend du dispositif de
        l’insertion par l’activité économique.
      </p>
      <StoryChantier />

      <section>
        <Subtitle subtitle={"Présentation du personnel"} />
        <SubSubtitle
          subSubtitle={"Nos Encadrants Techniques en Insertion (ETI)"}
        />
        <SubSubtitle
          subSubtitle={"Nos Accompagnatrices Socio-Professionnelles (ASP)"}
        />
      </section>

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
