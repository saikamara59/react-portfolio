import { routeMetadata } from "./routeMetadata";

export const panelOrder = Object.freeze([
  "about",
  "projects",
  "experience",
  "skills",
  "resume",
  "contact",
]);

const panels = [
  {
    slug: "about",
    label: "About",
    objectName: "About Poster",
    route: "/about",
  },
  {
    slug: "projects",
    label: "Projects",
    objectName: "Project Map",
    route: "/projects",
  },
  {
    slug: "experience",
    label: "Experience",
    objectName: "Career Logbook",
    route: "/experience",
  },
  {
    slug: "skills",
    label: "Skills",
    objectName: "Builder's Workbench",
    route: "/skills",
  },
  {
    slug: "resume",
    label: "Resume",
    objectName: "Crew Dossier",
    route: "/resume",
  },
  {
    slug: "contact",
    label: "Contact",
    objectName: "Transponder Snail",
    route: "/contact",
  },
];

const projects = [
  {
    slug: "healthflow",
    title: "HealthFlow",
    route: "/projects/healthflow",
    image: "/media/projects/healthflow-overview.jpg",
    imageAlt: "HealthFlow broker workspace overview",
    problem:
      "Health-insurance brokers lose time comparing Medicare plans, checking networks, and drafting claims appeals across disconnected tools.",
    ownership:
      "Designed and built the product and its auditable AI-agent package end to end.",
    solution:
      "Combined a React brokerage workspace with Python APIs, public CMS, FDA, and NPPES data, PHI redaction, feedback learning, and forensic audit logs.",
    evidence: [
      "628 automated tests documented in the resume",
      "Real public health-data integrations",
      "Human-review and redaction boundaries for regulated workflows",
    ],
    technologies: [
      "React",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Pydantic AI",
      "Logfire",
    ],
    links: [
      { label: "Live product", href: "https://healthflow.work/" },
      {
        label: "GitHub",
        href: "https://github.com/saikamara59/health-insurance-agent",
      },
    ],
  },
  {
    slug: "overturn",
    title: "Overturn",
    route: "/projects/overturn",
    image: "/media/projects/overturn-worklist.png",
    imageAlt: "Overturn deadline-prioritized denial worklist",
    problem:
      "Raw payer denial exports do not give operators a safe, deadline-prioritized path to grounded appeal work.",
    ownership:
      "Architected the shared agent package and built the multi-tenant CLI and web workflow.",
    solution:
      "Transforms payer denials into a human-approved appeal worklist grounded in CARC, RARC, and CMS sources with crash-safe Postgres processing and tenant isolation.",
    evidence: [
      "230 tests documented in the resume",
      "Hard tenant isolation and encrypted tenant keys",
      "Crash-safe batches that avoid repeated API spend",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Claude API",
    ],
    links: [
      { label: "Live demo", href: "https://overturn.up.railway.app/" },
      { label: "GitHub", href: "https://github.com/saikamara59/overturn" },
    ],
  },
  {
    slug: "debugflow",
    title: "DebugFlow",
    route: "/projects/debugflow",
    image: "/media/projects/debugflow-cli.webp",
    imageAlt: "DebugFlow explaining a Python error in a real terminal session",
    problem:
      "Junior Python developers often receive generic error advice that ignores the codebase producing the failure.",
    ownership:
      "Designed and built the CLI-first debugging workflow and its project-aware retrieval system.",
    solution:
      "Reads the local project context, retrieves relevant sources, and explains the error and repair path instead of returning a copy-paste answer.",
    evidence: [
      "Project-aware local-code analysis",
      "Multiple retrieval sources",
      "CLI-first workflow with optional web surface",
    ],
    technologies: ["Python", "FastAPI", "Claude API", "GitHub"],
    links: [
      { label: "GitHub", href: "https://github.com/saikamara59/debugflow" },
    ],
  },
];

