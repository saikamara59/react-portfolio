const siteName = "Saidu Kamara — AI Software Engineer";
const identity =
  "AI software engineer who ships reliable products end to end—from agent systems and APIs to data pipelines and polished front-end experiences.";

export const routeMetadata = Object.freeze({
  "/": { title: siteName, description: identity },
  "/about": {
    title: `About | ${siteName}`,
    description:
      "How Saidu approaches reliable AI systems and end-to-end product engineering.",
  },
  "/projects": {
    title: `Projects | ${siteName}`,
    description:
      "HealthFlow, Overturn, and DebugFlow—three evidence-first engineering case studies.",
  },
  "/projects/healthflow": {
    title: `HealthFlow | ${siteName}`,
    description:
      "An AI health-insurance brokerage platform with regulated-data safeguards and auditable agent workflows.",
  },
  "/projects/overturn": {
    title: `Overturn | ${siteName}`,
    description:
      "A multi-tenant denial-management platform for deadline-prioritized, human-approved claims appeals.",
  },
  "/projects/debugflow": {
    title: `DebugFlow | ${siteName}`,
    description:
      "A project-aware Python debugging CLI that explains errors in codebase context.",
  },
  "/experience": {
    title: `Experience | ${siteName}`,
    description:
      "Evidence-first engineering experience at Melting and General Assembly, plus additional professional experience.",
  },
  "/skills": {
    title: `Skills | ${siteName}`,
    description:
      "AI systems, APIs, frontend experiences, data infrastructure, and delivery automation.",
  },
  "/resume": {
    title: `Resume | ${siteName}`,
    description:
      "View or download Saidu Kamara's full-stack software engineering resume.",
  },
  "/contact": {
    title: `Contact | ${siteName}`,
    description: "Reach Saidu through email, LinkedIn, or GitHub.",
  },
});
