import { Helmet } from "react-helmet-async";
import PageHeader from "../components/PageHeader";
import JourneyTimeline from "../components/JourneyTimeline";
import FinalCTA from "../components/FinalCTA";
import { brand } from "../data/site";

export default function Journey() {
  return (
    <>
      <Helmet>
        <title>Our Journey | {brand.name}</title>
        <meta name="description" content="The story and milestones behind our HSE training brand." />
      </Helmet>
      <PageHeader
        eyebrow="OUR JOURNEY"
        title="Building a Safer Tomorrow, One Milestone at a Time"
        description="From a single classroom to a growing HSE training practice."
      />
      <JourneyTimeline />
      <FinalCTA />
    </>
  );
}
