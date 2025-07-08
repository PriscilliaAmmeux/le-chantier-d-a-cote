import Layout from "../../ui/layout/layout";
import SubSubtitle from "../../ui/subSubtitle/subSubtitle";
import Title from "../../ui/title/title";

import "./activities.css";
import ActivityBlock from "../../components/activityBlock/activityBlock";

import imgBuilding from "../../assets/img5.webp";
import GreenSpace from "../../ui/greenSpace/greenSpace";

const buildingList = [
  {
    title: "C’est professionnalisant.",
    desc: "Les techniques apprises (petite maçonnerie, peinture, pose de revêtements, etc.) sont recherchées dans de nombreux métiers du bâtiment.",
  },
  {
    title: "C’est polyvalent.",
    desc: "On y apprend la précision, la minutie, l’endurance, le respect des consignes et des normes de sécurité. Des compétences transférables vers d’autres secteurs professionnels.",
  },
  {
    title: "C’est collectif.",
    desc: "Les chantiers nécessitent coordination, entraide, communication. L’occasion d’apprendre à travailler en équipe.",
  },
  {
    title: "C’est concret.",
    desc: "Le résultat est visible : murs repeints, sols posés, cloisons montées…",
  },
  {
    title: "C’est gratifiant.",
    desc: "Contribuer à la transformation d’un lieu redonne confiance en soi. Voir l’impact direct de son travail donne un vrai sentiment d’utilité.",
  },
];

export default function Activities() {
  return (
    <Layout>
      <Title text="Activités proposées par Le Chantier d’À Côté" />
      <p className="text-align-justify line-height margin-top">
        Notre association d’insertion sociale et professionnelle propose aux
        bénéficiaires divers ateliers et chantiers pour les former et les
        initier au marché du travail. Parmi nos principales activités pour le
        retour à l’emploi : l’entretien des espaces verts, la rénovation de
        bâtiments et les travaux viticoles.
      </p>
      <GreenSpace />

      <ActivityBlock
        image={imgBuilding}
        alt="Rénovation de bâtiments"
        imageLeft={false}>
        <SubSubtitle subSubtitle="Rénovation second œuvre des bâtiments" />
        <p className="text-align-justify line-height">
          La rénovation de bâtiment fait partie des piliers de notre
          accompagnement social. C’est une activité riche, complète et
          structurante pour les personnes éloignées de l’emploi que nous
          accompagnons.
        </p>
        <p className="text-align-justify line-height">
          Pourquoi proposons-nous la rénovation de bâtiments ? Parce que cette
          mission coche de nombreuses cases utiles à une réelle insertion dans
          l’emploi :
        </p>
        <ul className="line-height ">
          {buildingList.map((item, idx) => (
            <li className="text-align-justify line-height" key={idx}>
              <span className="font-bold">{item.title}</span> {item.desc}
            </li>
          ))}
        </ul>
      </ActivityBlock>
    </Layout>
  );
}
