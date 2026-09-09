import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Training from "./pages/Training";
import Director from "./pages/Director";
import Journey from "./pages/Journey";
import Gallery from "./pages/Gallery";
import SuccessStories from "./pages/SuccessStories";
import Resources from "./pages/Resources";
import ResourceDetail from "./pages/ResourceDetail";
import Quiz from "./pages/Quiz";
import CertificateVerificationPage from "./pages/CertificateVerificationPage";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import { PrivacyPolicy, Terms } from "./pages/Legal";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/training" element={<Training />} />
          <Route path="/director" element={<Director />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<ResourceDetail />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/certificate-verification" element={<CertificateVerificationPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
