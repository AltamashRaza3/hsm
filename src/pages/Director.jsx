import { Helmet } from "react-helmet-async";
import { UserRound } from "lucide-react";
import PageHeader from "../components/PageHeader";
import DirectorProfile from "../components/DirectorProfile";
import DirectorMessage from "../components/DirectorMessage";
import ImagePlaceholder from "../components/ImagePlaceholder";
import FinalCTA from "../components/FinalCTA";
import { director } from "../data/site";
import { brand } from "../data/site";

export default function Director() {
  return (
    <>
      <Helmet>
        <title>Meet the Director | {brand.name}</title>
        <meta name="description" content={`Learn about ${director.name}, ${director.designation}, and the philosophy behind our HSE training.`} />
      </Helmet>
      <PageHeader
        eyebrow="THE DIRECTOR"
        title="A Career Built on Real Sites, Not Just Certificates"
        description="Every course is shaped by industry experience — this is the story behind it."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-10 items-start">
          <ImagePlaceholder icon={UserRound} tone="navy" label="Director in the field" className="aspect-[4/5] rounded-sm" />
          <div>
            <p className="text-xs tracking-wide text-stone-500 mb-2">INDUSTRY EXPOSURE — TO BE CONFIRMED</p>
            <ul className="space-y-2.5 mb-8">
              {director.industries.map((ind) => (
                <li key={ind} className="text-sm text-stone-700 border-b border-stone-100 pb-2.5">{ind}</li>
              ))}
            </ul>
            <p className="text-xs tracking-wide text-stone-500 mb-2">QUALIFICATIONS — TO BE CONFIRMED</p>
            <ul className="flex flex-wrap gap-2">
              {director.qualifications.map((q) => (
                <li key={q} className="text-xs bg-stone-100 text-stone-600 rounded-sm px-3 py-1.5">{q}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <DirectorProfile />
      <DirectorMessage />
      <FinalCTA />
    </>
  );
}
