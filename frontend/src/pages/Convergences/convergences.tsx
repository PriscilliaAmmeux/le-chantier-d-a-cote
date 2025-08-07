import Layout from "../../ui/layout/layout";
import Subtitle from "../../ui/subtitle/subtitle";
import Title from "../../ui/title/title";
import "./convergences.css";

export default function Convergences() {
  return (
    <Layout className="convergences">
      <Title text="Convergences" />

      <section className="margin-top-subtitle">
        <Subtitle subtitle="L'association Convergences France" />{" "}
      </section>

      <p className="convergences-text">
        Attente texte : Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Alias placeat, officiis hic aperiam sed amet impedit, sapiente,
        natus iste illo nobis laborum possimus eaque quae. Ullam enim eum alias
        obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Alias placeat, officiis hic aperiam sed amet impedit, sapiente, natus
        iste illo nobis laborum possimus eaque quae. Ullam enim eum alias
        obcaecati.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Alias placeat, officiis hic aperiam sed amet impedit, sapiente, natus
        iste illo nobis laborum possimus eaque quae. Ullam enim eum alias
        obcaecati.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Alias placeat, officiis hic aperiam sed amet impedit, sapiente, natus
        iste illo nobis laborum possimus eaque quae. Ullam enim eum alias
        obcaecati.
      </p>

      <section className="data-month-section">
        <p>Attente chiffre</p>
      </section>

      <section className="section-firthours">
        <Subtitle subtitle="Premières heures" />
        <p className="convergences-text">
          Attente texte : Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Alias placeat, officiis hic aperiam sed amet impedit, sapiente,
          natus iste illo nobis laborum possimus eaque quae. Ullam enim eum
          alias obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Alias placeat, officiis hic aperiam sed amet impedit, sapiente,
          natus iste illo nobis laborum possimus eaque quae. Ullam enim eum
          alias obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Alias placeat, officiis hic aperiam sed amet impedit, sapiente,
          natus iste illo nobis laborum possimus eaque quae. Ullam enim eum
          alias obcaecati.
        </p>
      </section>

      <section></section>
    </Layout>
  );
}
