import { Helmet } from "react-helmet-async";
import PageHeader from "../components/PageHeader";
import StudentSuccess from "../components/StudentSuccess";
import TrustOrganizations from "../components/TrustOrganizations";
import FinalCTA from "../components/FinalCTA";
import { brand } from "../data/site";

export default function SuccessStories() {
  return (
    <>
      <Helmet>
        <title>Student Success Stories | {brand.name}</title>
        <meta name="description" content="Real stories from students who have built HSE careers through our training programs." />
      </Helmet>
      <PageHeader
        eyebrow="SUCCESS STORIES"
        title="Real People. Real Progress. Real Impact."
        description="Verified stories from students — added only once shared with consent."
      />
      <StudentSuccess />
      <TrustOrganizations />
      <FinalCTA />
    </>
  );
}
