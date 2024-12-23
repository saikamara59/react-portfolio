import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate software engineer with a strong problem-solving mindset and a talent for building web applications. With 1 year of hands-on experience, I am eager to learn new technologies and embrace opportunities for growth in my career.
My expertise spans front-end technologies like React and Next.js, as well as back-end technologies including Node.js, MySQL, PostgreSQL, and MongoDB. I am committed to continuous improvement—striving to grow both personally and professionally every day. My ultimate goal is to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I'm a dedicated software engineer from Park Hill Staten Island, New York, with a passion for technology that began at a young age. My journey into coding and innovation was sparked when I was just five years old, thanks to the arrival of my family's first Windows XP desktop. This early exposure ignited a lifelong curiosity and love for building and problem-solving through technology. Throughout my journey, I have embraced challenges that have shaped my growth and resilience as a developer. I am skilled in a variety of technologies, including React, Next.js, Node.js, Express, MySQL, PostgreSQL, and MongoDB. My technical toolkit also includes languages such as JavaScript, Python, and TypeScript. I am always eager to learn, adapt to new environments, and take on new challenges. I am excited about the opportunities that lie ahead and confident in my ability to contribute meaningfully to the tech industry by delivering innovative solutions and exceptional user experiences.`;

export const EXPERIENCES = [
  {
    year: "Jun 2024 - Feb 2025",
    role: "Software Engineer Fellow",
    company: "Genral Assembly.",
    description: `Participated in a software engineering program, receiving 420+ hours of professional training and working on a variety of web development projects. Training focused on common best practices in object-oriented programming, RESTful APIs, and MVC frameworks`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB","Python","TypeScript"],
  },
  {
    year: "2021 -Present",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  
];

export const PROJECTS = [
  {
    title: "Film Fanatics",
    image: project1,
    description:
      "a full-stack web application where movie enthusiasts can browse movies, read and post reviews, and interact with the community by adding thier favorite movies, edit and delete them how ever they would like.",
    technologies: ["HTML", "Tailwind CSS", "Express", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", " Tailwind CSS", "React"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Staten Island, New York 10304",
  phoneNo: "+408-422-5986",
  email: "mhsaidu@gmail.com",
};
