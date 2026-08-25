export const profile = {
  name: "Jaya Surya J",
  role1: "Frontend",
  role2: "MERN Stack",
  location: "Coimbatore, Tamil Nadu",
  email: "j.jayasurya127@gmail.com",
  phone: "+91 63854 60252",
  github: "github.com/jayasurya",
  summary:
    "Results-driven MERN Stack Web Developer with 2 years 4 months of hands-on experience delivering 25+ production projects — 12 built with Next.js, 3 with Vite.js, 3 with plain HTML/CSS/JS, and 12 with PHP. Skilled in designing responsive, scalable web applications and admin dashboards with role-based access, CRUD, and SaaS patterns.",
  tagline:
    "",
};

export const stats = [
  { value: "2y 4m", label: "experience" },
  { value: "25+", label: "shipped projects" },
  { value: "12", label: "built in Next.js" },
  { value: "3", label: "SaaS platforms" },
];

export const experience = [
  {
    company: "Appac Mediatech Pvt. Ltd.",
    title: "Junior Web Developer",
    period: "03/2024 — Present",
    place: "Coimbatore",
    branch: "main",
    commits: [
      {
        project: "GKNM Hospital Web Application",
        message: "SSR healthcare platform for better SEO & speed",
        image: "/projects/gknm-home.webp",
        caption: "SSR healthcare platform — placeholder image",
        details: [
          "Engineered an SSR-based healthcare web application using Vite and Node.js, boosting SEO performance and page load speed, resulting in measurably better search visibility and engagement.",
          "Built dynamic dashboards and content-driven pages for Speciality, Blog, and News sections using SSR, working with backend APIs and SQL queries to fetch and display content efficiently.",
        ],
        stack: ["Vite", "Node.js", "SSR", "SQL"],
      },
      {
        project: "CRM — Internal Work Management System",
        message: "real-time BI dashboards for internal ops",
        image: "/projects/placeholder-circuit.svg",
        caption: "Internal CRM & reporting suite — placeholder image",
        details: [
          "Developed scalable frontend modules for work tracking, client management, and reporting in PHP/Laravel, integrating RESTful APIs and Google Charts for real-time data visualization.",
          "Connected to backend APIs and modified existing SQL queries to support business intelligence dashboards, enabling accurate reporting for stakeholder decisions.",
        ],
        stack: ["PHP", "Laravel", "REST APIs", "Google Charts"],
      },
      {
        project: "Izape — SaaS Product",
        message: "multi-tenant SaaS UI with reusable components",
        image: "/projects/placeholder-orbit.svg",
        caption: "Multi-tenant SaaS dashboard — placeholder image",
        details: [
          "Built reusable, scalable React.js components with Material UI (MUI), delivering pixel-perfect, responsive interfaces and interactive data visualization in a multi-tenant SaaS environment.",
          "Integrated RESTful APIs connected to a PostgreSQL backend, resolved critical frontend performance issues, and ensured consistent delivery across scalable cloud infrastructure.",
        ],
        stack: ["React.js", "MUI", "PostgreSQL", "REST APIs"],
      },
    ],
  },
];

export type ProjectCategory = "next" | "vite" | "php" | "html";

export const projectTabs: { id: ProjectCategory; label: string }[] = [
  { id: "next", label: "Next.js" },
  { id: "vite", label: "Vite" },
];

