import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import debugflow from "../assets/projects/debugflow.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = ` Software Engineer — Full-stack engineer obsessed with building AI systems that work at scale. I've shipped self-correcting agent architectures at Melting, designed multi-platform data aggregators, and published CLI tools with 7+ retrieval sources (DebugFlow on PyPI). Comfortable across the full stack: frontend (React), backend (FastAPI/Flask), databases (PostgreSQL), and LLM tooling (Claude API, multi-model integration).
Currently: exploring agent reliability, automation infrastructure, AI-first products `

export const ABOUT_TEXT = `I'm a software engineer focused on building AI infrastructure that works at scale. I shipped self-correcting agent systems at Melting, published DebugFlow on PyPI, and I'm drawn to problems that require both technical depth and creative problem-solving.
I believe the best engineers are those who've learned to push through complexity — whether that's building distributed systems, debugging production code, or shipping in constrained environments. I'm always learning, always building, always looking forward.`;

export const EXPERIENCES = [
  {
    year: "Jun 2024 - Feb 2025",
    role: "Software Engineer Fellow",
    company: "General Assembly",
    description: `Participated in a software engineering program, receiving 420+ hours of professional training and working on a variety of web development projects. Training focused on common best practices in object-oriented programming, RESTful APIs, and MVC frameworks`,
    technologies: ["Javascript", "React.js", "Next.js", "MongoDB", "Python", "TypeScript"],
  },
  {
    year: "2026 - Present",
    role: "AI Software Engineer",
    company: "Melting",
    description: `Replaced manual investment research with a Playwright-powered LinkedIn signal scraper that extracts real-time funding relationships between companies – cutting analyst time to zero for that workflow. Scaled job data coverage from 0 to 16 platforms by engineering a multi-source aggregator that handles anti-bot detection, varied DOM structures, and normalization into a unified pipeline – now the core data layer of the product. Eliminated a recurring class of AI code errors by designing a self-correcting agent system using Claude’s skill architecture – a feedback loop that learns from mistakes and rewrites generation behavior, reducing debugging cycles across the platform.`,
  },
];

export const PROJECTS = [
  {
    title: "HealthFlow",
    image: project1,
    description:
      "An AI-powered health insurance brokerage platform designed and built by Saidu Kamara to solve a real industry problem: health insurance is confusing, comparisons are manual, and brokers waste hours on paperwork that should be automated HealthFlow gives insurance brokers a single platform to manage client portfolios, compare Medicare Advantage plans side-by-side, estimate annual costs, verify provider networks against real NPPES data, translate dense policy documents into plain English, and auto-generate claims appeal letters — all backed by AI that learns from broker feedback to get smarter over time.",
    technologies: ["React", "Tailwind CSS", "Flask", "FastAPI", "ClaudeAPI", "PostgreSQL", "Docker", "Redis"],
    github:"https://github.com/saikamara59/health-insurance-agent",
  },
  {
    title: "A New York Thrift Store ",
    image: project2,
    description:
      "A New York Thrift Store is a full stack web e-commerce platform designed to bring the charm of thrift shopping to your fingertips. Whether you're looking for vintage tees, retro jackets, or unique accessories, our store offers a wide range of items to suit every style.",
    technologies: ["React", " Tailwind CSS", "Flask", "PostgreSql"],
    github:"https://github.com/saikamara59/thrift-store-react",
  },
  {
    title: "DebugFlow",
    image: debugflow,
    description:
      "DebugFlow is a CLI built for junior developers who get stuck on cryptic Python errors and want to actually understand what went wrong — not just copy-paste a fix from Stack Overflow. Instead of generic answers, DebugFlow reads your codebase, finds the relevant files, and explains the problem in context.",
    technologies: ["Python", "FastAPI", "ClaudeAPI", "Github"],
    github:"https://github.com/saikamara59/debugflow",
  },
  {
    title: "Order Processing System",
    image: project4,
    description:
      "a simple microservices-based order processing system using Node.js, Express Includes Swagger API docs and Docker Compose for easy setup.",
    technologies: ["Python", "Swagger API", "Flask", "PostgreSQL"],
    github:"https://github.com/saikamara59/order-processing-system",
  },
];

export const CONTACT = {
  address: "Staten Island, New York 10304",
  phoneNo: "+1 646-508-8547",
  email: "saikamara646@gmail.com",
};
