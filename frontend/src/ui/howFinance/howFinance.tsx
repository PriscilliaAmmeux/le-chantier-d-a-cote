import SectionCard from "../../components/sectionCard/sectionCard";
import Subtitle from "../subtitle/subtitle";
import "./howFinance.css";
import logoUE from "/logo-Union-Européenne-cofinancé-par-l-UE.webp";

export default function HowFinance() {
  return (
    <SectionCard>
      <Subtitle subtitle={"Comment finançons-nous nos missions ?"} />
      <p className="how-finance-text ">
        Le Chantier d’à Côté finance ses missions grâce à un modèle hybride :
        subventions publiques, partenariats institutionnels, recettes issues des
        activités réalisées pour des collectivités, entreprises ou particuliers.
        Cette diversité de ressources garantit notre indépendance et la
        pérennité de notre action au service de l’insertion.
      </p>
      <img
        src={logoUE}
        alt="Logo cofinancé par l'Union Européenne"
        aria-label="Logo cofinancé par l'Union Européenne"
        className="how-finance-logo-ue"
      />
    </SectionCard>
  );
}
