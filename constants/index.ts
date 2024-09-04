import {
  FaHtml5,
  FaGitAlt,
  FaJs,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaMobile,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaJira,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiSass,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiApollographql,
  SiJest,
  SiReactbootstrap,
  SiEslint,
  SiVite,
  SiWebpack,
} from "react-icons/si";

export const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const SocialIcons = [
  { icon: FaGithub, path: "https://github.com/yurashalya" },
  { icon: FaLinkedin, path: "https://www.linkedin.com/in/shalyayura/" },
  { icon: FaInstagram, path: "https://www.instagram.com/shalya_yura" },
  {
    icon: FaYoutube,
    path: "https://www.youtube.com/@shalya_yura/featured",
  },
];

export const StatsResult = [
  {
    num: 6,
    text: "Years of experience",
  },
  {
    num: 12,
    text: "Projects",
  },
  {
    num: 14,
    text: "Technologies mastered",
  },
  {
    num: 4404,
    text: "Code commits",
  },
];

export const ServicesData = [
  {
    title: "Web Development",
    description:
      "Developing a web application using React and Next.JS library.",
  },
  {
    title: "Mobile Development",
    description:
      "Building a mobile application with help React Native library.",
  },
  {
    title: "Optimizing Applications for Maximum Speed",
    description: `Optimizing code and assets to ensure fast loading and smooth operation. 
      Key strategies include Code Splitting and Lazy Loading, 
      Image Optimization,
      Static File Serving,
      Server-Side Rendering (SSR), 
      Incremental Static Regeneration (ISR), 
      React Server Components (RSC)
      Image Optimization, 
      Optimizing CSS
      Performance Monitoring, 
      Reducing JavaScript Bundle size and Concurrent Rendering.`,
  },
  {
    title: "Seo optimizing",
    description: `Seo optimization includes number of pages, Markup semantics(HTML5), 
      Meta Tags and Structured Data,
      Content uniqueness, 
      Loading speed, 
      Sitemap and Robots.txt, 
      URL Structure and Routing, 
      Performance Optimization, 
      Mobile Optimization(Responsive Design), 
      Aria Attributes,  
      External Links and Backlinks, Uptime and other. 
      Monitor and analyze website performance metrics using tools like Lighthouse or Google PageSpeed Insights.
      Collaborate with SEO specialists to integrate SEO strategies into Frontend development processes.`,
  },
];

export const AboutMe = {
  title: "About me",
  description:
    "I'm a dedicated Frontend Software engineer with over 6 years of experience, specializing in React, React Native, and UI/UX design. My expertise spans responsive design, performance optimization, and API integration. I've led successful projects in both remote and in-house roles, where I've honed my skills in testing, debugging, and mentoring junior developers. With a strong foundation in software development and a passion for solving complex challenges, I excel in creating seamless and user-friendly web applications that meet both technical and design requirements.",
  info: [
    {
      fieldName: "Name:",
      fieldValue: "Yurii Shalia",
    },
    {
      fieldName: "Experience:",
      fieldValue: "6+ years",
    },
    {
      fieldName: "Email:",
      fieldValue: "shalyayura@gmail.com",
    },
    {
      fieldName: "Telegram:",
      fieldValue: "@s_yura",
    },
    {
      fieldName: "Language:",
      fieldValue: "English, Ukraine",
    },
  ],
};

export const Experience = {
  icons: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Tech savvy front-end developer with more than 6 years of experience in software development, including React, React Native, Next.JS and other libraries. Extensive knowledge in UI/UX, testing, optimization solutions and debugging processes, developed technical and architectural solutions. A team player who easily connects with any stakeholder, they are distinguished by their strong analytical capabilities and thriving collaborative teamwork skills.",
  items: [
    {
      company: "AltexSoft",
      position: "Senior Frontend Developer",
      duration: "Nov 2023 - Apr 2024",
    },
    {
      company: "Gentle Code",
      position: "Frontend Developer",
      duration: "Aug 2019 - Oct 2023",
    },

    {
      company: "Sigma Software",
      position: "JavaScript Developer(Internship)",
      duration: "Feb 2019 - Jul 2019",
    },
    {
      company: "Starlight.Space",
      position: "Markup Developer",
      duration: "Jan 2018 - Dec 2018",
    },
  ],
};

export const Education = {
  icons: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Graduated from National Technical University “Kharkiv Polytechnic - Institute” | Kharkiv, Ukraine",
  items: [
    {
      institution: "Kharkiv Polytechnic Institute",
      degree:
        "Master diploma of Multimedia information Technologies and system.",
      duration: "2017 - 2019",
    },
    {
      institution: "Kharkiv Polytechnic Institute",
      degree:
        "Bachelor diploma of Multimedia information Technologies and system",
      duration: "2013 - 2017",
    },
  ],
};

export const Skills = {
  title: "My skills",
  description: "Technical stack that I'm working with: ",
  skillsList: [
    {
      icon: FaHtml5,
      name: "HTML5",
    },
    {
      icon: FaCss3,
      name: "CSS3",
    },
    {
      icon: SiSass,
      name: "Sass",
    },
    {
      icon: FaJs,
      name: "Java Script",
    },
    {
      icon: SiTypescript,
      name: "Type Script",
    },
    {
      icon: FaReact,
      name: "React",
    },
    {
      icon: SiNextdotjs,
      name: "Next.js",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind.js",
    },
    {
      icon: SiRedux,
      name: "Redux",
    },
    {
      icon: SiReactquery,
      name: "Tanstack query",
    },
    {
      icon: SiApollographql,
      name: "GraphQL",
    },
    {
      icon: SiJest,
      name: "Jest",
    },
    {
      icon: SiReactbootstrap,
      name: "React Bootstrap",
    },
    {
      icon: FaNodeJs,
      name: "Node.js",
    },
    {
      icon: FaFigma,
      name: "Tailwind.js",
    },
    {
      icon: SiEslint,
      name: "Eslint",
    },
    {
      icon: SiWebpack,
      name: "Webpack",
    },
    {
      icon: SiVite,
      name: "Vite",
    },
    {
      icon: FaGitAlt,
      name: "Git",
    },
    {
      icon: FaJira,
      name: "Jira",
    },
  ],
};
