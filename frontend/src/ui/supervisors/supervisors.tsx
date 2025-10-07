import SectionBlock from "../../components/sectionBlock/sectionBlock";
import { useEffect, useState } from "react";
import "./supervisors.css";

function useIsMobile(breakpoint = 700) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
}

export default function Supervisors() {
  const isMobile = useIsMobile();

  return (
    <section className="encadrement-section">
      {/* Encadrement */}
      <SectionBlock
        index={0}
        title="Encadrement"
        paragraphs={[
          "Nous attachons une grande importance à l'encadrement technique. C'est un peu le socle du parcours d'insertion, puisque ça joue un rôle clé dans la réinsertion durable des personnes éloignées de l'emploi, notamment les :",
        ]}
        list={[
          "Bénéficiaires du RSA ou d'autres minima sociaux, sans emploi stable depuis longtemps.",
          "Jeunes sans qualification, déscolarisés ou sans expérience professionnelle.",
          "Demandeurs d'emploi de longue durée, inscrits à Pôle emploi depuis plus d'un an.",
          "Personnes en situation de handicap, confrontées à des obstacles d'accès à l'emploi.",
          "Parents isolés, avec peu de solutions de garde ou une faible mobilité.",
          "Anciens détenus, en parcours de réinsertion.",
          "Personnes sans domicile fixe ou en logement précaire.",
          "Travailleurs immigrés ou réfugiés, ayant des difficultés de langue ou de reconnaissance des diplômes.",
          "Personnes ayant connu des addictions ou des troubles de santé, en cours de stabilisation.",
        ]}
        listClass="beneficiaires-list"
        imgSrc="/encadrement.webp"
        imgAlt="Illustration encadrement"
      />
      {/* Objectif de l'encadrement */}
      <SectionBlock
        index={isMobile ? 0 : 1}
        title="Objectif de l'encadrement"
        paragraphs={[
          "Encadrer sur le terrain, c'est, d'un côté, rendre possible l'accès ou le retour à l'emploi aux personnes en réinsertion professionnelle. Et, d'un autre côté, bien sûr faciliter le parcours d'insertion aux personnes éloignées de l'emploi listées ci-dessus.",
          "Concrètement, il s'agit de donner un cadre de travail rassurant et formateur. Cela consiste à :",
        ]}
        list={[
          "Superviser les activités professionnelles des personnes en insertion,",
          "Leur transmettre des compétences concrètes au quotidien.",
        ]}
        listClass="objectifs-list"
        extraParagraphs={[
          "C'est pourquoi, nos encadrants enseignent des savoir-faire professionnels en situation réelle de travail à travers des ateliers et chantiers d'insertion (ACI), comme l'entretien des espaces verts, la rénovation de bâtiments ou les travaux viticoles.",
          "Notre association propose ces trois activités économiques, car elles permettent aux sans emploi de développer non seulement une expérience professionnelle, mais aussi un savoir-être valorisé par France Travail et autres entreprises d'insertion.",
        ]}
        imgSrc="/objectif.webp"
        imgAlt="Objectif de l'encadrement"
      />

      {/* Type de contrat */}
      <SectionBlock
        index={0}
        title="Type de contrat"
        paragraphs={[
          "Nous offrons un contrat à durée déterminée d'insertion (CDDI) aux personnes accueillies. C'est un contrat de travail agréé par la législation IAE (Insertion par l'Activité Économique).",
          "Ça permet aux personnes très éloignées de l'emploi de reprendre une activité professionnelle, tout en bénéficiant d'un poste de travail encadré et un accès à des formations qualifiantes.",
          "De fait, Le Chantier d'à Côté devient -momentanément- un employeur et promet un encadrement humain, rigoureux et bienveillant, pour favoriser l'insertion de chacun. Car, en gros, le rôle de l'encadrant c'est de former, redonner goût au travail et (re)créer de la motivation.",
        ]}
        imgSrc="/contrat.webp"
        imgAlt="Type de contrat"
      />

      {/* Accompagnement */}
      <SectionBlock
        index={isMobile ? 0 : 1}
        title="Accompagnement"
        paragraphs={[
          "Nous connaissons les difficultés des premières fois : trouver sa place dans une équipe déjà soudée, affronter les premières erreurs, dépasser le syndrome de l'imposteur, ou encore trouver un équilibre entre travail et vie personnelle.",
          "C'est pour cette raison que nous vous mettons en relation avec un accompagnateur en insertion professionnelle. Celui-ci va, en quelque sorte, vous guider pas à pas dans la construction de votre projet professionnel et tout au long de votre parcours d'insertion.",
          "Par ailleurs, et en fonction du poste convoité, le ou les accompagnateurs ont pour mission d' :",
        ]}
        list={[
          "Aider à l'élaboration des projets professionnels des bénéficiaires,",
          "Assurer le suivi individuel, social et professionnel des salariés en insertion,",
          "Concevoir et/ou utiliser des outils pédagogiques adaptés,",
          "Animer des ateliers ou des actions collectives,",
          "Mettre en place des parcours d'insertion cohérents et progressifs.",
        ]}
        listClass="missions-list"
        imgSrc="/list.webp"
        imgAlt="Accompagnement"
      />

      {/* Lien entre encadrement technique et accompagnement */}
      <SectionBlock
        index={0}
        title={
          "Le lien entre encadrement technique et accompagnement socio-professionnel"
        }
        paragraphs={[
          "L'encadrement et l'accompagnement : deux volets qui vont de pair et qui se complètent pour assurer votre insertion professionnelle.",
          "Sur le terrain, l'encadrant technique assure une mise en situation de travail concrète. Il transmet des savoir-faire, instaure un rythme, pose un cadre. Il favorise l'apprentissage d'un métier, mais aussi du savoir-être : ponctualité, respect des consignes, autonomie.",
          "En parallèle, l'accompagnateur ou l'accompagnatrice socio-professionnel(le) travaille sur les freins périphériques : logement, santé, mobilité, confiance en soi. Il/elle construit, avec le salarié en insertion, un véritable projet professionnel, réaliste et durable.",
          "Grâce à ces deux piliers, on agit sur l'ensemble des difficultés rencontrées. En adaptant les étapes du parcours d'insertion, en coordonnant les démarches d'insertion, en identifiant les besoins en formations qualifiantes, et bien sûr en mobilisant les bons dispositifs (Pôle emploi, Mission locale, structures d'insertion partenaires…).",
          "Grâce à cette approche globale, entre technique et social, chaque salarié en insertion bénéficie d'un accompagnement individualisé, cohérent et humain.",
        ]}
        imgSrc="/lien.webp"
        imgAlt="Lien entre encadrement technique et accompagnement socio-professionnel"
      />
    </section>
  );
}
