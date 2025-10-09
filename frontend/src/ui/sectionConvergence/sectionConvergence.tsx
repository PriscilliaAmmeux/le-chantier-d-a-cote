import Subtitle from "../subtitle/subtitle";
import "./sectionConvergence.css";
import logoConvergence from "/convergence.webp";

export default function SectionConvergence() {
  return (
    <section className="margin-top-subtitle">
      <div className="convergence-header">
        <div className="convergence-header-text">
          <Subtitle subtitle="L'association Convergence France" />
          <p className="convergence-text">
            <a
              href="https://convergence-france.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="convergence-link">
              Convergence France
            </a>{" "}
            est une association nationale dédiée à l’insertion sociale et
            professionnelle des personnes les plus éloignées de l’emploi. Depuis
            sa création, l’association a mis en place des dispositifs novateurs,
            dont les{" "}
            <span className="font-bold color-brown">
              Premières Heures en Chantier (PHC)
            </span>
            , afin de soutenir les individus dans leur parcours de réinsertion.
            L’objectif principal de{" "}
            <span className="font-bold color-brown">Convergence France</span>{" "}
            est de briser le cycle de l’exclusion en proposant aux personnes en
            grande précarité, des opportunités de réintégration progressive dans
            le monde du travail, et en garantissant un accompagnement
            personnalisé ainsi qu’un soutien renforcé.
          </p>
        </div>
        <img
          src={logoConvergence}
          alt="Logo Convergence France"
          aria-label="Logo Convergence France"
          className="missions-logo-ue"
        />
      </div>

      <div className="convergence-item">
        <h3 className="convergence-subtitle">
          Contexte et origines de Convergence France
        </h3>
        <div className="convergence-content">
          <p className="convergence-text">
            A l’origine de Convergence France, il y a tout le panel des
            personnes en difficulté, premières victimes de l’exclusion sociale
            et professionnelle. L’association se distingue par son approche
            solidaire, tournée vers les publics vulnérables et vers l’autonomie.
            L’accent est mis principalement sur les individus souvent laissés
            pour compte par les dispositifs traditionnels d’insertion. Personnes
            sans domicile fixe, personnes en situation de handicap, jeunes
            décrocheurs scolaires, et anciens détenus font partie des publics en
            difficulté.
          </p>
          <p className="convergence-text">
            Les missions de{" "}
            <span className="font-bold color-brown">Convergence France</span> se
            déploient à travers un réseau de structures partenaires à l’échelle
            nationale. En effet, les projets naissent grâce à un partenariat
            fort avec des acteurs locaux, des collectivités publiques, et des
            entreprises privées. Grâce à ces partenariats, l’accompagnement peut
            s’adapter à chaque bénéficiaire et rend les dispositifs plus
            efficaces.
          </p>
        </div>
      </div>
    </section>
  );
}
