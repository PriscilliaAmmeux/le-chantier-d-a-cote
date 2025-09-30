import Title from "../title/title";
import "./whoWeAre.css";

export default function WhoWeAre() {
  return (
    <section>
      <div className="margin-title">
        <Title text="Qui sommes-nous ?" />
      </div>
      <p className="about-presentation">
        Le Chantier d’à Côté est une structure de l'Économie Sociale et
        Solidaire (ESS). Basée depuis sa création en 2021 à Val de Cognac
        (16370), elle est présidée par Francis Bouchereau et gérée par Karynne
        Aubert, directrice du chantier. Le chantier dépend du dispositif de
        l’insertion par l’activité économique.
      </p>
    </section>
  );
}
