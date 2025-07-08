import "./greenSpaceMissionList.css";

const greenSpacesMissions = [
  {
    title: "D’abord, la tonte,",
    desc: "une mission simple en apparence, mais qui demande précision, sécurité et autonomie. Cela inclut la manipulation des tondeuses thermiques ou manuelles, le réglage des hauteurs de coupe, et l'entretien des surfaces engazonnées.",
  },
  {
    title: "La taille,",
    desc: "on apprend à reconnaître les essences, manier les outils (sécateurs, taille-haies), et respecter les périodes de taille. Haies, arbustes, massifs… chaque végétal a ses spécificités.",
  },
  {
    title: "Le débroussaillage,",
    desc: "un travail souvent plus physique, réalisé avec un outil motorisé. Il demande de la concentration, une bonne posture et des gestes sûrs. Idéal pour renforcer l’endurance et la confiance.",
  },
  {
    title: "Le désherbage manuel,",
    desc: "essentiel pour l’entretien écologique ; cette mission développe la patience, l’attention au détail, et l’implication dans un travail discret mais fondamental.",
  },
  {
    title: "Ou encore la plantation",
    desc: ", cela inclut les plantations saisonnières ou la création de massifs. On y apprend à préparer un sol, installer une plante, l’arroser, l’entretenir. Une belle mission qui sensibilise à la nature.",
  },
];

const greenSpacesSummary = [
  "En résumé, l’entretien des espaces verts permet aux salariés de se (re)mettre en mouvement tout en apprenant les bases d’un travail structuré.",
  "À travers des gestes techniques simples et des missions concrètes, ils apprennent à manier les outils, à respecter les règles de sécurité et à porter un nouveau regard sur leur environnement.",
  "Peu à peu, les bénéficiaires développent autonomie, rigueur et sens de l’organisation ; des atouts nécessaires et précieux pour envisager une sortie réussie de la précarité, et aller vers la suite en toute assurance.",
  "<span class='font-bold'>Avec Le Chantier d’À Côté</span>, faites un premier pas vers une insertion réussie.",
];

export default function GreenSpacesMissionsList() {
  return (
    <section>
      <h4>Les différents types de missions </h4>
      <p className="text-align-justify line-height">
        Les travaux réalisés sont variés et permettent d’acquérir une vraie
        polyvalence. Voici, donc, les principales prestations de services :
      </p>
      <ul className="margin-list">
        {greenSpacesMissions.map((mission, idx) => (
          <li className="text-align-justify line-height" key={idx}>
            <span className="font-bold">{mission.title}</span>
            {mission.desc.startsWith(mission.title)
              ? ` ${mission.desc.slice(mission.title.length)}`
              : ` ${mission.desc}`}
          </li>
        ))}
      </ul>
      <div className="margin-bottom">
        {greenSpacesSummary.map((text, idx) => (
          <p
            className={
              "text-align-justify line-height" +
              (idx === greenSpacesSummary.length - 1
                ? " green-space-summary-large"
                : "")
            }
            key={idx}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}
      </div>
    </section>
  );
}
