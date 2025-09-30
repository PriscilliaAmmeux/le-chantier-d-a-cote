import ContactLink from "../contactLink/contactLink";
import "./homePresentation.css";

const presentationParagraphs = [
  `Basée à Val de Cognac, notre association accompagne chaque année des
  personnes très éloignées de l’emploi. Ici, pas de jugement, juste de la
  motivation avec un accompagnement humain et sincère, un coup de main
  pour avancer.`,
  `Nous sommes une équipe prête à vous tendre la main pour acquérir des
  compétences et bâtir un avenir professionnel solide. Mais sans votre
  adhésion rien ne sera possible.`,
  `Allant de travaux viticoles, entretien d’espaces verts, rénovation de
  bâtiments à des projets variés… Les activités proposées par Le Chantier
  d’à Côté vous permettent de :`,
];

const presentationList = [
  "Reprendre confiance,",
  "Gagner en expérience et en compétences,",
  "Et surtout, trouver votre place sur le marché du travail.",
];

export default function HomePresentation() {
  return (
    <section className="home-presentation-text">
      {presentationParagraphs.map((text, index) => (
        <p className="text-left-presentation" key={index}>
          {text}
        </p>
      ))}
      <ul>
        {presentationList.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <div className="center-contact-link">
        <ContactLink
          children={"Rejoignez notre programme d’insertion professionnelle"}
        />
      </div>
    </section>
  );
}
