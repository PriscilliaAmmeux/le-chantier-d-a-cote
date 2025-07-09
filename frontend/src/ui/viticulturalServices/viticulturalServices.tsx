import ActivityBlock from "../../components/activityBlock/activityBlock";
import imgViticulture from "../../assets/img6.webp";
import SubSubtitle from "../subSubtitle/subSubtitle";
import MissionsList from "../missionList/missionList";
import "./viticulturalServices.css";

const viticultureList = [
  {
    title: "C’est intuitif.",
    desc: "Les gestes s’assimilent naturellement, même sans expérience préalable, grâce à un encadrement adapté et un apprentissage sur le terrain.",
  },
  {
    title: "C’est encadrant.",
    desc: "Le travail se fait dans un cadre clair, avec des consignes précises, un rythme régulier et des journées bien organisées. Cela aide à (re)trouver des repères professionnels solides.",
  },
  {
    title: "C’est saisonnier.",
    desc: "Une activité qui facilite l’accès à l’emploi agricole, ou à d’autres missions saisonnières, tout au long de l’année.",
  },
  {
    title: "C’est formateur et encourage la prise d’initiative.",
    desc: "Comme pour nos autres activités, cette mission est professionnalisante. Elle permet d’acquérir des compétences essentielles telles que la rigueur, le sens de l’observation et le travail en équipe.",
  },
];

const viticulturalMissions = [
  {
    title: "La taille",
    desc: [
      "Une pratique qui exige une grande rigueur, une précision minutieuse et une bonne compréhension de la plante. Elle se déroule pendant l’hiver, lorsque la vigne est en période de dormance.",
      "Cette étape consiste à supprimer les sarments (branches) inutiles pour favoriser une meilleure orientation de la production à venir.",
      "À travers des gestes techniques et répétitifs, les candidats développent de la concentration, de l'endurance et de l'autonomie.",
    ],
  },
  {
    title: "L’ébourgeonnage, le relevage et le palissage",
    desc: [
      "L’ébourgeonnage, le relevage et le palissage sont des étapes indispensables pour orienter la vigne et optimiser la production.",
      "L’ébourgeonnage consiste à retirer les jeunes pousses inutiles afin de concentrer l’énergie de la plante sur les sarments qui produisent les raisins. Ce geste permet de maîtriser la croissance de la vigne et de garantir une meilleure récolte.",
      "Le relevage consiste à redresser les rameaux pour éviter qu’ils ne traînent au sol. Cela permet à la vigne de mieux capter la lumière, ce qui favorise une croissance saine et limite les risques de maladies.",
    ],
  },
];

const viticulturalSummary = [
  "En résumé, les missions viticoles permettent d’apprendre à manipuler les plantes avec soin, à travailler en extérieur, en autonomie, tout en maintenant une bonne humeur dans des conditions parfois exigeantes.",
  "Ces missions viticoles permettent à chacun de (re) prendre confiance, de développer ces compétences utiles et de s’inscrire dans une dynamique de travail. Au-delà de ça, ces activités favorisent la lutte contre l’exclusion, et facilitent la réinsertion des personnes accompagnées.",
];

const formationBenefits = [
  "Développer leurs compétences",
  "Gagner en reconnaissance, en autonomie et en confiance en soi",
  "Faciliter l’accès à la formation et à l’emploi",
  "Renforcer leur motivation et redonner du sens au travail",
];

const encadrantBenefits = [
  "Monter en compétences",
  "Évoluer dans leur rôle",
  "Initier une nouvelle activité",
  "Créer un pôle de compétences pour faciliter l’intégration des nouveaux arrivants",
  "Valoriser leur savoir-faire et le transmettre, en plus de leurs missions quotidiennes",
];

const viticulturalParagraphs = [
  "De plus, travailler en extérieur et constater l'impact concret de ses efforts contribue à renforcer l’estime et la confiance en soi. Cela augmente les chances des personnes en parcours d’insertion, d’être recrutés dans un emploi durable.",
  <>
    <span className="font-bold">AFEST.</span> Une AFEST (activation formation en
    situation de travail) a été mise en place sur le chantier, dont le but est
    de favoriser la formation des travailleurs non qualifiés et de les aider à
    acquérir des compétences en lien avec les métiers en tension du territoire.
  </>,
  "C’est idéal pour celles et ceux qui veulent se former rapidement et être tout de suite opérationnels. Pour les personnes éloignées de l’emploi, c’est une alternative plus pratique que les formations classiques.",
  "C’est l’opportunité d’accéder à des offres d’emploi sur le territoire, de faire reconnaître les compétences acquises tout au long du parcours, de valoriser leur savoir-faire… et même de renforcer leur estime d’eux-mêmes.",
];

export default function ViticulturalServices() {
  return (
    <section>
      <ActivityBlock
        image={imgViticulture}
        alt="Travaux viticoles"
        imageLeft={true}>
        <SubSubtitle
          subSubtitle="Prestations manuelles viticoles"
          className="sub-subtitle-highlight"
        />
        <p className="text-align-justify line-height">
          Il s’agit des travaux réalisés à la main dans les vignes tout au long
          de l’année, une activité emblématique de notre belle région. En
          participant aux campagnes viticoles, les personnes en insertion
          découvrent un univers à part, exigeant mais accessible, structurant et
          riche d’enseignements. Par ailleurs, nous nous basons sur cette
          activité parce qu’elle offre de nombreux bénéfices pour nos demandeurs
          d’emploi :
        </p>{" "}
        <ul className="line-height ">
          {viticultureList.map((item, idx) => (
            <li className="text-align-justify line-height" key={idx}>
              <span className="font-bold">{item.title}</span> {item.desc}
            </li>
          ))}
        </ul>
      </ActivityBlock>
      {viticulturalParagraphs.map((text, idx) => (
        <p className="text-align-justify line-height" key={idx}>
          {text}
        </p>
      ))}
      <div className="margin-top margin-bottom">
        <p className="text-align-justify line-height">
          Ces formations sont reconnues par les employeurs du territoire, ce qui
          représente un véritable levier pour les salariés. Elles permettent de
          :
        </p>
        <ul className="line-height ">
          {formationBenefits.map((item, idx) => (
            <li className="text-align-justify line-height" key={idx}>
              <span className="font-bold">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="margin-top margin-bottom">
        <p className="text-align-justify line-height">
          La formation a permis aux encadrants techniques de formaliser leur
          travail, ainsi que de :
        </p>
        <ul className="line-height ">
          {encadrantBenefits.map((item, idx) => (
            <li className="text-align-justify line-height" key={idx}>
              <span className="font-bold">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <MissionsList
        missions={viticulturalMissions}
        summary={viticulturalSummary}>
        Nos trois principales missions viticoles sont la taille, tirage,
        égourmandage et le relevage.
      </MissionsList>{" "}
    </section>
  );
}
