import { useMemo } from "react";
import Subtitle from "../subtitle/subtitle";
import "./sectionFirstHours.css";

const firstHoursData = [
  {
    title: "Les principaux dispositifs de Convergence France : Le PHC",
    description: [
      "Le dispositif Premières Heures en Chantier (PHC) répond aux besoins des personnes particulièrement éloignées du marché du travail, en particulier celles confrontées à des obstacles sociaux complexes tels que la précarité, les problèmes de santé mentale, la dépendance, ou encore l'isolement social. L'objectif du PHC est de proposer un cadre de travail structuré, de bénéficier d'un suivi personnalisé ainsi qu'un soutien social renforcé. Les salariés sont donc accompagnés tout au long de l'insertion, qui se veut progressive.",
      "Les chantiers d'insertion sous le programme PHC permettent aux bénéficiaires de travailler dans divers secteurs d'activité tels que l'entretien d'espaces verts, la viticulture, la construction ou encore la gestion des déchets. Mission principale : reprendre une activité à son rythme et adaptée à ses capacités. Ce dispositif étant flexible, les bénéficiaires peuvent commencer par quelques heures de travail par semaine. Ils sont soutenus dans leurs démarches administratives, de santé et sociales. Ce schéma est l'alternative parfaite pour éviter une pression trop forte, ce qui pourrait entraîner une démotivation ou un échec.",
      "En complément Convergence France a mis en place l'accompagnement renforcé. En effet, le simple placement d'un salarié dans un chantier d'insertion peut s'avérer insuffisant ou inefficace pour ce dernier. Certains ont besoin de soins médicaux ou de soutien psychologique plus poussés.",
      "Il s'agit ici de reconsidérer l'aspect professionnel mais les dimensions sociales, psychologiques et sanitaires du bénéficiaire. En étant pris en charge de cette façon, la personne augmente ses chances de réussite en parcours de réinsertion.",
    ],
  },
  {
    title: "Missions sociales et d'insertion professionnelle",
    description: [
      "Le but de Convergence France est de rétablir une stabilité sociale durable pour les bénéficiaires. En effet, l'accompagnement individualisé a de nombreux objectifs. En participant à un chantier d'insertion, les bénéficiaires développent de nouvelles compétences. Ils sont formés aux gestes professionnels, à la gestion d'équipe, à l'entretien des équipements, et peuvent même recevoir des formations qualifiantes. En mobilisant à nouveau l'intérêt et l'apprentissage, les salariés reprennent confiance et développent ainsi leur estime de soi, ce qui les prépare à leur retour à un emploi stable.",
      "En outre, le suivi social est la pierre angulaire de ce processus. Les obstacles se présentent tout au long du parcours d'insertion. D'où l'intérêt d'un accompagnement pour gérer les démarches administratives, la recherche d'un logement, l'accès aux soins, ou les problèmes liés à des dépendances (alcool, drogues, etc.). Ce suivi assure une réintégration sociale réussie.",
    ],
  },
  {
    title: "Partenariats locaux et territoriaux",
    description: [
      "L'ingrédient du succès de cette recette est le partenariat. Le programme PHC, par exemple, fonctionne en étroite collaboration avec les services sociaux, les agences de l'emploi, les centres de santé et les entreprises locales. Ces collaborations sont indispensables à la réinsertion.",
      "Pour aider chacun à retrouver sa place, Convergence France adapte ses actions aux besoins du terrain. Cette approche de proximité (milieu rural ou zone urbaine sensible) rend l'accompagnement plus pertinent, plus efficace. Les liens tissés avec les collectivités locales permettent de financer les projets et de mieux coordonner les actions. Quand tout le monde avance dans le même sens, les chances de réussite s'en trouvent décuplées.",
    ],
  },
  {
    title: "Impact et bilan de l'action",
    description: [
      "Et ça fonctionne. De nombreuses études ont mis en évidence le rôle que joue l'association dans la réinsertion des personnes éloignées du marché du travail. En effet, beaucoup de participants aux chantiers d'insertion parviennent à retrouver une stabilité (professionnelle et personnelle) grâce à un accompagnement sur mesure et à une approche bienveillante.",
      "Le plus grand changement constaté concerne l'estime de soi des bénéficiaires. Le fait de travailler dans un environnement structuré et de recevoir un salaire régulier leur permet de se reconstruire sur le plan personnel. De plus, Convergence France a constaté une baisse des comportements déviants, tels que l'alcoolisme ou les violences, chez les participants.",
      "Sur le plan professionnel, plusieurs bénéficiaires ont réussi à trouver un emploi stable, soit au sein des structures d'insertion, soit dans des entreprises partenaires. D'autres ont pu entamer une reconversion en suivant des formations dans des secteurs variés. Cette forme de réinsertion permet de sortir la tête de l'eau, de stabiliser sa situation, et de devenir autonome. Cependant, l'accès au logement reste le caillou dans la chaussure pour de nombreux bénéficiaires.",
    ],
  },
  {
    title: "Perspectives",
    description: [
      "L'association Convergence France envisage d'augmenter le nombre de chantiers d'insertion, notamment dans les zones rurales où la précarité est parfois encore plus marquée. Pour ce faire, elle mise sur des projets collaboratifs avec des entreprises locales, des acteurs publics et des structures d'accompagnement.",
      "Un autre objectif pour Convergence France est de renforcer l'accompagnement des bénéficiaires vers l'emploi durable, en mettant en place des formations qualifiantes adaptées aux besoins du marché du travail. La mobilité géographique reste également un sujet important, car de nombreux bénéficiaires ont besoin de se déplacer pour accéder à des opportunités professionnelles, ce qui peut être un souci de taille pour la plupart d'entre eux. L'amélioration des dispositifs de mobilité, en partenariat avec des transports publics ou privés, pourrait dissiper ce blocage.",
    ],
  },
  {
    title: "Conclusion",
    description:
      "Convergence France est un élément incontournable dans le domaine de l'insertion sociale et professionnelle. Grâce à ses programmes comme Convergence ou Premières Heures en Chantier (PHC), l'association a permis à de nombreux bénéficiaires de retrouver un emploi, d'améliorer leur qualité de vie et de se réinsérer durablement dans la société. Cependant, il y a encore du travail, notamment en matière d'accès au logement et de partenariats renforcés. Si l'association parvient à étendre son réseau de partenaires et à consolider ses dispositifs de formation et de mobilité, elle pourra continuer à proposer des solutions pérennes à ceux qui en ont le plus besoin.",
  },
];

export default function SectionFirstHours() {
  // Optimisation avec useMemo pour éviter les re-rendus inutiles
  const renderedItems = useMemo(() => {
    return firstHoursData.map((item, index) => (
      <article key={index} className="firsthours-item">
        <h3 className="firsthours-title">{item.title}</h3>
        <div className="firsthours-content">
          {Array.isArray(item.description) ? (
            item.description.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex} className="convergences-text">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="convergences-text">{item.description}</p>
          )}
        </div>
      </article>
    ));
  }, []);

  return (
    <section
      className="section-firthours"
      role="main"
      aria-label="Premières heures en chantier">
      <Subtitle subtitle="Premières heures" />
      {renderedItems}
    </section>
  );
}
