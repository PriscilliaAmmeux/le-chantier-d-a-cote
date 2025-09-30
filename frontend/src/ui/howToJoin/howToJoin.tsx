import Subtitle from "../subtitle/subtitle";
import SubSubtitle from "../subSubtitle/subSubtitle";
import "./howToJoin.css";
import ContactLink from "../contactLink/contactLink";

export default function HowToJoin() {
  const profiles = [
    "Hommes et femmes, parents de famille monoparentale",
    "Personnes sans domicile fixe",
    "Personnes en situation de handicap",
    "Jeunes en rupture scolaire ou professionnelle",
    "Anciens détenus",
    "Toute personne en situation de grande précarité",
  ];

  const goals = [
    "Restaurer l’estime de soi et retisser le lien social",
    "Valoriser l’image des participants, grâce à une tenue de travail commune",
    "Réduire les comportements à risque liés à l’isolement ou à l’errance",
  ];

  const whatWeBuild = [
    "Le développement de nouveaux chantiers dans des territoires où l’exclusion est souvent invisible mais bien réelle",
    "Des partenariats avec des entreprises locales, des collectivités et des structures sociales pour créer des ponts durables vers l’emploi",
    "Des parcours renforcés grâce à des formations qualifiantes, concrètes et alignées avec le marché du travail",
    "Des solutions concrètes de mobilité pour lever l’un des freins majeurs à l’insertion",
  ];

  const ourRole = [
    "Intervenir là où d’autres ne vont pas. En zone rurale, au plus près de la grande précarité, dans l’ombre.",
    "Nous assurons un accompagnement digne, respectueux et progressif et participons aux changements de trajectoire de plusieurs vies.",
    "Le Chantier d’à Côté, c’est un projet humain, ancré localement, au service des personnes les plus éloignées de l’emploi.",
  ];

  const integrationSteps = [
    "Ici, on ne demande pas à chacun d’être prêt. On l’aide à le devenir.",
    "Les premiers pas se font doucement : 4 heures par semaine, parfois en binôme, parfois à l’écart du groupe, selon les besoins. On prend le temps.",
    "Il y a ceux qui dorment encore en tente, ceux qui n’ont pas parlé depuis des mois, ceux qui doutent de tout — même de leur droit d’être là.",
    "Chaque parcours est un ajustement permanent entre ce qu’on peut faire aujourd’hui… et ce qu’on fera demain.",
  ];

  return (
    <section className="section-how-to-join">
      <Subtitle subtitle="Comment rejoindre le Chantier d’à Côté ?" />

      <div>
        <SubSubtitle subSubtitle="Pour bénéficier du Parcours d’Insertion" />
        <p>
          Les participants sont embauchés sous Contrat à Durée Déterminée
          d’Insertion (CDDI) et accompagnés, individuellement et collectivement,
          pour franchir tous les obstacles liés à leur insertion. Le recrutement
          est ouvert toute l’année sur la{" "}
          <ContactLink>plateforme de l’inclusion</ContactLink>.
        </p>
      </div>

      <ol className="howtojoin-steps">
        <li>
          <SubSubtitle subSubtitle="Aucun prérequis, aucune sélection" />
          <p>
            Nous accueillons des personnes souvent laissées à l’écart des
            dispositifs traditionnels :
          </p>
          <ul>
            {profiles.map((profile, index) => (
              <li key={index}>{profile}</li>
            ))}
          </ul>
          <p>
            Pour le PHC, l’accès se fait via une prescription de FT, MDS, CCAS,
            acteurs du logement, maraudeurs ou simplement du bouche-à-oreille.
          </p>
        </li>

        <li>
          <SubSubtitle subSubtitle="Une intégration progressive, adaptée à chacun (PHC)" />
          {integrationSteps.map((step, idx) => (
            <p key={idx}>{step}</p>
          ))}
        </li>

        <li>
          <SubSubtitle subSubtitle="Nos promesses et objectifs" />
          <p className="">Notre ambition est de :</p>
          <ul>
            {goals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
          <p className=" margin-top">
            Le Chantier d’à Côté joue pleinement son rôle de tremplin. Mais la
            réussite repose aussi sur la coopération continue avec les
            partenaires sociaux et médico-sociaux.
          </p>
          <p>
            Pour bénéficier de notre accompagnement, contactez-nous au{" "}
            <a href="tel:+33545320609" className="howtojoin-phone-link">
              +33 5 45 32 06 09
            </a>
          </p>
        </li>
      </ol>

      <div>
        <SubSubtitle subSubtitle="Notre rôle" />
        <ul>
          {ourRole.map((role, idx) => (
            <li key={idx}>{role}</li>
          ))}
        </ul>
      </div>

      <SubSubtitle subSubtitle="Ce que nous construisons ensemble" />
      <ul>
        {whatWeBuild.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
