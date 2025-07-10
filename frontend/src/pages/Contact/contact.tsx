import Form from "../../components/form/form";
import Adress from "../../ui/adress/adress";
import Layout from "../../ui/layout/layout";
import Map from "../../ui/map/map";
import Title from "../../ui/title/title";
import "./contact.css";

export default function Contact() {
  return (
    <Layout>
      <Title text="Contact" />
      <section className="contact-flex">
        <Map />
        <Adress />
      </section>
      <section className="background-green">
        <Form />
      </section>
    </Layout>
  );
}
