import Layout from "../../ui/layout/layout";
import SubSubtitle from "../../ui/subSubtitle/subSubtitle";
import Title from "../../ui/title/title";
import "./privacyPolicy.css";

const privacySections = [
  {
    id: "responsable",
    title: "Responsable du traitement",
    content: [
      {
        type: "text",
        text: "Le traitement des données personnelles est assuré par Le chantier d'à Côté.",
      },
    ],
  },
  {
    id: "donnees",
    title: "Données collectées",
    content: [
      {
        type: "text",
        text: "Les données personnelles collectées via le formulaire sont : nom, e-mail, téléphone, message et consentement explicite.",
      },
    ],
  },
  {
    id: "finalite",
    title: "Finalité et base légale",
    content: [
      {
        type: "text",
        text: "Les données sont collectées uniquement pour répondre aux demandes de contact. La base légale est le consentement, donné via la case à cocher obligatoire du formulaire.",
      },
    ],
  },
  {
    id: "destinataires",
    title: "Destinataires des données",
    content: [
      {
        type: "text",
        text: "Les données sont transmises uniquement via EmailJS pour nous être directement envoyées par e-mail. Elles ne sont ni vendues ni partagées.",
      },
    ],
  },
  {
    id: "conservation",
    title: "Durée de conservation",
    content: [
      {
        type: "text",
        text: "Les messages sont conservés au maximum 12 mois, sauf obligation légale contraire.",
      },
    ],
  },
  {
    id: "droits",
    title: "Vos droits",
    content: [
      {
        type: "text",
        text: "Vous disposez des droits d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité. Vous pouvez retirer votre consentement à tout moment.",
      },
      {
        type: "text",
        text: `Pour exercer vos droits, <a href="/contact" class="privacy-link">contactez-nous via le formulaire de contact</a>.`,
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    content: [
      {
        type: "text",
        text: "Ce site ne dépose d'aucun cookie à des fins publicitaires ou statistiques. Aucune donnée de navigation n'est collectée sans votre consentement.",
      },
    ],
  },
  {
    id: "securite",
    title: "Sécurité",
    content: [
      {
        type: "text",
        text: "Les données sont transmises via une connexion HTTPS sécurisée. EmailJS assure également une sécurité conforme aux standards du secteur.",
      },
    ],
  },
  {
    id: "maj",
    title: "Dernière mise à jour",
    content: [
      {
        type: "text",
        text: "Cette politique de confidentialité peut être mise à jour. Nous vous encourageons à la consulter régulièrement.",
      },
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <Layout className="privacy-policy">
      <Title text="Politiques de confidentialité" />

      {privacySections.map((section) => (
        <section
          key={section.id}
          className="privacy-section"
          data-section={section.id}>
          <SubSubtitle subSubtitle={section.title} />
          <div className="privacy-content">
            {section.content.map((paragraph, index) => (
              <p
                key={index}
                className="privacy-text"
                dangerouslySetInnerHTML={{ __html: paragraph.text }}
              />
            ))}
          </div>
        </section>
      ))}
    </Layout>
  );
}
