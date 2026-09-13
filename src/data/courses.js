// ---------------------------------------------------------------------------
// COURSE CATALOGUE
// Every course below is a placeholder built from common HSE industry
// categories for structural/demo purposes only. Confirm actual course names,
// content, duration, eligibility and outcomes with the client before launch.
// ---------------------------------------------------------------------------

export const courseCategories = [
  { slug: "professional-qualifications", name: "Professional Qualifications" },
  { slug: "safety-management", name: "Safety Management" },
  { slug: "fire-industrial-safety", name: "Fire & Industrial Safety" },
  { slug: "specialist-safety-training", name: "Specialist Safety Training" },
  { slug: "corporate-training", name: "Corporate Training" },
  { slug: "consultancy", name: "Consultancy" },
];

export const courses = [
  {
    slug: "health-and-safety-foundation",
    title: "Health & Safety Foundation",
    category: "professional-qualifications",
    description:
      "A foundation-level course covering core workplace health and safety principles, hazard identification and legal duties.",
    duration: "[XX weeks — TBC]",
    mode: ["Online", "Classroom"],
    level: "Foundation",
    eligibility: "[Open to all — TBC]",
    modules: [
      "Introduction to workplace safety",
      "Hazard identification and control",
      "Legal framework overview",
      "Incident reporting basics",
    ],
    outcomes: [
      "Understand core H&S responsibilities",
      "Identify common workplace hazards",
      "Apply basic risk control measures",
    ],
    image: "course-health-safety",
    featured: true,
  },
  {
    slug: "fire-and-industrial-safety",
    title: "Fire & Industrial Safety",
    category: "fire-industrial-safety",
    description:
      "Covers fire prevention, detection systems, emergency response planning and industrial fire risk management.",
    duration: "[XX weeks — TBC]",
    mode: ["Classroom"],
    level: "Intermediate",
    eligibility: "[TBC]",
    modules: ["Fire science fundamentals", "Detection & suppression systems", "Emergency evacuation planning"],
    outcomes: ["Assess fire risk in industrial settings", "Plan emergency response procedures"],
    image: "course-fire-safety",
    featured: true,
  },
  {
    slug: "risk-assessment-practitioner",
    title: "Risk Assessment Practitioner",
    category: "safety-management",
    description:
      "Practical methods for identifying, evaluating and controlling workplace risk across industrial environments.",
    duration: "[XX weeks — TBC]",
    mode: ["Online", "Classroom"],
    level: "Intermediate",
    eligibility: "[TBC]",
    modules: ["Risk assessment methodologies", "Control hierarchy", "Documentation & review"],
    outcomes: ["Conduct structured risk assessments", "Build control measure hierarchies"],
    image: "course-risk-assessment",
    featured: true,
  },
  {
    slug: "confined-space-safety",
    title: "Confined Space Safety",
    category: "specialist-safety-training",
    description:
      "Entry procedures, atmospheric testing, rescue planning and permit systems for confined space work.",
    duration: "[X days — TBC]",
    mode: ["Classroom"],
    level: "Specialist",
    eligibility: "[TBC]",
    modules: ["Confined space hazards", "Atmospheric monitoring", "Permit-to-work systems", "Rescue planning"],
    outcomes: ["Safely plan confined space entry", "Apply atmospheric testing protocols"],
    image: "course-confined-space",
    featured: true,
  },
  {
    slug: "work-at-height",
    title: "Work at Height",
    category: "specialist-safety-training",
    description:
      "Fall protection systems, scaffold safety awareness and equipment inspection for work-at-height activities.",
    duration: "[X days — TBC]",
    mode: ["Classroom"],
    level: "Specialist",
    eligibility: "[TBC]",
    modules: ["Fall protection systems", "Equipment inspection", "Rescue procedures"],
    outcomes: ["Select appropriate fall protection", "Inspect height-safety equipment"],
    image: "course-work-height",
    featured: false,
  },
  {
    slug: "accident-incident-investigation",
    title: "Accident & Incident Investigation",
    category: "safety-management",
    description:
      "Root-cause analysis techniques and structured investigation methods for workplace incidents.",
    duration: "[XX weeks — TBC]",
    mode: ["Online", "Classroom"],
    level: "Intermediate",
    eligibility: "[TBC]",
    modules: ["Investigation methodology", "Root-cause analysis", "Corrective action planning"],
    outcomes: ["Lead structured incident investigations", "Identify systemic root causes"],
    image: "course-investigation",
    featured: true,
  },
  {
    slug: "hse-management-systems",
    title: "HSE Management Systems",
    category: "professional-qualifications",
    description:
      "Designing and implementing HSE management frameworks aligned to recognised international standards.",
    duration: "[XX weeks — TBC]",
    mode: ["Classroom"],
    level: "Advanced",
    eligibility: "[TBC]",
    modules: ["Management system design", "Standard alignment (ISO 45001)", "Audit & review cycles"],
    outcomes: ["Design an HSE management framework", "Prepare for management system audits"],
    image: "course-management-systems",
    featured: true,
  },
  {
    slug: "environmental-management",
    title: "Environmental Management",
    category: "professional-qualifications",
    description:
      "Environmental impact assessment, waste management and compliance for industrial operations.",
    duration: "[XX weeks — TBC]",
    mode: ["Online"],
    level: "Intermediate",
    eligibility: "[TBC]",
    modules: ["Environmental impact assessment", "Waste & emissions management", "Regulatory compliance"],
    outcomes: ["Assess environmental impact of operations", "Support compliance reporting"],
    image: "course-environmental",
    featured: false,
  },
];

export const getCourseBySlug = (slug) => courses.find((c) => c.slug === slug);
export const getFeaturedCourses = () => courses.filter((c) => c.featured);
export const getCoursesByCategory = (category) =>
  courses.filter((c) => c.category === category);
