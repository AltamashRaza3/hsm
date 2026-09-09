// ---------------------------------------------------------------------------
// HSE KNOWLEDGE HUB
// Placeholder articles for structural/demo purposes. Replace body content
// with original writing before launch — do not copy third-party text.
// ---------------------------------------------------------------------------

export const resourceCategories = [
  "HSE Articles",
  "Safety Tips",
  "Career Guidance",
  "Study Material",
  "Interview Preparation",
  "Videos",
  "Safety Checklists",
  "FAQs",
];

export const resources = [
  {
    slug: "what-does-an-hse-officer-do",
    title: "What Does an HSE Officer Do?",
    category: "Career Guidance",
    excerpt: "A breakdown of the daily responsibilities and career path of an HSE Officer.",
    readTime: "5 min read",
    image: "resource-officer-role",
    body: [
      "An HSE Officer is the person a site relies on to translate policy into practice — walking the floor, spotting what a checklist alone would miss, and making the call when something needs to stop.",
      "Day to day, the role blends inspection, documentation and communication: conducting site walkthroughs, logging hazards, updating risk assessments, and briefing teams before high-risk work begins.",
      "It also means being the point of contact during incidents — securing the area, gathering facts, and feeding into the investigation without assigning blame prematurely.",
      "Over time, the role grows from enforcing standards to shaping them: contributing to management systems, training new staff and advising leadership on where the next risk is likely to appear.",
    ],
  },
  {
    slug: "how-to-start-a-career-in-hse",
    title: "How to Start a Career in HSE",
    category: "Career Guidance",
    excerpt: "The certifications, experience and mindset needed to enter the HSE profession.",
    readTime: "6 min read",
    image: "resource-career-start",
    body: [
      "Most HSE careers begin with a foundation-level qualification that establishes the vocabulary of the field — hazard, risk, control, compliance — and the legal framework behind it.",
      "Certification opens the door, but site exposure is what makes someone hireable. Shadowing an experienced officer, volunteering for safety committees, or taking entry-level EHS assistant roles all build the practical judgement employers look for.",
      "The mindset matters as much as the paperwork. Good HSE professionals are curious rather than combative — they ask why a shortcut became normal before they write it up.",
      "From there, specialisation follows interest: fire safety, environmental compliance, construction safety or management systems each offer a distinct, senior-level career path.",
    ],
  },
  {
    slug: "workplace-risk-assessment-basics",
    title: "Workplace Risk Assessment Basics",
    category: "HSE Articles",
    excerpt: "The core steps of identifying, evaluating and controlling workplace risk.",
    readTime: "7 min read",
    image: "resource-risk-basics",
    body: [
      "A risk assessment starts with identification: walking the actual workspace and listing what could realistically cause harm, not just what a template anticipates.",
      "Each hazard is then evaluated for likelihood and severity, giving a working priority order rather than treating every risk as equally urgent.",
      "Controls are selected by working down the hierarchy — eliminate first, then substitute, engineer, administrate, and only then rely on personal protective equipment.",
      "The assessment isn't finished once it's written; it needs a review trigger, whether that's a set time interval, a process change, or a near miss that proves the original assumptions wrong.",
    ],
  },
  {
    slug: "importance-of-ppe",
    title: "Importance of PPE",
    category: "Safety Tips",
    excerpt: "Why personal protective equipment is a last line of defence, not a first one.",
    readTime: "4 min read",
    image: "resource-ppe",
    body: [
      "PPE sits at the bottom of the hierarchy of controls for a reason: it protects the individual after every other safeguard has already been applied, not instead of them.",
      "Fit and condition matter as much as presence. A cracked visor or an ill-fitting harness can create a false sense of security that is more dangerous than wearing nothing at all.",
      "Selection should match the specific hazard — general-purpose gloves are not a substitute for chemical-rated ones, and a dust mask is not a respirator.",
      "Treat PPE as the visible layer of a much larger safety system, and train people to notice when it's the only layer left standing.",
    ],
  },
  {
    slug: "fire-safety-fundamentals",
    title: "Fire Safety Fundamentals",
    category: "HSE Articles",
    excerpt: "Understanding the fire triangle, prevention measures and evacuation planning.",
    readTime: "6 min read",
    image: "resource-fire-fundamentals",
    body: [
      "Fire needs three things at once — heat, fuel and oxygen — and prevention is really the discipline of keeping those three apart in every part of a workplace.",
      "Good housekeeping does more preventive work than most people assume: clear storage areas, maintained electrical systems and controlled ignition sources remove the fuel and heat sides of the triangle before detection is ever needed.",
      "Detection and suppression systems buy time, not certainty — they only work if they're inspected on schedule and if people know how to respond when they trigger.",
      "An evacuation plan is only as good as its last drill. Routes, assembly points and headcount procedures should be rehearsed, not just posted on a wall.",
    ],
  },
  {
    slug: "what-is-iso-45001",
    title: "What is ISO 45001?",
    category: "Study Material",
    excerpt: "An introduction to the international standard for occupational health and safety.",
    readTime: "5 min read",
    image: "resource-iso",
    body: [
      "ISO 45001 is the international standard for occupational health and safety management systems — a framework for how an organisation identifies risk, sets objectives and continually improves.",
      "Unlike a static checklist, it's built on a plan-do-check-act cycle, meaning the system is expected to evolve as the organisation and its risks change.",
      "Leadership involvement is a core requirement, not a formality — the standard expects safety accountability to sit with management, not be delegated entirely to a safety department.",
      "For organisations, certification signals a structured commitment to worker safety; for professionals, understanding the standard is increasingly a baseline expectation in HSE management roles.",
    ],
  },
  {
    slug: "incident-vs-accident",
    title: "Incident vs Accident",
    category: "HSE Articles",
    excerpt: "Why the distinction matters for reporting, investigation and prevention.",
    readTime: "4 min read",
    image: "resource-incident-accident",
    body: [
      "An accident is an unplanned event that results in injury, illness or damage. An incident is the broader category — any unplanned event, whether or not harm actually occurred.",
      "That distinction matters because a near-miss incident carries the same lesson as an accident, just without the cost. Treating both as equally reportable is how organisations catch problems before someone gets hurt.",
      "Investigation quality shouldn't depend on outcome severity — a thorough root-cause review of a near miss can prevent the accident that would otherwise have followed it.",
      "Building a culture where incidents are reported without blame is what makes this distinction useful in practice, not just in definition.",
    ],
  },
  {
    slug: "working-at-height-safety",
    title: "Working at Height Safety",
    category: "Safety Checklists",
    excerpt: "A practical checklist for planning and executing work-at-height tasks safely.",
    readTime: "5 min read",
    image: "resource-height-safety",
    body: [
      "Before any work at height begins, confirm whether it can be avoided entirely — the safest work at height is often the work redesigned to happen at ground level instead.",
      "Where it can't be avoided, inspect access equipment before every use: ladders, scaffolding and harnesses degrade in ways that aren't always visible at a glance.",
      "Fall protection should be planned as a system — anchor point, connector and body harness working together — not assembled from whatever is available on site that day.",
      "Finally, have a rescue plan in place before work starts. A fall arrest system that stops a fall is only half the solution if there's no plan to safely recover the worker afterward.",
    ],
  },
];

export const getResourceBySlug = (slug) => resources.find((r) => r.slug === slug);
