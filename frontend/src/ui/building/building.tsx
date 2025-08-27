import SubSubtitle from "../../ui/subSubtitle/subSubtitle";
import ActivityBlock from "../../components/activityBlock/activityBlock";
import imgBuilding from "/reno-batiment.webp";
import MissionsList from "../missionList/missionList";
import "./building.css";

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

const buildingMissions = [
  {
    title: "Peinture intérieure et extérieure : ",
    subtitle:
      "C’est l’activité la plus répandue sur nos chantiers.  Les participants apprennent à :",
    desc: [
      "protéger les zones sensibles (sols, plinthes, fenêtres, portes, poignées, prises, interrupteurs, radiateurs, meubles),",
      "préparer les surfaces (ponçage, nettoyage, enduit),",
      "appliquer peintures et sous-couches.",
    ],
    summary:
      "On y développe minutie, patience, coordination œil-main, ainsi qu’un vrai sens de l’esthétique et du travail bien fait.",
  },
  {
    title: "Pose de revêtements de sol : ",
    desc: [
      "Parquet flottant, lino ou carrelage, cette mission initie à la prise de mesure, à la découpe, à l’alignement, et à la pose selon les normes.",
    ],
    summary:
      "Cela demande concentration, rigueur et précision. C’est une excellente école pour apprendre à travailler de manière structurée, en suivant un plan précis.",
  },
  {
    title: "Petite maçonnerie : ",
    desc: [
      "Les participants découvrent les gestes de base du bâtiment : reboucher un mur, monter une cloison, réaliser des joints ou des enduits, etc.",
    ],
    summary:
      "Ils apprennent aussi à manipuler les matériaux, à comprendre la logique de construction et à respecter les normes de sécurité.",
  },
  {
    title: "Préparation des supports :",
    desc: [
      "Avant toute rénovation, il est essentiel de nettoyer, poncer et lisser les surfaces. Bien que cette étape soit souvent invisible pendant le chantier, ses effets se révèlent pleinement une fois le travail terminé.",
    ],
    summary:
      "Elle permet de développer la rigueur, l’anticipation et le sens du détail, tout en soulignant l’importance du travail préparatoire dans la réussite de tout projet de rénovation (ou autre).",
  },
  {
    title: "Nettoyage et remise en état de chantier :",
    desc: [
      "Chacune de nos interventions se termine par une remise en propreté du chantier, incluant le tri des déchets, le balayage, le rangement des outils, etc.",
      "C’est une mission qui responsabilise et forme à l’autonomie. Elle souligne que la qualité du travail ne se limite pas aux tâches techniques, mais comprend aussi le respect des lieux (ateliers et chantiers) et du matériel utilisé.",
    ],
    summary:
      "Somme toute, les travaux de rénovation que nous proposons sont accessibles à tous. Ils offrent aux participants l’opportunité de découvrir les fondamentaux du métier tout en développant une véritable polyvalence, indispensable pour une insertion professionnelle réussie.",
  },
];

export default function Building() {
  return (
    <section>
      <ActivityBlock
        image={imgBuilding}
        alt="Rénovation de bâtiments"
        imageLeft={false}>
        <SubSubtitle
          className="sub-subtitle-highlight"
          subSubtitle="Rénovation second œuvre des bâtiments"
        />
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
      <MissionsList missions={buildingMissions} />
    </section>
  );
}
