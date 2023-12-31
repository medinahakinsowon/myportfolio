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
  todo,
  worldapp,
  youtube,
  ecomm,
  pythontodo,
  myProject,
  threejs,
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
    company_name: "Sumateq Ceramics",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2023",
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
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Codar",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Sep 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Codar",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
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
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Medinat does.",
    name: "Chris Brown",
    designation: "CEO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Medinat optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
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
    name: "Python Todoapp",
    description:
      "Web-based app, for our daily shores. It gives the user an opportunity to write down the dos of the day, managing time for efficiency",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pythontodo,
    source_code_link: "https://github.com/medinahakinsowon/pythontodoapp.git",
  },
  {
    name: "Note App",
    description:
      "Web-based app, for our daily shores. It gives the user an opportunity to write down the dos of the day, managing time for efficiency",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: myProject,
    source_code_link: "https://github.com/medinahakinsowon/noteapp.git",
  },
];

export { services, technologies, experiences, testimonials, projects };