import lacimbali from "../assets/projects/lacimbali.png";
import vittoria from "../assets/projects/vittoria.jpg";
import saplog from "../assets/projects/saplog.jpg";
import casco from "../assets/projects/casco.jpg";
import regionelazio from "../assets/projects/regione-lazio.jpg"

export const HERO_CONTENT = `I like to craft solid and scalable frontend products with great passion and user experiences.`;

export const ABOUT_TEXT = `I am a software developer with over 6+ years of experience specializing in frontend development. My passion lies in creating intuitive, responsive, and user-friendly interfaces that enhance the digital experience. With a strong foundation in web technologies like HTML, CSS, JavaScript, Typescript, Angular, and PHP/Laravel in backend, I enjoy turning complex problems into elegant solutions.

I hold both a Bachelor's and a Master's degree in Computer Science, which has provided me with a deep understanding of software engineering principles, algorithms, and system architecture. Over the years, I’ve honed my skills working on a range of projects, from mobile apps to full-scale web applications, always striving for quality and performance.

When I’m not coding, I’m constantly learning new technologies and staying up-to-date with industry trends to keep delivering the best results.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Present",
    role: "Angular Developer",
    company: "IKONS",
    description: `Led the development of projects in various sectors, including public administration, for municipalities in Italy.Improving project structures by dividing them into modules and features,creating micro frontends.Performed bug fixes and enhancements on existing projects, including upgrading Angular versions from 8/9 to 16/17 for improved support and performance.
`,
    technologies: ["Angular", "RxJs","Auth0","PrimeNg","Tailwind","Bootstrap","ChartJs"],
  },
  {
    year: "Jan 2023 - Jan2024",
    role: "Frontend Developer",
    company: "Crispy Bacon S.r.l",
    description: `Development and maintenance of Angular-based applications from scratch.Developed projects in various fields, such as medical, insurance, and manufacturing industries.Bug fixing in legacy projects using AngularJs technology.Creation of global components and modification of existing ones to improve efficiency and usability using Storybook and StencilJS libraries.
`,
    technologies: ["Typescript", "Angular","SCCS", "Tailwind", "Amazon Cognito", "RxJs"],
  },
  {
    year: "May 2022 - Jan 2023",
    role: "Frontend Developer",
    company: "Inno Data",
    description: `Worked directly with clients to identify their software needs, translating these into actionable and precise CR features and integrations.Maintenance of existing applications, development of new features, and integration of various APIs.Development of mobile and web application using the same source code with Ionic/TypeScript, and CapacitorJS.`,
    technologies: ["Typescrippt", "Ionic", "Tailwind","CapacitorJs","Chart.js","RxJs"],
  },
  {
    year: "Sep 2019  - May 2022",
    role: "Junior Web Developer",
    company: "Libra Aries",
    description: `Analyzed client requirements thoroughly to design web application prototypes.Adhered to coding standards to produce reliable and efficient code.Directed the creation of an internal CRM system at Libra & Aries, which improved payroll processes, KPI monitoring, and introduced automated check-ins/outs, comprehensive work hours and vacation reporting, and weekly automatic performance updates for employees.
`,
    technologies: ["HTML5"," CSS3"," Javascript"," Typescript","AngularJs"," PHP"," Laravel"," SQL"],
  },
];

export const PROJECTS = [
  {
    title: "Gestione Utenti - Platforme",
    image: regionelazio,
    description:
      "A project by the Lazio Municipality (Italy) to manage farmers in the fruit-growing and viticulture sectors, focusing on subsidies, infrastructure improvement, economic support, and tax simplification, among other benefits.",
    technologies: ["HTML", "CSS", "Angular","Tailwind","Auth0","Storybook","Chart.js"],
  },
  {
    title: "Dashboard - La Cimbali",
    image: lacimbali,
    description:
      "An application for managing coffee machines of the LaCimbali brand, which monitors and generates real-time reports for each machine, displaying all specifications, conditions, and any technical or electronic issues.",
    technologies: ["Typescript", "SCSS", "Angular", "Amazon Cognito","Angular Material","RxJs"],
  },
  {
    title: "Quotatore Veloce - Vittoria Assicurazioni",
    image: vittoria,
    description:
      "A project to enable an insurance quote for assets or properties such as homes, cars, life and health insurance, pet insurance, business insurance, and more.",
    technologies: ["HTML", "CSS", "Angular", "Bootstrap","PrimeNG","Storybook","RxJS"],
  },
  {
    title: "Unigest",
    image: saplog,
    description:
      "Unigest is a CRM designed for use by a transport company. This project consists of a management system for employees,drivers, and customers. Employees can manage their working hours and upload their documents, as well as upload drivers'documents, licenses, or truck documents. At the same time, they can communicate with customers via SMS, email, and chat.",
    technologies: ["HTML", "CSS", "Typescript", "Express", "mySQL"],
  },
  {
    title: "CASCO Platform",
    image: casco,
    description:
      "CASCO, the Cruscotto Attivit Studio Commercialista Organizzato, is a specialized time monitoring software designed for commercial accounting offices. It automates the tracking of employee working hours and activities, offering accurate data. One of its key features is the automatic calculation and generation of Key Performance Indicators (KPIs), providing insights into employee productivity. CASCO streamlines administrative tasks, enabling data-driven decisions, resource allocation, and improved efficiency within commercial accounting firms.",
    technologies: ["HTML", "Javascript", "Angular.js", "Chart.js", "Bootstrap","Laravel","PostgreSQL"],
  },
];

export const CONTACT = {
  address: "Tiranë,Albania ",
  phoneNo: "+355693596749 ",
  email: "prenga.kristjan@outlook.com",
};
