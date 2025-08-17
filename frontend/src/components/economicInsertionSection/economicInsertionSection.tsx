import SubSubtitle from "../../ui/subSubtitle/subSubtitle";
import Subtitle from "../../ui/subtitle/subtitle";
import "./economicInsectionSection.css";

const introduction = [
  "L'Insertion par l'Activité Économique (IAE) est un dispositif qui favorise l'accès à l'emploi des personnes éloignées du marché du travail. En combinant accompagnement social et professionnel avec une activité économique réelle, l'IAE permet à des milliers de personnes de retrouver une dynamique d'emploi et de reprendre confiance en elles.",
  "Dans cet article, nous allons explorer les principes fondamentaux de l'IAE, son fonctionnement, ses impacts et les perspectives pour l'avenir.",
];

const definitionAndObjectives = {
  title: "Définition et objectifs de l'IAE",
  content: [
    "L'Insertion par l'Activité Économique regroupe un ensemble de structures qui ont pour mission de proposer une activité professionnelle, assortie d'un accompagnement renforcé aux publics en difficulté. Ces structures sont reconnues par l'État et bénéficient de financements publics pour mener à bien leur mission.",
    "Les objectifs de l'IAE sont multiples :",
    {
      listItems: [
        "Remettre en emploi des personnes rencontrant des difficultés d'insertion",
        "Favoriser l'acquisition de compétences et de savoir-faire professionnels",
        "Accompagner vers une autonomie socio-professionnelle",
        "Encourager la transition vers des emplois durables",
      ],
    },
    "Les bénéficiaires sont souvent des demandeurs d'emploi de longue durée, des personnes en situation de grande précarité, des jeunes sans qualification ou encore des travailleurs en reconversion après des difficultés personnelles ou professionnelles.",
  ],
};

const structuresIAE = {
  title: "Les structures de l'IAE",
  content: [
    "L'IAE repose sur quatre grands types de structures, qui proposent chacune des parcours adaptés aux besoins des bénéficiaires :",
    {
      listItems: [
        "Les ateliers et chantiers d'insertion (ACI) : On parle ici d'activités économiques encadrées pour acquérir des compétences et bénéficier d'un accompagnement individualisé.",
        "Les entreprises d'insertion (EI) : Elles fonctionnent comme des entreprises classiques mais embauchent en priorité des personnes éloignées de l'emploi.",
        "Les entreprises de travail temporaire d'insertion (ETTI) : Elles facilitent l'accès à des missions d'intérim pour les publics en insertion.",
        "Les associations intermédiaires (AI) : Elles mettent à disposition de courtes missions auprès d'entreprises, de collectivités ou de particuliers, ainsi les salariés en insertion peuvent retrouver un rythme de travail et une expérience professionnelle.",
      ],
    },
  ],
};

const accompagnement = {
  title: "L'accompagnement au cœur du dispositif",
  content: [
    "L'un des piliers de l'IAE est l'accompagnement socio-professionnel. Il ne s'agit pas seulement de proposer un emploi, mais de travailler sur l'ensemble des freins à l'insertion :",
    {
      listItems: [
        "Accès au logement et à la mobilité",
        "Santé et accès aux soins",
        "Compétences et formation",
        "Problèmes administratifs et juridiques",
      ],
    },
    "Les structures d'insertion disposent souvent d'Accompagnants Socio-Professionnels (ASP) ou de Conseillers en Insertion Professionnelle (CIP). Dans d'autres schémas, elles travaillent en partenariat avec des travailleurs sociaux et des organismes de formation pour aider le salarié à construire son projet et faire en sorte que celui-ci soit durable.",
  ],
};

const impact = {
  title: "Un impact mesurable",
  content: [
    "L'IAE est un dispositif qui produit des résultats concrets :",
    {
      listItems: [
        "Un retour progressif à l'emploi : Une part importante des bénéficiaires parvient à intégrer le marché du travail après un parcours en IAE. (45% au 01/01/2024)",
        "Une montée en compétences : Les personnes en insertion développent des savoir-faire techniques et des compétences transversales.",
        "Une amélioration des conditions de vie : En retrouvant une activité et un cadre structurant, les bénéficiaires voient souvent leur situation sociale et financière s'améliorer.",
        "Un impact territorial fort : L'IAE est l'acteur principal dans les territoires, notamment en milieu rural. Elle met l'accent sur l'activité locale et en renforce la cohésion sociale.",
        "Une participation à l'économie du territoire par les salaires versés, directement réinvestis dans la consommation locale",
      ],
    },
  ],
};

const defisEtPerspectives = {
  title: "Les défis et perspectives de l'IAE",
  content: [
    "Malgré ses succès, l'Insertion par l'Activité Économique doit faire face à plusieurs challenges :",
    {
      listItems: [
        "Le financement et la pérennisation des structures",
        "L'adaptation aux nouvelles attentes du marché du travail (compétences numériques, transition écologique, etc.)",
        'Le renforcement des liens avec les entreprises pour favoriser les sorties dites "positives"',
        "L'accès au logement et à la mobilité, qui restent les plus grandes difficultés pour de nombreux bénéficiaires",
        "L'accès à la santé et aux soins (addiction, médecin traitant, dentiste) devient également un enjeu majeur",
      ],
    },
    "L'avenir de l'IAE passe par une meilleure coordination des acteurs, une montée en compétence des salariés et une reconnaissance accrue du rôle que ces structures jouent dans l'inclusion sociale et professionnelle.",
  ],
};

const conclusion = [
  "En combinant activité économique et accompagnement personnalisé, l'IAE offre une chance de reconstruire un parcours professionnel et personnel.",
  "Si l'IAE repose sur des mécanismes éprouvés, elle doit continuer à évoluer pour répondre aux nouveaux enjeux du marché du travail et aux attentes des bénéficiaires. Son développement passe par une implication plus profonde des entreprises, des pouvoirs publics et des acteurs du territoire.",
];

export default function EconomicInsertionSection() {
  return (
    <section className="content-section">
      <div className="missions-subtitle">
        <Subtitle subtitle="Insertion par l'activité économique" />
      </div>
      <div className="video-text-container">
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/O7olB-_1X9w"
            title="Insertion par l'activité économique"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="content-wrapper">
          <SubSubtitle subSubtitle="Accompagnateur SocioProfessionel & Encadrant Technique d'Insertion des métiers spécifiques aux IAE" />
          <div className="text-introduction">
            {introduction.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="additional-content">
        {[
          definitionAndObjectives,
          structuresIAE,
          accompagnement,
          impact,
          defisEtPerspectives,
        ].map((section, index) => (
          <div key={index}>
            <h3>{section.title}</h3>
            {section.content.map((item, cIndex) => (
              <div key={cIndex}>
                {typeof item === "string" ? (
                  <p>{item}</p>
                ) : item.listItems ? (
                  <ul>
                    {item.listItems.map((listItem, lIndex) => (
                      <li key={lIndex}>{listItem}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        ))}

        <div className="conclusion">
          <h3>Conclusion</h3>
          {conclusion.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
