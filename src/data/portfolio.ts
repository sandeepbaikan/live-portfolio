export const profile = {
  name: "Sandeep Baikan",
  initials: "SB",
  role: "UI Engineering Lead · Full-Stack Architect",
  heading: "Engineering digital experiences that scale.",
  summary: "I design and deliver accessible, performant web platforms—from customer-facing commerce storefronts to complex enterprise applications. I combine hands-on React and Node.js development with architecture, mentoring, and delivery leadership.",
  location: "India · Open to opportunities",
  email: "sandeep.baikan@gmail.com", 
  github: "https://github.com/sandeepbaikan", // Add verified GitHub URL
  linkedin: "https://www.linkedin.com/in/sandeep-baikan-901656b4", // Add verified LinkedIn URL
  years: "10+",
  status: "Open to engineering leadership roles"
} as const;

export type Project = { slug:string; number:string; name:string; category:string; overview:string; problem:string; approach:string[]; outcome:string; technologies:string[]; accent:string; year:string; note?:string };
export const projects: Project[] = [
  {slug:"commerce-storefront-platform",number:"01",name:"E-commerce public themes",category:"COMMERCE / FRONTEND ARCHITECTURE",overview:"Led and contributed to reusable commerce storefront themes, emphasizing maintainable UI patterns, responsive experiences, and storefront performance.",problem:"Support multiple storefront experiences without duplicating complex UI logic while maintaining a responsive shopping journey.",approach:["Established reusable React components and consistent theme conventions.","Focused on rendering performance, responsive layouts and maintainability.","Collaborated across engineering and delivery to ship storefront improvements."],outcome:"Reusable storefront foundations and a more maintainable frontend delivery approach. Quantitative performance claims are intentionally omitted pending verification.",technologies:["React","JavaScript","Vue.js","Node.js","Java","Module Federation","AEM","Headless Commerce","CSS","Performance"],accent:"#d0fd73",year:"SELECTED WORK",note:"Client-facing work: only approved, non-confidential details are included."},
  {slug:"enterprise-excel-addin",number:"02",name:"Enterprise Excel Add-in",category:"ENTERPRISE / AUTHENTICATION",overview:"Enterprise Excel Add-in integrating financial data services, custom functions and authenticated paginated API workflows.",problem:"Invalid or missing access tokens could allow downstream API calls to proceed and create production errors.",approach:["Refactored the authentication flow to validate session state before API access.","Added a refresh-token recovery path and error handling.","Improved control of dependent and paginated requests."],outcome:"Stronger authentication flow and reduced risk of invalid-token API traffic. No internal financial records or confidential implementation details are exposed.",technologies:["TypeScript","React","Node.js","Java","Office Add-ins","REST APIs","Auth"],accent:"#9db9ff",year:"SELECTED WORK"},
  {slug:"hyperlocal-commerce",number:"03",name:"Hyperlocal Supermart",category:"RETAIL / CUSTOMER EXPERIENCE",overview:"Customer-focused digital experience for a hyperlocal supermart operating across India.",problem:"Present discoverable products and intuitive shopping flows on different screen sizes.",approach:["Built and maintained reusable commerce UI experiences.","Focused on responsive product discovery and maintainable components.","Worked with product and delivery stakeholders to improve quality."],outcome:"Evolved the customer shopping experience through practical frontend engineering; commercial metrics are not published.",technologies:["React","JavaScript","Node.js","Java","Responsive UI","Commerce"],accent:"#ffc6a9",year:"SELECTED WORK"}
];

export const experience = [
  {period:"A decade+",title:"Engineering leadership & delivery",summary:"Led frontend delivery, sprint planning, reviews, mentoring and cross-functional collaboration across enterprise and customer-facing products."},
  {period:"Commerce",title:"Storefront engineering",summary:"React and Vue.js themes, reusable UI foundations, and performance work for commerce experiences."},
  {period:"Enterprise",title:"Full-stack problem solving",summary:"Authentication workflows, REST/GraphQL APIs, data-rich UIs and production issue resolution."},
  {period:"Next",title:"Architecture + AI-native engineering",summary:"Deepening system design, cloud architecture, and practical GenAI/agentic application development. Learning focus rather than claimed production AI delivery."}
];
export const skills = [
  {group:"Frontend systems",items:["React","Next.js","TypeScript","JavaScript","Vue.js","Design systems","Accessibility"]},
  {group:"Backend & architecture",items:["Node.js","Java","Express","REST APIs","GraphQL","PostgreSQL","MongoDB","System design"]},
  {group:"Engineering practices",items:["Testing Library","Jest","Cypress","CI/CD","Docker","AWS / Azure familiarity","Mentoring"]},
  {group:"Current exploration",items:["GenAI fundamentals","AI agents","LLM integrations","RAG patterns","Cloud-native architecture"]}
];
export const faq = [
  {question:"What does Sandeep specialize in?",answer:"React and TypeScript frontend architecture, user experience performance, reusable components, enterprise integrations, and engineering leadership."},
  {question:"What technologies has he worked with?",answer:"React, Vue, JavaScript, TypeScript, Node.js, Express, REST, GraphQL, PostgreSQL, MongoDB, testing tools, CI/CD and cloud-related tooling."},
  {question:"What kind of projects has he delivered?",answer:"Commerce public themes, a hyperlocal retail experience, and an Excel Add-in integrating authenticated financial data workflows."},
  {question:"Does he have production AI experience?",answer:"AI and agentic systems are current learning and exploration areas. This portfolio demonstrates an optional AI assistant integration, not a claim of previous production AI project ownership."},
  {question:"How can I get in touch?",answer:"Use the contact links on the portfolio once the owner adds verified email, GitHub and LinkedIn addresses."}
];
export const publicKnowledge = [profile.role,profile.summary,...projects.map(p=>`${p.name}: ${p.overview} ${p.outcome}`),...faq.map(f=>`${f.question} ${f.answer}`)].join("\n");


// Credential IDs provided by the portfolio owner. Links lead to Udemy's official verification pages.
export const certificates = [
  {
    id:"UC-1c2b92d9-1c5f-4791-afdd-1251ef2988a6",
    title:"Software Architecture & Design of Modern Large Scale Systems",
    issuer:"Udemy",
    issued:"September 2026",
    topics:["Software Architecture","System Design","Scalability","Distributed Systems"],
    url:"https://www.udemy.com/certificate/UC-1c2b92d9-1c5f-4791-afdd-1251ef2988a6/"
  },
  {
    id:"UC-3b1f7f06-bcf9-4bc5-946e-ee03b2d436d3",
    title:"The Complete Full-Stack Web Development Bootcamp",
    issuer:"Udemy",
    issued:"August 2026",
    topics:["React.js","Node.js","Full-Stack Development","Web Applications"],
    url:"https://www.udemy.com/certificate/UC-3b1f7f06-bcf9-4bc5-946e-ee03b2d436d3/"
  }
] as const;
