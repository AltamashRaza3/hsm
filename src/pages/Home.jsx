import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import CredentialsStrip from "../components/CredentialsStrip";
import AboutBrand from "../components/AboutBrand";
import PopularCourses from "../components/PopularCourses";
import CourseCategories from "../components/CourseCategories";
import JourneyCTA from "../components/JourneyCTA";
import DirectorMessage from "../components/DirectorMessage";
import WhyLearnWithUs from "../components/WhyLearnWithUs";
import TrainingServices from "../components/TrainingServices";
import StudentSuccess from "../components/StudentSuccess";
import TrustOrganizations from "../components/TrustOrganizations";
import GalleryPreview from "../components/GalleryPreview";
import ResourcesPreview from "../components/ResourcesPreview";
import SafetyQuizSection from "../components/SafetyQuizSection";
import CertificateVerification from "../components/CertificateVerification";
import FinalCTA from "../components/FinalCTA";
import { brand } from "../data/site";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          {brand.name} | HSE Training, Corporate Safety & Consultancy
        </title>

        <meta
          name="description"
          content="Professional Health, Safety & Environment training, corporate safety programs and HSE consultancy led by an experienced trainer focused on practical, career-focused education."
        />

        <meta
          name="keywords"
          content="HSE training, health safety environment, safety training India, HSE courses, safety consultancy, occupational safety, industrial safety training"
        />

        <meta name="robots" content="index, follow" />
      </Helmet>

      <Hero />
      <CredentialsStrip />
      <AboutBrand />
      <PopularCourses />
      <CourseCategories />
      <JourneyCTA />
      <DirectorMessage />
      <WhyLearnWithUs />
      <TrainingServices />
      <StudentSuccess />
      <TrustOrganizations />
      <GalleryPreview />
      <ResourcesPreview />
      <CertificateVerification />
      <SafetyQuizSection />
      <FinalCTA />
    </>
  );
}
