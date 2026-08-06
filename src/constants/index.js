import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  redux,
  reactjs,
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
  sumatsdigital,
  sumatspice,
  frozen,
  todo,
  worldapp,
  youtube,
  ecomm,
  jobs,
  myProject,
  threejs,
  incomeApp
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Sumatspice",
    icon: sumatspice,
    iconBg: "#E6DEDD",
    since: "March 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Content Creator",
    company_name: "Sumatsdigital",
    icon: sumatsdigital,
    iconBg: "#E6DEDD",
    since: "Jan 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Cloudethusiast",
    icon: frozen,
    iconBg: "#383E56",
    date: "Jan 2023 - Dec 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Medinat proved me wrong.",
    name: "Tajuddin Akinsowon",
    designation: "Project Manager",
    company: "Sumateq Ceramics",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Medinat does.",
    name: "Dele Olaore",
    designation: "CEO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "After Medinat optimized our website, our traffic increased by 50%. We can't thank her enough!",
    name: "Sakiinah Amosu",
    designation: "Head Teacher",
    company: "Tranquil Academy",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ecommerce",
    description:
      "An ecommerce wedsite, with the functionality of viewing products and making payments",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ecomm,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job-App",
    description:
      "Web-based app, develop for posting applications and for job seekers.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: jobs,
    source_code_link: "https://github.com/medinahakinsowon/jobs.git",
  },
  {
    name: "Income Tracker",
    description: "Web-based app, for our tracking our income and daily spendings.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: incomeApp,
    source_code_link: "https://github.com/medinahakinsowon/personalExpense.git",
  },
  {
    name: "Todo-App",
    description:
      "Web-based app, for our daily shores. It gives the user an opportunity to write down the dos of the day, managing time for efficiency",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/medinahakinsowon/todo-list-app.git",
  },
  {
    name: "Youtube-Clone",
    description:
      "Web application that gives the feel of the usual youtube app. Offering various channels that gives different information with visuals in pictures and videos ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidApi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/medinahakinsowon/youtube-clone.git",
  },
  {
    name: "World-Countries-App",
    description:
      "A react base application, that gives a user an opportunity to know the countries around the world. It was built using restcountry api following the documentation offered on the api page.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restcountryApi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: worldapp,
    source_code_link: "https://github.com/medinahakinsowon/countryapi.git",
  },
];

export { services, technologies, experiences, testimonials, projects };