import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

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
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 3404,
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
