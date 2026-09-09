import { Helmet } from "react-helmet-async";
import PageHeader from "../components/PageHeader";
import TrainingServices from "../components/TrainingServices";
import CourseCategories from "../components/CourseCategories";
import FinalCTA from "../components/FinalCTA";
import { brand } from "../data/site";

export default function Training() {
  return (
    <>
      <Helmet>
        <title>Training &amp; Corporate Services | {brand.name}</title>
        <meta name="description" content="Corporate safety training and HSE consultancy services for organisations." />
      </Helmet>
      <PageHeader
        eyebrow="TRAINING & SERVICES"
        title="Corporate Training &amp; HSE Consultancy"
        description="On-site training programs and consultancy services for organisations building a stronger safety culture."
      />
      <TrainingServices />
      <CourseCategories />
      <FinalCTA />
    </>
  );
}
