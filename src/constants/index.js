import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import reactportfolio from "../assets/projects/reactportfolio.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate software engineer with a strong problem-solving mindset and a talent for building web applications. With 1 year of hands-on experience, I am eager to learn new technologies and embrace opportunities for growth in my career. My expertise spans front-end technologies like React and Next.js, as well as back-end technologies including Node.js, MySQL, PostgreSQL, and MongoDB. I am committed to continuous improvement—striving to grow both personally and professionally every day. My ultimate goal is to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I'm a dedicated software engineer from Park Hill Staten Island, New York, with a passion for technology that began at a young age. My journey into coding and innovation was sparked when I was just five years old, thanks to the arrival of my family's first Windows XP desktop. This early exposure ignited a lifelong curiosity and love for building and problem-solving through technology. Throughout my journey, I have embraced challenges that have shaped my growth and resilience as a developer. I am skilled in a variety of technologies, including Flask, Django, React, Next.js, Node.js, Express, MySQL, PostgreSQL, and MongoDB. My technical toolkit also includes languages such as JavaScript, Python, and TypeScript. I am always eager to learn, adapt to new environments, and take on new challenges. I am excited about the opportunities that lie ahead and confident in my ability to contribute meaningfully to the tech industry by delivering innovative solutions and exceptional user experiences.`;

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
