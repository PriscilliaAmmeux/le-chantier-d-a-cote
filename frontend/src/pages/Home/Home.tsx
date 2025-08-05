import DataMonth from "../../components/dataMonth/dataMonth";
import TestimonialsCarousel from "../../components/testimonialsCarousel/testimonialsCarousel";
import Button from "../../ui/button/button";
import HomeIntro from "../../ui/homeIntro/homeIntro";
import HomePresentation from "../../ui/homePresentation/homePresentation";
import Layout from "../../ui/layout/layout";
import SectionFinanciers from "../../ui/sectionFinanciers/sectionFinanciers";
import Title from "../../ui/title/title";
import "./Home.css";

export default function Home() {
  return (
    <Layout>
      <section>
        <Title text="Le Chantier d'à côté" isHome />
        <DataMonth />
      </section>
      <HomeIntro />
      <section className="home-presentation">
        <HomePresentation />
        <div className="home-presentation-financiers">
          <SectionFinanciers />
        </div>
      </section>
      <section className="button-center">
        <Button
          text={"En savoir plus"}
          to={"/about"}
          ariaLabel="En savoir plus"
        />
      </section>
      <TestimonialsCarousel />
    </Layout>
  );
}
