import ContactLink from "../../ui/contactLink/contactLink";
import Subtitle from "../../ui/subtitle/subtitle";
import Supervisors from "../../ui/supervisors/supervisors";
import GoogleReview from "../googleReview/googleReview";
import VideoSection from "../videoSection/videoSection";
import "./socioprofessionalSection.css";

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
      <GoogleReview
        rating={5}
        text="Très bons encadrants merci. Travail très diversifié, travail bien fait. Merci pour tous ceux qui travaillent en cet endroit."
        author="Annie Piaugeard"
        date="Il y a un an"
      />
      <Supervisors />
      <GoogleReview
        rating={5}
        text="Très bon travail, rapide et propre. Très satisfaite 😊"
        author="Carine Partaud"
        date="Il y a 2 ans"
      />
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
