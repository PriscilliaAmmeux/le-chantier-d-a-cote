import StoryChantier from "../../ui/storyChantier/storyChantier";
import Team from "../../ui/team/team";
import "./About.css";
import Layout from "../../ui/layout/layout";
import WhyWorkTogether from "../../ui/whyWorkTogether/whyWorkTogether";
import WhoWeAre from "../../ui/whoWeAre/whoWeAre";
import InterventionZones from "../../ui/interventionZones/interventionZones";
import HowFinance from "../../ui/howFinance/howFinance";
import HowToJoin from "../../ui/howToJoin/howToJoin";

export default function About() {
  return (
    <Layout className="about-margin">
      <WhoWeAre />
      <StoryChantier />
      <Team />
      <section className="about-cards-row">
        <div className="about-cards-col-left">
          <WhyWorkTogether />
        </div>
        <div className="about-cards-col-right">
          <InterventionZones />
          <HowFinance />
        </div>
      </section>
      <HowToJoin />
    </Layout>
  );
}
