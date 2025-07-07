import CardSection from "../components/CardSection/cardSection";
import Subtitle from "./subtitle/subtitle";

export default function HowFinance() {
  return (
    <CardSection>
      <Subtitle subtitle={"Comment finançons-nous nos missions ?"} />
      {/* Ajoute ici ton texte explicatif */}
      <p className="text-align-justify">
        Le Chantier d’à Côté finance ses missions grâce à un modèle hybride :
        subventions publiques, partenariats institutionnels, recettes issues des
        activités réalisées pour des collectivités, entreprises ou particuliers.
        Cette diversité de ressources garantit notre indépendance et la
        pérennité de notre action au service de l’insertion.
      </p>
    </CardSection>
  );
}
