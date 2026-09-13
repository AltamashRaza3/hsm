// ---------------------------------------------------------------------------
// IMAGE CONFIGURATION
// Central place to swap every image on the site.
//
// Real images currently available:
// - Hero
// - 8 Course images
//
// All other images remain as placeholders until final images are available.
// ---------------------------------------------------------------------------

import hero from "../assets/images/hero/hero2.png";

//journey-cta
import journeyCta from "../assets/images/hero/hero.png";

// Course images
import confinedSpace from "../assets/images/courses/confined-space.png";
import environmentalManagement from "../assets/images/courses/environmental-management.png";
import fireSafety from "../assets/images/courses/fire-safety.png";
import incidentInvestigation from "../assets/images/courses/incident-investigation.png";
import industrialSafety from "../assets/images/courses/industrial-safety.png";
import managementSystem from "../assets/images/courses/management-system.png";
import riskAssessment from "../assets/images/courses/risk-assessment.png";
import workingAtHeight from "../assets/images/courses/working-at-height.png";

export const siteImages = {
  // -------------------------------------------------------------------------
  // MAIN SITE IMAGES
  // -------------------------------------------------------------------------

  hero,

  // Placeholder — final image can be added later
  director: "/images/director-portrait.jpg",

  // Placeholder — final image can be added later
  directorMessage: "/images/director-message.jpg",

  // Placeholder — final image can be added later
  about: "/images/about-editorial.jpg",

  // Placeholder — final image can be added later
  journeyCta,

  // -------------------------------------------------------------------------
  // COURSE IMAGES
  // -------------------------------------------------------------------------
  // These are the actual images currently available in src/assets/images.

  courses: {
    "course-health-safety": industrialSafety,
    "course-fire-safety": fireSafety,
    "course-risk-assessment": riskAssessment,
    "course-confined-space": confinedSpace,
    "course-work-height": workingAtHeight,
    "course-investigation": incidentInvestigation,
    "course-management-systems": managementSystem,
    "course-environmental": environmentalManagement,
  },

  // -------------------------------------------------------------------------
  // GALLERY
  // -------------------------------------------------------------------------
  // Keep placeholders until actual gallery images are available.

  gallery: [
    {
      src: "/images/gallery-1.jpg",
      category: "Classroom Training",
    },
    {
      src: "/images/gallery-2.jpg",
      category: "Corporate Training",
    },
    {
      src: "/images/gallery-3.jpg",
      category: "Workshops",
    },
    {
      src: "/images/gallery-4.jpg",
      category: "Industrial Visits",
    },
    {
      src: "/images/gallery-5.jpg",
      category: "Student Activities",
    },
    {
      src: "/images/gallery-6.jpg",
      category: "Events",
    },
    {
      src: "/images/gallery-7.jpg",
      category: "Certifications",
    },
    {
      src: "/images/gallery-8.jpg",
      category: "Classroom Training",
    },
  ],

  // -------------------------------------------------------------------------
  // RESOURCES
  // -------------------------------------------------------------------------
  // Keep placeholders until actual resource images are available.

  resources: {
    "resource-officer-role": "/images/resource-officer-role.jpg",
    "resource-career-start": "/images/resource-career-start.jpg",
    "resource-risk-basics": "/images/resource-risk-basics.jpg",
    "resource-ppe": "/images/resource-ppe.jpg",
    "resource-fire-fundamentals": "/images/resource-fire-fundamentals.jpg",
    "resource-iso": "/images/resource-iso.jpg",
    "resource-incident-accident": "/images/resource-incident-accident.jpg",
    "resource-height-safety": "/images/resource-height-safety.jpg",
  },
};