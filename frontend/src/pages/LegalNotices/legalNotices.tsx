import Layout from "../../ui/layout/layout";
import SubSubtitle from "../../ui/subSubtitle/subSubtitle";
import Title from "../../ui/title/title";
import "./legalNotices.css";

const legalSections = [
  {
    id: "informations",
    title: "Informations légales",
    content: [
      {
        type: "info",
        text: [
          {
            title: "Nom de l'entreprise : ",
            content: "Le Chantier d'à Côté",
          },
          {
            title: "Adresse :",
            content:
              "12 route de l'ancien séminaire, 16370 Val-de-Cognac, France",
          },
          {
            title: "SIRET : ",
            content: "90431817700014",
          },
          {
            title: "Statut juridique :",
            content: "Association loi 1901",
          },
          {
            title: "Directeur de la publication : ",
            content: "Le chantier d'à Côté",
          },
          {
            title: "Hébergeur du site : ",
            content: "Vercel",
          },
          {
            title: "Développement et maintenance : ",
            content:
              '<a href="https://www.pixelia-and-co.fr" target="_blank" rel="noopener noreferrer" class="legal-link">Pixelia&Co</a>',
          },
          {
            title: "Rédaction des contenus : ",
            content:
              '<a href="https://www.instagram.com/motssurmesure/" target="_blank" rel="noopener noreferrer" class="legal-link">Christelle (Mots sur Mesure)</a>',
          },
        ],
      },
    ],
  },
  {
    id: "propriete",
    title: "Propriété intellectuelle",
    content: [
      {
        type: "text",
        text: "L'ensemble des contenus présents sur ce site (textes, images, illustrations, graphismes, documents téléchargeables, etc.) est protégé par le droit d'auteur et la législation en vigueur. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.",
      },
      {
        type: "text",
        text: "Conformément à l'article L122-5 du Code de la propriété intellectuelle, toute utilisation des contenus du site est strictement limitée à un usage privé. Toute utilisation à des fins commerciales ou publicitaires est interdite sans accord préalable. L'utilisateur qui reproduit ou cite un contenu protégé doit obligatoirement en mentionner l'auteur et la source.",
      },
    ],
  },
  {
    id: "liens",
    title: "Liens hypertextes",
    content: [
      {
        type: "text",
        text: "Le site peut contenir des liens vers d'autres sites internet. Le Chantier d'à Côté décline toute responsabilité quant aux contenus ou aux pratiques de ces sites tiers, notamment en ce qui concerne la protection des données personnelles.",
      },
    ],
  },
  {
    id: "conditions",
    title: "Conditions générales d'utilisation",
    content: [
      {
        type: "text",
        text: "L'utilisation de ce site implique l'acceptation pleine et entière des présentes mentions légales et des conditions générales d'utilisation. Celles-ci peuvent être modifiées à tout moment.",
      },
    ],
  },
  {
    id: "responsabilite",
    title: "Responsabilité",
    content: [
      {
        type: "text",
        text: "Le Chantier d'à Côté ne saurait être tenu responsable des dommages directs ou indirects liés à l'utilisation ou à l'impossibilité d'utiliser le site, y compris en cas d'interruption ou d'erreur.",
      },
    ],
  },
  {
    id: "droit",
    title: "Droit applicable et juridiction compétente",
    content: [
      {
        type: "text",
        text: "Le présent site est soumis au droit français. En cas de litige, et après tentative de résolution amiable, les tribunaux français seront seuls compétents.",
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    content: [
      {
        type: "text",
        text: "Ce site n'utilise pas de cookies à des fins publicitaires ou de suivi. Pour en savoir plus, vous pouvez consulter notre politique de confidentialité.",
      },
    ],
  },
  {
    id: "mediation",
    title: "Médiation",
    content: [
      {
        type: "text",
        text: "En cas de litige non résolu à l'amiable, l'Utilisateur peut recourir gratuitement à un médiateur de la consommation compétent, conformément aux articles L.612-1 et suivants du Code de la consommation.",
      },
    ],
  },
];

export default function LegalNotices() {
  return (
    <Layout className="legal-notices">
      <Title text="Mentions légales" />

      {legalSections.map((section) => (
        <section
          key={section.id}
          className="legal-section"
          data-section={section.id}>
          <SubSubtitle subSubtitle={section.title} />
          <div className="legal-content">
            {section.content.map((paragraph, index) => (
              <div key={index}>
                {paragraph.type === "info" && Array.isArray(paragraph.text) ? (
                  <div className="info-list">
                    {paragraph.text.map((item, itemIndex) => (
                      <p key={itemIndex} className="legal-text">
                        <strong>{item.title}</strong>
                        <span
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      </p>
                    ))}
                  </div>
                ) : (
                  <p
                    className="legal-text"
                    dangerouslySetInnerHTML={{ __html: paragraph.text }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </Layout>
  );
}
