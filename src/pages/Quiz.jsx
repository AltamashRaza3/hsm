import { Helmet } from "react-helmet-async";
import PageHeader from "../components/PageHeader";
import SafetyQuizWidget from "../components/SafetyQuizWidget";
import { brand } from "../data/site";

export default function Quiz() {
  return (
    <>
      <Helmet>
        <title>Safety Quiz | {brand.name}</title>
        <meta name="description" content="Test your workplace safety knowledge with a short interactive quiz." />
      </Helmet>
      <PageHeader
        eyebrow="SAFETY QUIZ"
        title="Test Your Safety Knowledge"
        description="Five quick questions covering the fundamentals of workplace HSE."
      />
      <section className="bg-stone-50 py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 sm:px-8">
          <SafetyQuizWidget />
        </div>
      </section>
    </>
  );
}
