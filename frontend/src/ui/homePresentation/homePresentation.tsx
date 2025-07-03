import ContactLink from "../contactLink/contactLink";
import "./homePresentation.css";

export default function HomePresentation() {
  return (
    <section className="home-presentation-text">
      <p>
        Basée à Val de Cognac, notre association accompagne chaque année des
        personnes très éloignées de l’emploi. Ici, pas de jugement, juste de la
        motivation avec un accompagnement humain et sincère, un coup de main
        pour avancer.
      </p>
      <p>
        Nous sommes une équipe prête à vous tendre la main pour acquérir des
        compétences et bâtir un avenir professionnel solide. Mais sans votre
        adhésion rien ne sera possible.
      </p>
      <p>
        Allant de travaux viticoles, entretien d’espaces verts, rénovation de
        bâtiments à des projets variés… Les activités proposées par Le Chantier
        d’à Côté vous permettent de :
      </p>
      <ul>
        <li>Reprendre confiance, </li>
        <li>Gagner en expérience et en compétences,</li>
        <li>Et surtout, trouver votre place sur le marché du travail.</li>
      </ul>
      <ContactLink />
    </section>
  );
}
