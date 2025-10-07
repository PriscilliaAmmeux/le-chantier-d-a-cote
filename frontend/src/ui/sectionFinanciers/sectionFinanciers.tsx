import logoUE from "/UE.webp";
import logoCharente from "/logoCharente.webp";
import logoRepFrance from "/logo-de-la-republique-francaise.webp";
import logoConvergence from "/convergence.webp";
import "./sectionFinanciers.css";
import Subtitle from "../subtitle/subtitle";

const financeurs = [
  {
    src: logoUE,
    alt: "Logo Co-financé par l'Union Européenne",
    aria: "Logo Co-financé par l'Union Européenne",
  },
  {
    src: logoCharente,
    alt: "Logo Charente le département",
    aria: "Logo Charente le département",
  },
  {
    src: logoRepFrance,
    alt: "Logo de la République Française",
    aria: "Logo de la République Française",
  },
  {
    src: logoConvergence,
    alt: "Logo convergence",
    aria: "Logo convergence",
  },
];

export default function SectionFinanciers() {
  return (
    <section className="section-financeurs">
      <Subtitle subtitle="Financeurs" />
      <div className="logos-wrapper">
        {financeurs.map((f, i) => (
          <img
            key={i}
            src={f.src}
            alt={f.alt}
            aria-label={f.aria}
            className="logo-financeurs"
          />
        ))}
      </div>
    </section>
  );
}
