import Layout from "../../ui/layout/layout";
import GreenSpace from "../../ui/greenSpace/greenSpace";
import Title from "../../ui/title/title";
import "./activities.css";
import Building from "../../ui/building/building";
import ViticulturalServices from "../../ui/viticulturalServices/viticulturalServices";
import Button from "../../ui/button/button";

export default function Activities() {
  return (
    <Layout>
      <Title text="Activités proposées par Le Chantier d’À Côté" />
      <p className="line-height margin-top">
        Notre association d’insertion sociale et professionnelle propose aux
        bénéficiaires divers ateliers et chantiers pour les former et les
        initier au marché du travail. Parmi nos principales activités pour le
        retour à l’emploi : l’entretien des espaces verts, la rénovation de
        bâtiments et les travaux viticoles.
      </p>
      <section id="green-space" className="activity-section margin-top">
        <GreenSpace />
      </section>

      <section id="building" className="activity-section">
        <Building />
      </section>

      <section id="viticultural" className="activity-section">
        <ViticulturalServices />
      </section>
      <div className="activities-btn-center">
        <Button
          text={"Contactez nous"}
          to={"/contact"}
          ariaLabel="Contactez nous"
        />
      </div>
    </Layout>
  );
}
