import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  Building2,
  Cloud,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  Layers3,
  LockKeyhole,
  Network,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";

export type Stat = {
  value: string;
  label: string;
};

export type Highlight = {
  title: string;
  icon: LucideIcon;
};

export type StackCategory = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  duration: string;
  items: string[];
};

export type Education = {
  degree: string;
  institution: string;
  location: string;
  duration?: string;
};

export type Project = {
  name: string;
  image: string;
  imageAlt: string;
  type: string;
  overview: string;
  techStack: string[];
  achievements: string[];
  businessImpact: string[];
  github: string;
  liveDemo: string;
  githubLabel?: string;
  liveLabel?: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const hero = {
  badge: "5+ Years of Experience · Laravel & Full-Stack Development",
  heading: "Software Engineer & Full-Stack Developer",
  intro:
    "I’m Abu Sufian Rubel, based in Dhaka, Bangladesh. I build web applications, REST APIs, ERP modules, and payment integrations with Laravel, PHP, Golang, Vue.js, and React."
};

export const about = {
  summary:
    "I’m a software engineer and full-stack developer with 5+ years of experience building web applications for payments, eCommerce, and hotel operations. My strongest focus is backend development with Laravel, PHP, and Golang, supported by frontend work with Vue.js and React. I’ve built ERP modules, integrated payment gateways and property management systems, and improved performance through database optimization and Redis caching. I also work with Docker, AWS, and CI/CD pipelines to support production deployments. I care about clear code, reliable integrations, and software that makes everyday work easier.",
  highlights: [
    { title: "5+ Years of Experience", icon: BadgeCheck },
    { title: "Enterprise Applications", icon: Building2 },
    { title: "Payment Gateway Solutions", icon: Banknote },
    { title: "ERP/HRM Development", icon: Workflow },
    { title: "Cloud & API Architecture", icon: Cloud }
  ] satisfies Highlight[],
  stats: [
    { value: "5+", label: "Years of Experience" },
    { value: "20+", label: "Projects" },
    { value: "10+", label: "Integrations" },
    { value: "10,000+", label: "Daily Hotel Operations Supported" }
  ] satisfies Stat[]
};

export const techStack: StackCategory[] = [
  {
    title: "Backend",
    icon: ServerCog,
    items: ["Laravel", "PHP", "Golang", "Node.js", "REST APIs", "OAuth2", "JWT", "Microservices"]
  },
  {
    title: "Frontend",
    icon: Code2,
    items: ["Vue.js", "React.js", "Next.js", "JavaScript", "TypeScript", "Bootstrap", "Tailwind CSS"]
  },
  {
    title: "Database",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "SQL Server", "Redis", "Query Optimization", "Database Design"]
  },
  {
    title: "DevOps",
    icon: Cpu,
    items: ["Docker", "AWS", "CI/CD", "GitHub Actions", "Bitbucket", "Linux", "Nginx", "Postman"]
  }
];

export const experiences: Experience[] = [
  {
    company: "Adventure Dhaka Limited",
    role: "Backend Developer",
    location: "Dhaka, Bangladesh",
    duration: "Nov 2024 – Present",
    items: [
      "Designed and maintained scalable backend services for hotel management operations using Golang, Node.js, Redis, and REST APIs.",
      "Worked on Hotel Manager Panel backend systems supporting high-volume hotel operations.",
      "Integrated third-party PMS systems such as AirHost and Temairazu through REST APIs.",
      "Improved backend performance using profiling, caching, refactoring, and API optimization.",
      "Automated hotel configuration workflows to reduce manual errors and improve operational reliability."
    ]
  },
  {
    company: "TechVillage",
    role: "Software Engineer",
    location: "Dhaka, Bangladesh",
    duration: "Mar 2021 – Oct 2024",
    items: [
      "Developed and maintained Laravel-based enterprise applications, ERP modules, eCommerce systems, and payment gateway platforms.",
      "Developed vendor, inventory, payment, and commission management modules for Martvill, a multi-vendor eCommerce ERP platform.",
      "Led backend development for PayMoney, a secure Laravel-based multi-currency payment gateway.",
      "Implemented role-based access control (RBAC), modular APIs, and responsive dashboards with Laravel and Vue.js.",
      "Optimized MySQL queries and backend workflows to improve performance and reduce server load.",
      "Collaborated on Docker, GitHub Actions, CI/CD pipelines, and AWS-based cloud deployments."
    ]
  },
  {
    company: "Uttara InfoTech",
    role: "Junior PHP Developer",
    location: "Dhaka, Bangladesh",
    duration: "Jan 2020 – Mar 2021",
    items: [
      "Contributed to Laravel client projects by implementing MVC modules, REST APIs, and backend features.",
      "Assisted with debugging, refactoring, and page-load performance improvements.",
      "Built foundational experience in PHP, Laravel, MySQL, and production web application development."
    ]
  }
];

export const education: Education[] = [
  {
    degree: "B.Sc. in Computer Science and Telecommunication Engineering",
    institution: "Noakhali Science & Technology University",
    location: "Sonapur, Noakhali",
    duration: "2015–2019"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Sherpur Government College",
    location: "Sherpur, Bangladesh",
    duration: "2014"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Bonogram Hafiz Uddin High School",
    location: "Jhinaigati, Sherpur",
    duration: "2012"
  }
];

