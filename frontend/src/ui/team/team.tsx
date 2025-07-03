import TeamSupervisors from "../../components/teamSupervisors/teamSupervisors";
import SubSubtitle from "../subSubtitle/subSubtitle";
import Subtitle from "../subtitle/subtitle";
import teamSupervisors from "../../api/teamSupervisors.json";
import teamASP from "../../api/teamASP.json";
import "./team.css";
import TeamASP from "../../components/teamASP/teamAsp";

export default function Team() {
  return (
    <section className="team">
      <div className="team-inner">
        <div className="text-align-center">
          <Subtitle subtitle="Présentation du personnel" />
        </div>

        <p className="text-align-justify ">
          L’équipe du Chantier d’à côté est composée de 4 encadrants techniques
          en insertion et de 2 accompagnatrices socio-personnelles.
        </p>

        <section className="margin-top">
          <SubSubtitle
            subSubtitle={"Nos Encadrants Techniques en Insertion (ETI)"}
          />
          <p className="text-align-justify">
            Au cœur des activités du Chantier, les encadrants techniques en
            insertion transmettent bien plus que des gestes professionnels. Ils
            forment, soutiennent et motivent les salariés en parcours, en les
            guidant chaque jour sur le terrain.
          </p>
          <p className="text-align-justify">
            Leur engagement concret et bienveillant permet aux bénéficiaires de
            retrouver des repères, des compétences et une place active dans la
            société.
          </p>
          <TeamSupervisors supervisors={teamSupervisors} />
        </section>

        <section>
          <SubSubtitle
            subSubtitle={"Nos Accompagnatrices Socio-Professionnelles (ASP)"}
          />
          <p className="text-align-justify">
            À l’écoute des parcours de vie souvent cabossés, les
            accompagnatrices socio-personnelles tissent un lien essentiel entre
            le travail en Chantier et la reconstruction personnelle.
          </p>
          <p className="text-align-justify">
            Leur rôle : accueillir sans juger, soutenir sans brusquer, orienter
            sans imposer. Elles sont les repères humains d’un accompagnement
            individualisé et bienveillant.
          </p>
          <TeamASP teamASP={teamASP} />
        </section>
      </div>
    </section>
  );
}
