import SubSubtitle from "../subSubtitle/subSubtitle";
import Subtitle from "../subtitle/subtitle";
import teamSupervisors from "../../api/teamSupervisors.json";
import teamASP from "../../api/teamASP.json";
import "./team.css";
import TeamList from "../../components/teamList/teamList";

export default function Team() {
  return (
    <section className="team">
      <div className="team-inner">
        <Subtitle subtitle="Présentation du personnel" />
        <p className=" ">
          L’équipe du Chantier d’à côté est composée de 4 encadrants techniques
          en insertion et de 2 accompagnatrices socio-personnelles.
        </p>

        <section>
          <SubSubtitle
            subSubtitle={"Nos Encadrants Techniques en Insertion (ETI)"}
          />
          <p>
            Au cœur des activités du Chantier, les encadrants techniques en
            insertion transmettent bien plus que des gestes professionnels. Ils
            forment, soutiennent et motivent les salariés en parcours, en les
            guidant chaque jour sur le terrain.
          </p>
          <p>
            Leur engagement concret et bienveillant permet aux bénéficiaires de
            retrouver des repères, des compétences et une place active dans la
            société.
          </p>
          <TeamList members={teamSupervisors} />
        </section>

        <section className="asp-section">
          <SubSubtitle subSubtitle="Nos Accompagnatrices Socio-Professionnelles (ASP)" />
          <p>
            À l’écoute des parcours de vie souvent cabossés, les
            accompagnatrices socio-personnelles tissent un lien essentiel entre
            le travail en Chantier et la reconstruction personnelle.
          </p>
          <p>
            Leur rôle : accueillir sans juger, soutenir sans brusquer, orienter
            sans imposer. Elles sont les repères humains d’un accompagnement
            individualisé et bienveillant.
          </p>
          <div className="asp-card">
            <div className="asp-card-header">
              <h3>{teamASP[0].title}</h3>
              <p className="asp-subtitle">{teamASP[0].subtitle}</p>
              <p className="asp-credo">{teamASP[0].credo}</p>
            </div>
            <div className="asp-photos">
              <div className="asp-photo-card asp-photo-card-left">
                <img
                  src={teamASP[0].imgNatacha}
                  alt="Natacha"
                  className="asp-photo"
                />
                <span className="asp-name">Natacha</span>
              </div>
              <div className="asp-photo-card asp-photo-card-right">
                <img
                  src={teamASP[0].imgGwenaelle}
                  alt="Gwenaelle"
                  className="asp-photo"
                />
                <span className="asp-name">Gwenaelle</span>
              </div>
            </div>
            <blockquote className="asp-vision">{teamASP[0].vision}</blockquote>
          </div>
        </section>
      </div>
    </section>
  );
}
