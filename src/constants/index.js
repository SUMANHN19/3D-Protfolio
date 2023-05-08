import {
  creator,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  starbucks,
  tesla,
  threejs,
  dwebsite,
  collage,
  billing,
  sdm

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id:"project",
    title:"Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "HTML 5",
    icon: html,
  },
  {
    title: "CSS 3",
    icon: css,
  },
  {
    title: "JavaScript",
    icon: javascript,
  },
  {
    title: "TypeScript",
    icon: typescript,
  },
  {
    title: "React JS",
    icon: reactjs,
  },
  {
    title: "Tailwind CSS",
    icon: tailwind,
  },
  {
    title: "Node JS",
    icon: nodejs,
  },
  {
    title: "MongoDB",
    icon: mongodb,
  },
  {
    title: "Three JS",
    icon: threejs,
  },
  {
    title: "Git",
    icon: git,
  },
  {
    title: "MySQL",
    icon: docker,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const education = [
  {
    title: "10TH (SSLC)",
    collage_name: "Shastry public shcool",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2019 - March 2020",
    points: [
      "It is my one of the best shcool in my life.",
      "I got good friendship in this shcool.",
      "I love my shcool forever.",
      "I am very greatfull to our teacher.",
    ],
  },
  {
    title: "Diploma (Computer Secience)",
    collage_name: "SDM Polytechnic College",
    icon: sdm,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "It is my one of the best and first college in my life.",
      "I got good friendship in this college.",
      "I am very greatfull to our facultys.",
    ],
  }
]

const experiences = [
  {
    title: "Full Stack Devloper(Intern)",
    company_name: "Quiclabs Technologys",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb-20-2023 - Present",
    points: [
      "I learnd so many thinks in this intership like.",
      "Vanilla JS , React Native etc.",
      "It is my first company which I get the intership .",
    ],
   }
  ]


const projects = [
  {
    name: "Collage Website",
    description:
      "Web-based platform that allows users to see the collage facalty details and management and collage fee sturture.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Node ",
        color: "pink-text-gradient",
      },
    ],
    image: collage,
  },
  {
    name: "3D Portfolio website",
    description:
      "Web application that shows an professional website",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three Js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: dwebsite,
  },
  {
    name: "Billing Manegement System ",
    description:
      "A comprehensive billing platform that allows users to add Customer details , product details, to view the both customer and product details it easy way to billing product.",
    tags: [
      {
        name: "JFrame",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: billing,
  },
];

export { services, experiences, projects,education };
