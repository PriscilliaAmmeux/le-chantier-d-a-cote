import DataMonth from "../../components/dataMonth/dataMonth";
import Button from "../../ui/button/button";
import Layout from "../../ui/layout/layout";
import SectionFinanciers from "../../ui/sectionFinanciers/sectionFinanciers";
import Title from "../../ui/title/title";
import "./Home.css";

export default function Home() {
  return (
    <Layout className="home">
      <section className="home-data-month">
        <Title text="Le Chantier d'à côté" isHome />
        <DataMonth />
      </section>
      <section>
        <SectionFinanciers />
      </section>
      <div className="button-center">
        <Button
          text={"En savoir plus"}
          to={"/about"}
          ariaLabel="En savoir plus"
        />
      </div>
    </Layout>
  );
}
