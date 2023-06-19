import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  Mineplex,
  jobit,
  tripguide,
  threejs,
  university,
  townhall,
  sourceCode,
  artwork,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Content writer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "Customer Service Intern",
    company_name: "City Town Hall",
    icon: townhall,
    iconBg: "#E6DEDD",
    date: "March 2023 - April 2023",
    points: [
      "Assisted customers with their inquiries and resolved issues in a timely manner.",
      "Provided exceptional customer service, ensuring customer satisfaction.",
      "Handled customer complaints and worked towards finding appropriate solutions.",
      "Maintained accurate records of customer interactions and transactions.",
    ],
  },
  {
    title: "Tutor",
    company_name: "University Tutoring",
    icon: university,
    iconBg: "#E6DEDD",
    date: "December 2021 - July 2022",
    points: [
      "Provided academic support to university students in various subjects.",
      "Developed customized lesson plans to meet individual learning needs.",
      "Assisted students in understanding complex concepts and improving their academic performance.",
      "Monitored and tracked students' progress, providing feedback and guidance.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "RandomTech",
    icon: sourceCode,
    iconBg: "#E6DEDD",
    date: "July 2022 - January 2023",
    points: [
      "Assisted in developing and maintaining web applications using frontend technologies.",
      "Collaborated with a team of developers to implement new features and improve existing functionality.",
      "Ensured the user interface design was visually appealing and responsive.",
      "Participated in code reviews and provided feedback for code quality improvement.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Yahya's excellent front-end web development skills bring our website to life. A true professional!",
    name: "Fiona Conley",
    designation: "Marketing Manager",
    company: "Pinnacle Web Solutions",
    image: "https://randomuser.me/api/portraits/women/51.jpg",
  },
  {
    testimonial:
      "Yahya is really good at writing content and it made a big difference in how our brand communicates. We highly recommend him!",
    name: "Carole Andrews",
    designation: "CEO",
    company: "Innovative Marketing Solutions",
    image: "https://randomuser.me/api/portraits/women/81.jpg",
  },
  {
    testimonial:
      "Yahya is incredibly committed to providing outstanding customer service. It's a pleasure to work with her!",
    name: "Ned Richardson",
    designation: "CTO",
    company: "Visionary Technologies",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
  },
];

const projects = [
  {
    name: "GameSphere",
    description:
      "Global gaming platform hosting diverse multiplayer games, fostering vibrant community for immersive online experiences enjoyed worldwide.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: Mineplex,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Mystic Odyssey",
    description:
      "Indulge in an alluring odyssey as captivating realms and an intriguing narrative intertwine, creating an enchanting tapestry for readers to explore.",

    tags: [
      {
        name: "fiction",
        color: "blue-text-gradient",
      },
      {
        name: "story",
        color: "green-text-gradient",
      },
      {
        name: "mystery",
        color: "pink-text-gradient",
      },
    ],
    image: artwork,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
