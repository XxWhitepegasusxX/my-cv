import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Alexander Almeida",
  initials: "AA",
  location: "Rio de Janeiro, Brazil",
  locationLink: "https://www.google.com/maps/place/Rio+de+Janeiro",
  about:
    "Full Stack Engineer with a dedication to crafting projects that deliver innovative user experiences, with extra attention to details.",
  summary:
    "With just over 1 year of experience as a Full Stack Engineer, I specialize in utilizing React, React Native, Django, and Java to develop comprehensive solutions. My expertise extends to both frontend and backend development, having been the sole frontend developer for a CDN project where I also collaborated on the backend. Additionally, I collaborated in designing and implementing a SAAS product. My diverse experience includes volunteer work, and I take pride in successfully bringing projects to fruitions.",
  avatarUrl: "https://github.com/XxWhitepegasusxX.png",
  personalWebsiteUrl: "https://alexanderalmeida.vercel.app",
  contact: {
    email: "alexanderalmeida3040@gmail.com",
    tel: "+55022998035875",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/XxWhitepegasusxX",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alexander-almeida-dev/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/Alexand62242947",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Unicesumar",
      degree: "System Analisys and Development",
      start: "01/2021",
      end: "06/2024",
    },
  ],
  work: [
    {
      company: "NaluiStore",
      link: "",
      badges: ["Freelancer"],
      title: "Mobile Developer",
      start: 'Nov 2023',
      end: 'Jan 2023',
      description: [
        "I designed and implemented a inventory management application for toy rentals. Using React Native and TypeScript, I ensured a cross-platform, performant user interface. The application's data persistence was optimized using WatermelonDB, enhancing offline capabilities and responsiveness. This project showcased my proficiency in mobile development, TypeScript, and efficient data management techniques",
        "I implemented Docker into the project,streamlining the development environment and enhancing deployment consistency. This addition optimizes the project's workflow, ensuring efficient collaboration and scalability.",
        "I configured GitHub Actions for continuous integration in the main project, automating the build and testing processes. This implementation ensures a streamlined and efficient development pipeline, promoting code quality and reliability"
      ]
    },
    {
      company: "Plin Tech",
      link: "https://plin.app/furando-a-fila",
      badges: ['Temporary', 'Freelancer'],
      title: "Full Stack Developer",
      start: "Sep 2023",
      end: "Oct 2023",
      description:
        ["Designed and developed an admin dashboard responsible for managing content and the client's visual identity. For the front-end, I employed React, Next.js, and Tailwind, and for the back-end, I utilized NestJS, all implemented in TypeScript.",
         "Worked collaboratively with a team to craft a responsive, user-centric interface and build a scalable, secure API.",
         "Successfully incorporated a wide range of features, spanning login, checkout, user profiles, and registration, to enhance overall functionality and user experience.",
         "I created the client interface, adhering to industry best practices and design standards. Utilizing Tailwind CSS and Next.js with TypeScript, I ensured a responsive and visually appealing user experience, with a focus on accessibility, performance, and maintainability."
        ],
    },
    {
      company: "Configr",
      link: "https://configr.com/",
      badges: [],
      title: "Full Stack Developer",
      start: "Apr 2023",
      end: "Sep 2023",
      description:
      [
        "Designed and developed interfaces with React and NextJS using Typescript, ensuring seamless communication and integration with the back-end.",
        "Developed and deployed scalable Rest APIs using Python-based frameworks Django and Flask, utilizing industry best practices and design patterns.",
        "Developed robust unit and integration tests to ensure code quality and stability using the Cypress library. This included writing tests to verify accuracy of results, detect potential errors and failures, as well as check integration between different system components. Additionally, created automated tests to ensure regression of identified issues, maintaining software reliability over time.",
        "Developed software using agile practices, TDD and SOLID principles, ensuring that each new feature or bug fix met the system requirements. Kept the code modular and flexible, making it easier to maintain and evolve over time. Ensured scalability and high-quality software by following best engineering practices.",
        "I contributed to developing a successful CDN product, enhancing performance by collaborating on coding, testing, and documentation. My contributions helped to deliver a successful product that has been well received by clients and has generated positive feedback from users.",
        "I created a WordPress plugin using PHP that facilitated seamless integration with an external API"
      ],
    },
    {
      company: "Reevo",
      link: "#",
      badges: [],
      title: "IT Assistant | Developer",
      start: "Jan 2023",
      end: "Mar 2023",
      description:
        [`Developed and maintained modern, feature-rich company website using React, Next.js, and TypeScript, integrating animations and third-party services`,
         "Managed client quotations, budgets, contracts, and documents, ensuring organization, security, and legal compliance."
        ],
    },
    {
      company: "Brinquedos para todos",
      link: "https://www.nokia.com",
      badges: ["Volunteer"],
      title: "Frontend Developer",
      start: "Jan 2023",
      end: "Mar 2023",
      description: ["Developed a user interface for a non-profit organization that manages letters for underprivileged children. Worked closely with staff and volunteers to design an intuitive and user-friendly interface that facilitates creating, editing, and tracking of letters from donors to children."],
    },
    {
      company: "Girl Now Woman Later",
      link: "https://www.nokia.com",
      badges: ["Volunteer"],
      title: "Frontend Developer",
      start: "Oct 2022",
      end: "Dec 2022",
      description: ["I led the successful migration of the company's website from Wix to WordPress, ensuring scalability and customization. Additionally, I collaborated on design, creating user-friendly interfaces using Figma, closely coordinating with the development team for effective implementation."],
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Redux",
    "Node.js/Nest/Express",
    "React Native/Expo",
    "Python/Django",
    "Java/Spring",
    "Cypress/Jest",
    "Pytest/Unittest",
    "Docker/Kubernetes",
    "SQL/NoSQL",
    "Redis/RabbitMQ",
    "CI/CD",
    "Microservices Architecture",
    "Algorithms"
  ],
  projects: [
    {
      title: "My Creative portfolio",
      techStack: [
        "Portfolio",
        "Frontend",
        "TypeScript",
        "Next.js",
      ],
      description: "My personal and creative portfolio",
      link: {
        label: "alexanderalmeida.vercel.app",
        href: "https://alexanderalmeida.vercel.app/",
      },
    },
    {
      title: "Library API",
      techStack: ["Backend", "Python", "Django", "PostgreSQL", "Docker"],
      description:
        "A library api that can storage medias, users and documents",
      link: {
        label: "library.api",
        href: "https://github.com/XxWhitepegasusxX/library-python-backend",
      },
    },
    {
      title: "Pong",
      techStack: ["Java"],
      description:
        "Pong multiplayer game",
      link: {
        label: "github.com",
        href: "https://github.com/XxWhitepegasusxX/pong",
      },
    },
    {
      title: "Spring Rest API",
      techStack: ["Backend", "Java", "Spring Boot"],
      description:
        "A simple product REST API",
      link: {
        label: "github.com",
        href: "https://github.com/XxWhitepegasusxX/springboot-first-project",
      },
    },
    {
      title: "Digital Clock",
      techStack: ["Java"],
      description:
        "A simple digital clock made in Java",
      link: {
        label: "github.com",
        href: "https://github.com/XxWhitepegasusxX/java-digital-clock",
      },
    },
    {
      title: "Video Chat",
      techStack: ["FullStack", "Typescript", "React", "Node", "WebSocket"],
      description: "In this app the user can make a call using an Id to connect with another user",
      link: {
        label: "videochat.vercel.app",
        href: "https://webreactchatapp.vercel.app/",
      },
    },
    {
      title: "Kanban App",
      techStack: [
        "Frontend",
        "TypeScript",
        "React",
        "Next.js",
        "Chakra UI"
      ],
      description:
        "A Kanban app to organize the workflow!",
      link: {
        label: "kanbanapp.vercel.app",
        href: "https://kanban-app-ivory.vercel.app/",
      },
    },
    {
      title: "Waves",
      techStack: [
        "Frontend",
        "TypeScript",
        "React",
        "Next.js",
      ],
      description:
        "Waves its an music app | play some relaxing songs.",
      link: {
        label: "waves.vercel.app",
        href: "https://wavesmusic-app.vercel.app/",
      },
    },
    {
      title: "Beauty Salon",
      techStack: ["Frontend", "HTML", "CSS", "Javascript"],
      description:
        "It's a website that presents a beaty salon and their services.",
      link: {
        label: "beautysalon.vercel.app",
        href: "https://beautysalon-originsix-taupe.vercel.app/",
      },
    },
    {
      title: "Creative Crew",
      techStack: ["Frontend", "React"],
      description:
        "Presents a developer's team",
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
  ],
} as const;
