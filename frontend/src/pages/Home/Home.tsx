import DataMonth from "../../components/dataMonth/dataMonth";
import Header from "../../ui/header/header";
import Title from "../../ui/title/title";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <section className="home-header">
        <Header />
      </section>
      <section className="home-data-month">
        <Title text="Le Chantier d'à côté" isHome />
        <DataMonth />
      </section>
    </div>
  );
}
