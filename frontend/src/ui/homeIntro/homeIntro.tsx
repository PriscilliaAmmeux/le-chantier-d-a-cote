import ContactLink from "../contactLink/contactLink";
import SubSubtitle from "../subSubtitle/subSubtitle";

import "./homeIntro.css";

export default function HomeIntro() {
  return (
    <section className="home-presentation-text-objective text-align-justify">
      <SubSubtitle
        subSubtitle={"Accompagnement – Encadrement – Insertion professionnelle"}
      />
      <SubSubtitle subSubtitle={"Un tremplin vers l’emploi !"} />
      <div>
        <p>
          Vous êtes sans domicile fixe, en situation de handicap, jeune en
          rupture scolaire ou ancien détenu ?
        </p>
        <p>
          Vous vivez une grande précarité et l’emploi vous semble inaccessible ?
        </p>
        <p>
          <span className="font-bold">Le Chantier d’à Côté</span> a été créé
          spécialement pour vous.
        </p>
      </div>
      <ContactLink />
    </section>
  );
}