export const projects: {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
  link: string;
  tags: string[];
  placeholder?: boolean;
}[] = [
  {
    id: "izape",
    title: "Izape — SaaS Product",
    description:
      "Multi-tenant SaaS dashboard with reusable React + MUI components, pixel-perfect responsive UI, and interactive data visualization on a PostgreSQL backend.",
    category: "next",
    image: "/projects/placeholder-orbit.svg",
    link: "",
    tags: ["React.js", "MUI", "PostgreSQL"],
    placeholder: true,
  },
 
  {
    id: "gknm",
    title: "GKNM Hospital Web Application",
    description:
      "SSR-based healthcare platform with dynamic dashboards for Speciality, Blog, and News, tuned for SEO performance and fast page loads.",
    category: "vite",
    image: "/projects/gknm-home.webp",
    link: "https://gknmhospital.org/",
    tags: ["Vite", "Node.js", "SSR"],
    placeholder: true,
  },
  {
    id: "sunbeam",
    title: "Sunbeam Lightweight Solutions",
    description:
      "Static corporate site for an automotive die-casting manufacturer, with content-driven pages for Products, Capabilities, Investors, and News/Events, optimized for SEO and fast page loads.",
    category: "vite",
    image: "/projects/sunbeam-home.webp",
    link: "https://www.sunbeamauto.com/",
    tags: ["Vite", "SSR"],
    placeholder: true,
  },
  {
    id: "synergy",
    title: "Synergy India",
    description:
      "Static B2B site for an industrial tooling distributor, showcasing multi-brand product catalogs (cutting tools, holding systems, metrology, lubricants) and industry verticals, optimized for SEO and fast page loads.",
    category: "vite",
    image: "/projects/synnergy-home.webp",
    link: "https://synergy-india.in/",
    tags: ["Vite", "SSR"],
    placeholder: true,
  },
  {
    id: "acestar",
    title: "Acestar Complete Toolings Solution ",
    description:
      "Static B2B site for an industrial tooling distributor, showcasing multi-brand product catalogs (cutting tools, holding systems, metrology, lubricants), client testimonials, and industry verticals, tuned for SEO performance and fast page loads.",
    category: "vite",
    image: "/projects/acestar-home.webp",
    link: "https://www.acestar.in/",
      tags: ["Vite", "SSR"],
      placeholder: true,
    },
  {
    id: "appac",
    title: "Appac Media Enabling Solutions ",
    description:
      "Marketing website for a full-service B2B digital agency, with filterable case studies by industry, service/solutions hub, blog, and newsletter sections, tuned for SEO performance and fast page loads.",
    category: "next",
    image: "/projects/appac-home.webp",
    link: "https://www.appacmedia.com/",
      tags: ["Next.js", "SEO"],
      placeholder: true,
    },
  {
    id: "storage",
    title: "Craftsman Storage",
    description:
      "Static corporate site for an industrial storage automation manufacturer, with an extensive product catalog (ASRS, racking, shelving), case studies, and a linked webshop, tuned for SEO performance and fast page loads.",
    category: "next",
    image: "/projects/storage-home.webp",
    link: "https://www.craftsmanstorage.com/",
      tags: ["Next.js", "SEO"],
      placeholder: true,
    },
  {
    id: "m2nxt",
    title: "m2nxt Solutions",
    description:
      "Static corporate site for a smart-manufacturing solutions provider, with product hubs for Automation, Process Engineering, and Additive Manufacturing, plus Blog and News & Events sections, tuned for SEO performance and fast page loads.",
    category: "next",
    image: "/projects/m2nxt-home.webp",
    link: "https://www.m2nxt.com/",
      tags: ["Next.js", "SEO"],
      placeholder: true,
    },
  {
    id: "ric",
    title: "Reliable International Couriers",
    description:
      "Corporate site for a logistics and courier company, with service pages for domestic/international shipping, plus interactive tools (shipment tracking, rate and volumetric calculators), tuned for SEO performance and fast page loads.",
    category: "next",
    image: "/projects/ric-home.webp",
    link: "https://www.reliablecouriers.in/",
      tags: ["Next.js", "SEO"],
      placeholder: true,
    },
 
];

export const education = [
  {
    program: "MERN Stack Web Development",
    school: "Edureka Learning Center",
    period: "11/2023 — 02/2024",
  },
  {
    program: "BSc Physics",
    school: "Sri Ramakrishna College of Arts & Science, Coimbatore",
    period: "06/2020 — 07/2023",
  },
];

export const skills = [
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "MUI", "shadcn/ui", "GSAP", "Vite"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express.js", "PHP", "Laravel", "RESTful APIs"],
  },
  {
    group: "Database",
    items: ["MySQL", "SQL Query Optimization", "PostgreSQL"],
  },
  {
    group: "Tools & Practices",
    items: ["Git", "GitHub", "Agile/Scrum", "SSR", "SEO Optimization", "Performance Tuning"],
  },
  {
    group: "Auth",
    items: ["JWT", "OAuth"],
  },
  {
    group: "Exploring",
    items: ["React Native", "Python", "Docker", "Kotlin", "NGINX"],
  },
];
