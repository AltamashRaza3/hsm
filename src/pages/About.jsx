import { Helmet } from "react-helmet-async";
import PageHeader from "../components/PageHeader";
import AboutBrand from "../components/AboutBrand";
import WhyLearnWithUs from "../components/WhyLearnWithUs";
import JourneyTimeline from "../components/JourneyTimeline";
import FinalCTA from "../components/FinalCTA";
import { brand } from "../data/site";
import FAQSection from "../components/FAQSection";
import DirectorProfile from "../components/DirectorProfile";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | {brand.name}</title>
        <meta name="description" content="Learn about the mission and approach behind our Health, Safety & Environment training brand." />
      </Helmet>
      <PageHeader
        eyebrow="ABOUT"
        title="Knowledge That Creates Safer Workplaces"
        description="A practical approach to HSE education, built on real industry experience rather than theory alone."
      />
      <AboutBrand />
      <JourneyTimeline />
      <DirectorProfile/>
      <WhyLearnWithUs />
      <FinalCTA />
      <FAQSection/>
    </>
  );
}
