import Subtitle from "../subtitle/subtitle";
import "./storyChantier.css";

export default function StoryChantier() {
  return (
    <section className="story-site">
      <Subtitle subtitle="Histoire du chantier" />
      <div className="story-content">
        <p className="text-left">
          Né d’un regard anthropologique sur les inégalités face à l’emploi,{" "}
          <span className="font-bold">Le Chantier d’à Côté</span> s’est
          construit autour d’une conviction : pour (re)trouver sa place dans la
          société, il faut d’abord être écouté, compris, puis accompagné.
        </p>
        <p className="text-left">
          <span className="font-bold">Le Chantier d’à Côté</span> s’inscrit dans
          l’économie sociale et solidaire en portant un chantier d’insertion, en
          lien avec des réseaux engagés tels que Chantier École, INAE,
          Convergence ou encore le GIE Green, dont nous sommes membres.
        </p>
        <p className="text-left">
          Nous accompagnons socialement et professionnellement des personnes
          très éloignées de l’emploi, en nous appuyant sur des activités
          supports et porteuses de sens :
        </p>
        <ul className="story-list">
          <li>L’entretien des espaces verts et naturels,</li>
          <li>Les travaux viticoles manuels,</li>
          <li>L’entretien en second œuvre des bâtiments.</li>
        </ul>
        <p className="text-left">
          Nous avons constaté que, sur le territoire de Cognac, les personnes
          durablement éloignées de l’emploi font face à des freins souvent
          multiples et entremêlés : santé, logement, mobilité ou encore un
          rapport distendu au travail. Deux années d’accompagnement ne suffisent
          parfois pas à une réinsertion durable.
        </p>
        <p className="text-left">
          C’est pourquoi notre association participe depuis 2021 à
          l’expérimentation Convergence Charente, qui permet :
        </p>
        <ul className="story-list">
          <li>
            Un renforcement de l’accompagnement, avec 2 accompagnatrices
            socioprofessionnelles à temps plein,
          </li>
          <li>
            Un appui partenarial, via une coordinatrice et 3 chargées de mission
            spécialisées dans les problématiques sociales majeures.
          </li>
        </ul>
        <p className="text-left margin-top">
          Notre objectif reste le même depuis la création de notre association :{" "}
          <span className="font-bold">
            favoriser une insertion socio-professionnelle durable
          </span>
          , en adéquation avec les besoins du territoire, afin de réduire le
          taux de chômage et de dynamiser l’économie régionale.
        </p>
      </div>
    </section>
  );
}