export const projects: Project[] = [
  {
    name: "PayMoney",
    image: "/projects/paymoney.jpg",
    imageAlt: "Illustrative payment platform preview for PayMoney; not a product screenshot",
    type: "Online Payment Gateway",
    overview:
      "A Laravel payment platform for multi-currency and cryptocurrency transactions. I led backend development and worked on authentication, payment integrations, and transaction processing.",
    techStack: ["Laravel", "PHP", "MySQL", "REST API", "OAuth2", "JWT", "PayPal API", "Stripe API", "CoinPayments API"],
    achievements: [
      "Built secure backend architecture for multi-currency and crypto transactions.",
      "Integrated PayPal, Stripe, and CoinPayments.",
      "Improved transaction processing through database and API optimization."
    ],
    businessImpact: [
      "Supported 10+ currencies and served 1,000+ users.",
      "Helped businesses process secure online payments through a scalable gateway architecture."
    ],
    github: "https://github.com/sufianrubel/PayMoney", // TODO: Replace with PayMoney GitHub URL.
    liveDemo: "https://demo.paymoney.techvill.net/", // TODO: Replace with PayMoney live/demo URL.
    githubLabel: "GitHub Repository",
    liveLabel: "Live Demo"
  },
  {
    name: "Hotel Manager Panel",
    image: "/projects/hotel-manager-panel.svg",
    imageAlt: "Illustrative hotel operations preview for Hotel Manager Panel; not a product screenshot",
    type: "Hotel Operations Backend Platform",
    overview:
      "A hotel operations backend built with Golang and Node.js. My work covers hotel management services, property management system (PMS) integrations, and performance optimization.",
    techStack: ["Golang", "Node.js", "PostgreSQL", "Redis", "REST API", "Microservices"],
    achievements: [
      "Built backend services for hotel management workflows.",
      "Integrated external PMS platforms via REST APIs.",
      "Improved performance through caching, profiling, and backend refactoring."
    ],
    businessImpact: [
      "Supported 10,000+ daily hotel operations.",
      "Improved data synchronization, operational reliability, and backend uptime."
    ],
    github: "#", // TODO: Private project. Replace if public URL becomes available.
    liveDemo: "#", // TODO: Replace with live URL or keep marked as Private Project.
    githubLabel: "Not Available",
    liveLabel: "Private Project"
  },
  {
    name: "MeritEye",
    image: "/projects/meriteye.svg",
    imageAlt: "Illustrative vue.js application preview for MeritEye; not a product screenshot",
    type: "Vue.js Web Application",
    overview:
      "A Vue 3 web application where I worked on reusable components, state management with Pinia, and navigation with Vue Router.",
    techStack: ["Vue 3", "Pinia", "Vue Router", "JavaScript", "REST API"],
    achievements: [
      "Built modular frontend components with Vue 3.",
      "Implemented state management with Pinia and route-based navigation.",
      "Developed responsive interfaces and maintainable components."
    ],
    businessImpact: ["Made frontend features easier to maintain and navigation easier to follow."],
    github: "https://github.com/MeritEye/merit", // TODO: Replace with MeritEye GitHub URL.
    liveDemo: "https://demo.meriteye.techvill.net/", // TODO: Replace with MeritEye live/demo URL.
    githubLabel: "GitHub Repository",
    liveLabel: "Live Demo"
  },
  {
    name: "Martvill",
    image: "/projects/martvill.jpg",
    imageAlt: "Illustrative multi-vendor commerce preview for Martvill; not a product screenshot",
    type: "Multi-Vendor eCommerce ERP Platform",
    overview:
      "A multi-vendor eCommerce ERP platform built with Laravel and Vue.js. I developed backend modules for vendors, inventory, products, payments, and commissions.",
    techStack: ["Laravel", "MySQL", "Vue.js", "REST API", "Bootstrap", "GitHub Actions", "Docker"],
    achievements: [
      "Designed core ERP modules for inventory, product management, commissions, and vendor workflows.",
      "Integrated 10+ payment methods via REST/OAuth APIs.",
      "Improved vendor onboarding, transaction reliability, and platform maintainability."
    ],
    businessImpact: [
      "Scaled to 1,500+ active vendors.",
      "Improved vendor onboarding by 40% and reduced transaction errors by 30%."
    ],
    github: "#", // TODO: Replace with Martvill GitHub URL if public.
    liveDemo: "https://www.demo.martvill.techvill.net/", // TODO: Replace with Martvill live/demo URL.
    githubLabel: "Private Repository",
    liveLabel: "Live Demo"
  }
];

export const services: Service[] = [
  {
    title: "API Development",
    description:
      "I develop REST APIs with Laravel, PHP, and Golang, including OAuth2 and JWT authentication and integrations with external services.",
    icon: Network
  },
  {
    title: "ERP Development",
    description:
      "I build ERP modules for inventory, vendor management, HRM, and reporting, with workflows tailored to business operations.",
    icon: Layers3
  },
  {
    title: "Payment Gateway Integration",
    description:
      "I integrate payment providers such as Stripe, PayPal, and CoinPayments, including authentication flows and transaction processing.",
    icon: LockKeyhole
  },
  {
    title: "Cloud Deployment",
    description:
      "I support application deployment with Docker, AWS, Linux, Nginx, and CI/CD pipelines, alongside caching and performance improvements.",
    icon: Rocket
  },
  {
    title: "System Architecture",
    description:
      "I design backend services and databases, plan microservices, and use Redis caching to support reliable application performance.",
    icon: ShieldCheck
  },
  {
    title: "Technical Consulting",
    description:
      "I review code, investigate backend and database performance, and help teams plan deployments and maintainable system improvements.",
    icon: Sparkles
  }
];

export const educationIcon = GraduationCap;
export const briefcaseIcon = BriefcaseBusiness;
