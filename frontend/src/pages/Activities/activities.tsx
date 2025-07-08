import Layout from "../../ui/layout/layout";
import SubSubtitle from "../../ui/subSubtitle/subSubtitle";
import Title from "../../ui/title/title";
import imgEspacesVerts from "../../assets/img4.webp";
import "./activities.css";
import ActivityBlock from "../../components/activityBlock/activityBlock";
import GreenSpacesMissionsList from "../../ui/greenSpaceMissionList/greenSpaceMissionList";

const greenSpacesBenefits = [
  {
    title: "C’est accessible à tous.",
    desc: "Pas besoin d’expérience ou de qualification préalable, ce qui convient aux personnes très éloignées de l’emploi.",
  },
  {
    title: "C’est formateur.",
    desc: "On y apprend des gestes techniques simples mais rigoureux, le respect de consignes, le travail en équipe, la ponctualité.",
  },
  {
    title: "C’est valorisant.",
    desc: "On voit le résultat du travail rapidement, ce qui (re)donne confiance en soi.",
  },
  {
    title: "C’est en lien avec le territoire.",
    desc: "Ces missions répondent à un vrai besoin local, en lien avec les collectivités et/ou les structures publiques.",
  },
  {
    title: "C’est évolutif.",
    desc: "Les tâches peuvent être adaptées selon le niveau et l’autonomie des personnes en difficulté.",
  },
];

export default function Activities() {
  return (
    <Layout>
      <Title text="Activités proposées par Le Chantier d’À Côté" />
      <p className="text-align-justify line-height margin-top">
        Notre association d’insertion sociale et professionnelle propose aux
        bénéficiaires divers ateliers et chantiers pour les former et les
        initier au marché du travail. Parmi nos principales activités pour le
        retour à l’emploi : l’entretien des espaces verts, la rénovation de
        bâtiments et les travaux viticoles.
      </p>

      <ActivityBlock
        image={imgEspacesVerts}
        alt="Entretien des espaces verts"
        imageLeft>
        <SubSubtitle subSubtitle="Entretien des espaces verts et des espaces naturels" />
        <p className="text-align-justify line-height">
          On a choisi cette activité économique pour les nombreux avantages qui
          en découlent, à savoir :
        </p>
        <ul className="line-height ">
          {greenSpacesBenefits.map((item, idx) => (
            <li className="text-align-justify line-height" key={idx}>
              <span className="font-bold">{item.title}</span> {item.desc}
            </li>
          ))}
        </ul>
      </ActivityBlock>
      <GreenSpacesMissionsList />
    </Layout>
  );
}
