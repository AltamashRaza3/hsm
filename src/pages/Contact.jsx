import { Helmet } from "react-helmet-async";
import PageHeader from "../components/PageHeader";
import ContactSection from "../components/ContactSection";
import { brand } from "../data/site";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | {brand.name}</title>
        <meta name="description" content="Get in touch to enquire about courses, corporate training or HSE consultancy." />
      </Helmet>
      <PageHeader
        eyebrow="CONTACT"
        title="Let's Talk"
        description="Reach out about a course, a corporate training need, or a general enquiry."
      />
      <ContactSection standalone />
    </>
  );
}