export const portfolioRecord = Object.freeze({
  profile: {
    name: "Saidu Kamara",
    identity:
      "AI software engineer who ships reliable products end to end—from agent systems and APIs to data pipelines and polished front-end experiences.",
    greeting:
      "Welcome aboard. I'm Saidu—an AI software engineer who ships reliable products end to end. Explore the Tavern, or use Quick View.",
    portrait: "/media/about/saidu-original.jpg",
    location: "New York City",
  },
  about:
    "I build reliable AI-powered products across the full stack, from agent behavior and API boundaries to data pipelines and polished interfaces. My work is grounded in clear contracts, observable systems, and human review where automation carries real consequences. I enjoy moving between architecture and implementation, especially when a difficult system needs both technical depth and practical product judgment. The pirate-adventure Tavern reflects the way I approach engineering: stay curious, assemble the right tools, learn from every voyage, and keep shipping toward the next meaningful problem.",
  panels,
  projects,
  experiences: [
    {
      organization: "Melting",
      role: "Software Engineer",
      dates: "January 2026 – Present",
      primary: true,
      evidence: [
        "Built full-stack automation spanning frontend workflows, backend APIs, and real-time data aggregation.",
        "Scaled scraping and ingestion coverage to 16 external job platforms.",
        "Implemented AI-assisted engineering workflows that reduced debugging and iteration cycles.",
      ],
    },
    {
      organization: "General Assembly",
      role: "Software Engineering Fellow",
      dates: "June 2024 – February 2025",
      primary: true,
      evidence: [
        "Completed 420+ hours of professional software-engineering training.",
        "Built and deployed four full-stack applications with React, Node.js, Express, and PostgreSQL.",
        "Worked in Agile sprints with authentication, REST APIs, responsive UI, and relational data models.",
      ],
    },
    {
      organization: "Catholic Charities, Richmond County",
      role: "Direct Support Professional — Day Habilitation",
      dates: "August 2025 – Present",
      primary: false,
      evidence: [
        "Executes daily operational protocols in a sensitive care environment.",
        "Maintains safety compliance and documents critical incidents for state reporting.",
      ],
    },
  ],
  capabilityGroups: [
    {
      name: "AI and agent systems",
      skills: [
        "Pydantic",
        "Pydantic AI",
        "Logfire",
        "Pydantic Graph — working knowledge",
        "Claude API",
        "Agent reliability",
      ],
    },
    {
      name: "Backend and APIs",
      skills: [
        "Python",
        "FastAPI",
        "Flask",
        "Node.js",
        "Express",
        "REST APIs",
        "Authentication",
      ],
    },
    {
      name: "Frontend experiences",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
    },
    {
      name: "Data and infrastructure",
      skills: [
        "PostgreSQL",
        "Redis",
        "MongoDB",
        "Docker",
        "Kubernetes",
        "RabbitMQ",
      ],
    },
    {
      name: "Automation and delivery",
      skills: [
        "CI/CD",
        "GitHub Actions",
        "Bash",
        "Web scraping",
        "Agile delivery",
      ],
    },
  ],
  credentials: [
    "Anthropic Academy — Building with the Claude API (2026)",
    "Harvard Business School — AI for Leaders (2025)",
  ],
  resume: {
    href: "/SaiduKamara_Resume_Full_Stack_Engineer.pdf",
    filename: "SaiduKamara_Resume_Full_Stack_Engineer.pdf",
  },
  contact: {
    email: "saikamara646@gmail.com",
    linkedin: "https://www.linkedin.com/in/saidukamara1/",
    github: "https://github.com/saikamara59",
    location: "New York City",
  },
  routeMetadata,
});

export function getPanelBySlug(slug) {
  return portfolioRecord.panels.find((panel) => panel.slug === slug) ?? null;
}

export function getProjectBySlug(slug) {
  return portfolioRecord.projects.find((project) => project.slug === slug) ?? null;
}

export function assertPortfolioRecord(record) {
  const panelSlugs = record.panels.map((panel) => panel.slug);
  const projectSlugs = record.projects.map((project) => project.slug);
  const routes = [
    ...record.panels.map((panel) => panel.route),
    ...record.projects.map((project) => project.route),
  ];

  if (new Set(panelSlugs).size !== panelSlugs.length) {
    throw new Error("Duplicate panel slug");
  }
  if (new Set(projectSlugs).size !== projectSlugs.length) {
    throw new Error("Duplicate project slug");
  }
  if (new Set(routes).size !== routes.length) {
    throw new Error("Duplicate portfolio route");
  }
  if (record.panels.some((panel) => !panel.objectName)) {
    throw new Error("Missing Tavern Object name");
  }

  return true;
}
