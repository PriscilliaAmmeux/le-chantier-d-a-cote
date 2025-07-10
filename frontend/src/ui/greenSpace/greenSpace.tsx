import ActivityBlock from "../../components/activityBlock/activityBlock";
import SubSubtitle from "../subSubtitle/subSubtitle";
import imgEspacesVerts from "../../assets/img4.webp";
import MissionsList from "../missionList/missionList";

const greenSpacesBenefits = [
  {
    title: "C’est accessible à tous.",
    desc: "Pas besoin d’expérience ou de qualification préalable, ce qui convient aux personnes très éloignées de l’emploi.",
  },
  {
    title: "C’est formateur.",
    desc: "On y apprend des gestes techniques simples mais rigoureux, le respect de consignes, le travail en équipe, la ponctualité.",
  },
  {
    title: "C’est valorisant.",
    desc: "On voit le résultat du travail rapidement, ce qui (re)donne confiance en soi.",
  },
  {
    title: "C’est en lien avec le territoire.",
    desc: "Ces missions répondent à un vrai besoin local, en lien avec les collectivités et/ou les structures publiques.",
  },
  {
    title: "C’est évolutif.",
    desc: "Les tâches peuvent être adaptées selon le niveau et l’autonomie des personnes en difficulté.",
  },
];

const greenSpacesMissions = [
  {
    title: "D’abord, la tonte :",
    desc: "Une mission simple en apparence, mais qui demande précision, sécurité et autonomie. Cela inclut la manipulation des tondeuses thermiques ou manuelles, le réglage des hauteurs de coupe, et l'entretien des surfaces engazonnées.",
  },
  {
    title: "La taille :",
    desc: "On apprend à reconnaître les essences, manier les outils (sécateurs, taille-haies), et respecter les périodes de taille. Haies, arbustes, massifs… chaque végétal a ses spécificités.",
  },
  {
    title: "Le débroussaillage :",
    desc: "Un travail souvent plus physique, réalisé avec un outil motorisé. Il demande de la concentration, une bonne posture et des gestes sûrs. Idéal pour renforcer l’endurance et la confiance.",
  },
  {
    title: "Le désherbage manuel :",
    desc: "Essentiel pour l’entretien écologique ; cette mission développe la patience, l’attention au détail, et l’implication dans un travail discret mais fondamental.",
  },
  {
    title: "Ou encore la plantation :",
    desc: "Cela inclut les plantations saisonnières ou la création de massifs. On y apprend à préparer un sol, installer une plante, l’arroser, l’entretenir. Une belle mission qui sensibilise à la nature.",
  },
];

const greenSpacesSummary = [
  "En résumé, l’entretien des espaces verts permet aux salariés de se (re)mettre en mouvement tout en apprenant les bases d’un travail structuré.",
  "À travers des gestes techniques simples et des missions concrètes, ils apprennent à manier les outils, à respecter les règles de sécurité et à porter un nouveau regard sur leur environnement.",
  "Peu à peu, les bénéficiaires développent autonomie, rigueur et sens de l’organisation ; des atouts nécessaires et précieux pour envisager une sortie réussie de la précarité, et aller vers la suite en toute assurance.",
  "Avec Le Chantier d’À Côté, faites un premier pas vers une insertion réussie.",
];

export default function GreenSpace() {
  return (
    <section>
      <ActivityBlock
        image={imgEspacesVerts}
        alt="Entretien des espaces verts"
        imageLeft>
        <SubSubtitle
          className="sub-subtitle-highlight"
          subSubtitle="Entretien des espaces verts et des espaces naturels"
        />
        <p className="text-align-justify line-height">
          On a choisi cette activité économique pour les nombreux avantages qui
          en découlent, à savoir :
        </p>
        <ul className="line-height ">
          {greenSpacesBenefits.map((item, idx) => (
            <li className="text-align-justify line-height" key={idx}>
              <span className="font-bold">{item.title}</span> {item.desc}
            </li>
          ))}
        </ul>
      </ActivityBlock>
      <MissionsList missions={greenSpacesMissions} summary={greenSpacesSummary}>
        Les travaux réalisés sont variés et permettent d’acquérir une vraie
        polyvalence. Voici, donc, les principales prestations de services :
      </MissionsList>
    </section>
  );
}
