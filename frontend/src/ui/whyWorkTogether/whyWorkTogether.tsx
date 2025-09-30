import CardSection from "../../components/cardSection/cardSection";
import Subtitle from "../subtitle/subtitle";
import "./whyWorkTogether.css";

export default function WhyWorkTogether() {
  return (
    <CardSection>
      <Subtitle subtitle={"Pourquoi travailler ensemble ?"} />
      <p className="">
        Parce que nous ne nous contentons pas d’accompagner — nous comprenons.
        Nous savons que derrière chaque situation, il y a une histoire, des
        freins imbriqués, des parcours cabossés.
      </p>
      <p className=" line-height ">
        <span className="font-bold">Notre force :</span> un accompagnement
        humain, individualisé et ancré dans le réel. Nous avançons avec chaque
        personne, pas à pas, pour lever durablement les obstacles à son
        insertion professionnelle.
      </p>
      <p className=" line-height ">
        Et pour cela, nous nous donnons les moyens concrets d’agir. D’ailleurs,
        nous disposons d’un lieu adapté à l’accueil et au travail de nos équipes
        :
      </p>
      <ul>
        <li className=" line-height ">
          Atelier, vestiaires, bureaux, salle de pause, salle de réunion
          équipée, serre et jardin d’activités.
        </li>
      </ul>
      <p className=" line-height ">Nous avons investi dans :</p>
      <ul>
        <li className=" line-height ">
          5 véhicules pour les déplacements des équipes,
        </li>
        <li className=" line-height ">
          Un 6ème camion mis à disposition par Grand Cognac pour la navette,
        </li>
        <li>
          Un parc de matériel professionnel régulièrement renouvelé grâce à un
          plan d’investissement.
        </li>
      </ul>
      <p className=" line-height ">
        Être bien équipé, c’est garantir des conditions de travail dignes,
        sécurisées et efficaces – pour les encadrants comme pour les personnes
        que nous accompagnons – afin aussi de donner les moyens de
        professionnaliser les équipes.
      </p>
    </CardSection>
  );
}
