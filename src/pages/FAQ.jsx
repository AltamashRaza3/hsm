import { Helmet } from "react-helmet-async";
import PageHeader from "../components/PageHeader";
import FAQSection from "../components/FAQSection";
import { brand } from "../data/site";

export default function FAQ() {
  return (
    <>
      <Helmet>
        <title>FAQ | {brand.name}</title>
        <meta name="description" content="Answers to common questions about our HSE courses, formats and enquiries." />
      </Helmet>
      <PageHeader eyebrow="FAQ" title="Frequently Asked Questions" />
      <FAQSection standalone />
    </>
  );
}
