// TODO: Replace with actual project content and images

export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  imageAlt: string;
  imageSrc?: string;
  overview: {
    role: string;
    timeline: string;
    team?: string;
    tools: string[];
  };
  content: {
    heading: string;
    body: string;
  }[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "sign-now",
    title: "Sign Now",
    description:
      "Real-time audio-to-ASL translation for healthcare settings. Two access modes, HIPAA-grade privacy, culturally authentic design. Top 5 overall · 1st Place Healthcare Track.",
    tags: ["UX Research", "Accessibility", "Healthcare", "Mobile Design", "Award-Winning"],
    imageAlt: "Sign Now — real-time ASL translation app interface",
    imageSrc: "/images/sign-now/cover.jpg",
    overview: {
      role: "Lead UX Designer",
      timeline: "Fall 2025 · 6 Weeks",
      team: "Solo Designer",
      tools: ["Figma", "Protopie", "User Interviews", "WCAG Audits"],
    },
    content: [
      {
        heading: "Overview",
        body: "Real-time audio-to-ASL translation system for healthcare and public settings. Features two distinct access modes — in-app and Apple Dynamic Island — with culturally authentic signing and HIPAA-grade privacy.",
      },
    ],
  },
  {
    slug: "accessibility-translation-platform",
    title: "Accessibility Translation Platform",
    description:
      "Designing inclusive experiences that work across languages and abilities. Research-driven UX for a platform that makes content accessible to everyone.",
    tags: ["UX Research", "Accessibility", "i18n"],
    imageAlt: "Accessibility Translation Platform interface preview",
    overview: {
      role: "Lead Product Designer",
      timeline: "2023 – Present",
      team: "Cross-functional (Eng, Research, i18n)",
      tools: ["Figma", "Miro", "User Interviews", "WCAG Audits"],
    },
    content: [
      {
        heading: "The challenge",
        body: "Organizations needed a single platform to manage accessible, translatable content at scale—without sacrificing quality or compliance. We set out to design a solution that put both accessibility and localization at the center of the workflow.",
      },
      {
        heading: "Research & discovery",
        body: "We ran discovery interviews with content editors, localization managers, and accessibility specialists. Key insights: automated checks alone weren’t enough; designers and writers needed clear guidance and inline feedback. We also validated that RTL and longer text (e.g. German) had to be considered from the start, not as an afterthought.",
      },
      {
        heading: "Design approach",
        body: "We designed a unified workspace with inline accessibility and translation status, reusable components that support RTL and dynamic text length, and clear documentation for designers and writers. All patterns were tested with screen readers and with real translated content.",
      },
      {
        heading: "Outcomes",
        body: "The platform reduced time-to-publish for accessible, localized content and improved consistency across markets. We continue to iterate based on usage and new WCAG guidance.",
      },
    ],
  },
  {
    slug: "multilingual-design-system",
    title: "Multilingual Design System",
    description:
      "A scalable design system built for global products. Components, patterns, and documentation that support localization and accessibility from the start.",
    tags: ["Product Design", "Design Systems"],
    imageAlt: "Multilingual Design System components and documentation",
    overview: {
      role: "Product Designer",
      timeline: "2022 – 2023",
      tools: ["Figma", "Storybook", "HTML/CSS", "React"],
    },
    content: [
      {
        heading: "Context",
        body: "Our product was expanding into new languages and regions. We needed a design system that could scale visually and technically—with built-in support for RTL, long labels, and accessible components.",
      },
      {
        heading: "What we built",
        body: "We created a component library with clear guidelines for truncation, expansion, and RTL layout. Each component was documented with accessibility notes (keyboard, screen reader, contrast) and localization examples. We partnered with engineering to ensure the same patterns existed in code.",
      },
      {
        heading: "Impact",
        body: "Teams could ship new markets faster with consistent, accessible UI. Design and engineering alignment improved, and we saw fewer accessibility bugs in production.",
      },
    ],
  },
  {
    slug: "third-project-tbd",
    title: "Third Project (TBD)",
    description:
      "Placeholder for an additional case study. This could cover UX research, accessibility audits, or another product design initiative.",
    tags: ["UX Research", "Accessibility"],
    imageAlt: "Placeholder for third case study",
    overview: {
      role: "Product Designer",
      timeline: "TBD",
      tools: ["Figma", "User Research"],
    },
    content: [
      {
        heading: "Coming soon",
        body: "Case study content will be added here. Focus will remain on accessibility, translation, or design systems.",
      },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((p) => p.slug === slug);
}

export function getCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((p) => p.slug);
}
