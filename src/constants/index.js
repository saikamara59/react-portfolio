import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import reactportfolio from "../assets/projects/reactportfolio.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = ` I am Software Engineer with hands-on experience in full-stack development using React, Flask, PostgreSQL, Express and MongoDB with a background in logistics and IT analysis.
Passionate about building scalable, user-friendly applications & optimizing performance I am adaptable and thrive in dynamic environments that embrace technological advancement.
Adept at solving complex problems, collaborating in Agile teams, & endlessly learning new technologies to create impactful solutions, I derive satisfaction from problem-solving and refining code.`;

export const ABOUT_TEXT = `I’m a full-stack software developer with a story that’s shaped my passion and perseverance. My journey hasn’t been easy — I’ve overcome significant challenges, including time in juvenile incarceration and surviving being shot. These experiences didn’t define my future; they fueled it.

After graduating from a coding bootcamp, I dove into tech with relentless focus, building projects that combine real-world utility with creativity. From AI-powered blog platforms to tools for e-commerce, law enforcement, and legal industries, I’ve worked with technologies like React, Flask, and PostgreSQL to bring ideas to life.

What sets me apart isn’t just my technical skillset — it’s the grit, adaptability, and purpose I bring to everything I build. I believe in growth, second chances, and using tech to create meaningful impact. I’m always learning, always building, and always looking forward.`;

export const EXPERIENCES = [
  {
    year: "Jun 2024 - Feb 2025",
    role: "Software Engineer Fellow",
    company: "General Assembly",
    description: `Participated in a software engineering program, receiving 420+ hours of professional training and working on a variety of web development projects. Training focused on common best practices in object-oriented programming, RESTful APIs, and MVC frameworks`,
    technologies: ["Javascript", "React.js", "Next.js", "MongoDB", "Python", "TypeScript"],
  },
  {
    year: "2021 - Present",
    role: "Fulfillment Associate",
    company: "Amazon",
    description: `Ensured safe and efficient movement of trucks in and out of the warehouse while adhering to operational protocols. Maintained a secure and organized work environment by communicating and collaborating with the team. Contributed to seamless warehouse operations by adapting to the environment and adherence to safety standards.`,
  },
];

export const PROJECTS = [
  {
    title: "Film Fanatics",
    image: project1,
    description:
      "A full-stack web application where movie enthusiasts can browse movies, read and post reviews, and interact with the community by adding thier favorite movies, edit and delete them how ever they would like.",
    technologies: ["HTML", "Tailwind CSS", "Express", "Node.js", "MongoDB"],
  },
  {
    title: "A New York Thrift Store ",
    image: project2,
    description:
      "A New York Thrift Store is a full stack web e-commerce platform designed to bring the charm of thrift shopping to your fingertips. Whether you're looking for vintage tees, retro jackets, or unique accessories, our store offers a wide range of items to suit every style.",
    technologies: ["React", " Tailwind CSS", "Flask", "PostgreSql"],
  },
  {
    title: "React Portfolio Website",
    image: reactportfolio,
    description:
      "Designed and developed a responsive portfolio website to highlight skills, projects, and experience.",
    technologies: ["Next Js", " Tailwind CSS", "React"],
  },
  {
    title: "Aura Tunes",
    image: project4,
    description:
      "Aura Tunes is a full stack web dynamic, personalized music collection app designed to bring your musical tastes to life. The app allows users to discover new songs and artists, while offering full control to create, update, and manage their music collections.",
    technologies: ["HTML", "Tailwind CSS", "React", "Node Js", "Mongo Db"],
  },
];

export const CONTACT = {
  address: "Staten Island, New York 10304",
  phoneNo: "+1 408-422-5986",
  email: "mhsaidu@gmail.com",
};
