import ContactLink from "../../ui/contactLink/contactLink";
import Subtitle from "../../ui/subtitle/subtitle";
import Supervisors from "../../ui/supervisors/supervisors";
import GoogleReview from "../googleReview/googleReview";
import VideoSection from "../videoSection/videoSection";
import "./socioprofessionalSection.css";
import testimonials from "../../api/testimonials.json";

const videosData = [
  {
    id: "Cw6kfgFLe68",
    title: "Mon chantier d'insertion par le travail",
    subtitle: "Mon chantier d'insertion par le travail",
  },
  {
    id: "nQC-W7h7eyg",
    title: "Présentation de l'Atelier Chantier d'Insertion",
    subtitle: "Présentation de l'Atelier Chantier d'Insertion (ACI)",
  },
];

export default function SocioprofessionalSection() {
  const testimonial1 = testimonials.find((t) => t.id === 1);
  const testimonial2 = testimonials.find((t) => t.id === 2);
  return (
    <section>
      <div className="missions-subtitle">
        <Subtitle subtitle="Encadrement et Accompagnement Socioprofessionnel" />
      </div>
      <VideoSection videos={videosData} />
      <p className="missions-text">
        Pour une raison ou une autre, vous n’avez plus accès au marché du
        travail classique ? Le Chantier d’à Côté vous encadre et vous accompagne
        depuis le premier jour jusqu’à votre insertion réelle, en s’appuyant sur
        deux leviers essentiels : l’encadrement technique sur le terrain et
        l’accompagnement socio-professionnel.
      </p>
      {testimonial1 && (
        <GoogleReview
          rating={testimonial1.rating as 1 | 2 | 3 | 4 | 5}
          text={testimonial1.text}
          author={testimonial1.author}
          date={testimonial1.date}
        />
      )}
      <Supervisors />
      {testimonial2 && (
        <GoogleReview
          rating={testimonial2.rating as 1 | 2 | 3 | 4 | 5}
          text={testimonial2.text}
          author={testimonial2.author}
          date={testimonial2.date}
        />
      )}
      <p className="missions-text">
        Avec Le Chantier d’à Côté, chaque pas compte, chaque progrès est
        valorisé. Nous croyons en une insertion durable, humaine et adaptée à
        chacun. Grâce à un accompagnement individualisé et un encadrement
        technique bienveillant, nous construisons ensemble des parcours concrets
        vers l’emploi.
      </p>
      <p className="missions-text">
        Vous êtes sans emploi, bénéficiaire du RSA, ou vous rencontrez des
        difficultés d’insertion ? Votre parcours commence ici.
      </p>

      <div className="center-contact-link">
        <ContactLink
          children={"Rejoignez notre programme d’insertion professionnelle"}
        />
      </div>
    </section>
  );
}
