export interface NavItem {
  name: string;
  href: string;
  children?: { name: string; href: string; desc?: string }[];
}

export interface Statistic {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  image: string;
  fallbackGradient: string;
  metrics?: { label: string; value: string };
  link?: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
  deliverables: string[];
  badge?: string;
}

export interface ValueProp {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface TechItem {
  name: string;
  category: "Frontend & Mobile" | "Backend & API" | "Cloud & Infrastructure" | "AI & Computer Vision";
  iconName: string;
  description: string;
}

export interface Country {
  name: string;
  code: string;
  region: "Asia Pacific" | "Americas" | "Europe" | "Middle East & Africa";
  flagUrl: string;
  coords: { x: number; y: number }; // Percentage on SVG map
  highlight?: string;
}

export interface Client {
  name: string;
  category: string;
  logoText: string;
  remoteLogo?: string;
  website?: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  metrics?: string;
}

export interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  quote: string;
  image: string;
  rating: number;
}

export const navigationData: NavItem[] = [
  {
    name: "About",
    href: "#story",
    children: [
      { name: "Our Story", href: "#story", desc: "Our journey from 2019 to today" },
      { name: "Leadership", href: "#leadership", desc: "Meet the executive team driving Cling" },
      { name: "Global Footprint", href: "#global", desc: "Presence across 12+ international markets" },
    ],
  },
  {
    name: "Services",
    href: "#services",
    children: [
      { name: "Web & Custom Software", href: "#services", desc: "Tailor-made platforms built for scale" },
      { name: "Mobile App Engineering", href: "#services", desc: "Native iOS, Android & cross-platform apps" },
      { name: "AI & Computer Vision", href: "#services", desc: "Intelligent automation and neural models" },
      { name: "Enterprise ERP Systems", href: "#services", desc: "Integrated digital backbones for operations" },
    ],
  },
  {
    name: "Work",
    href: "#work",
  },
  {
    name: "Solutions",
    href: "#why-cling",
  },
  {
    name: "Clients",
    href: "#clients",
  },
];

export const statisticsData: Statistic[] = [
  {
    value: 32,
    suffix: "M+",
    label: "Lines of Code Written",
    sublabel: "32,387,122+ audited and verified across production systems",
  },
  {
    value: 350,
    suffix: "+",
    label: "Happy Global Clients",
    sublabel: "Startups, mid-market leaders, and enterprise organizations",
  },
  {
    value: 390,
    suffix: "+",
    label: "Projects Completed",
    sublabel: "Spanning web platforms, mobile apps, ERPs, and AI systems",
  },
  {
    value: 1500,
    suffix: "+",
    label: "Coffee With Clients",
    sublabel: "Deep strategic advisory and architectural sessions",
  },
];

export const projectsData: Project[] = [
  {
    id: "task-flow",
    name: "Task Flow",
    category: "Enterprise SaaS & Productivity",
    tagline: "High-performance project orchestration platform",
    description:
      "A comprehensive task management and team collaboration system engineered to streamline complex project workflows, automate milestone tracking, and deliver real-time productivity telemetry.",
    tags: ["React", "Node.js", "Real-Time WebSockets", "PostgreSQL", "Workflow Engine"],
    image: "/images/thumb-ai.png",
    fallbackGradient: "from-neutral-900 via-neutral-950 to-red-950/40",
    metrics: { label: "Productivity Boost", value: "3.4x Faster" },
  },
  {
    id: "rusho",
    name: "Rusho Platform",
    category: "Hyperlocal On-Demand Services",
    tagline: "On-demand home services fulfillment ecosystem",
    description:
      "Ghaziabad's pioneer on-demand home services platform connecting thousands of households with verified professionals, featuring live geospatial technician tracking and instant scheduling.",
    tags: ["Mobile App", "Geospatial Routing", "Live Tracking", "Payment Gateway", "Real-Time Dispatch"],
    image: "/images/thumb-3d.png",
    fallbackGradient: "from-neutral-900 via-neutral-950 to-neutral-900",
    metrics: { label: "Dispatch Latency", value: "< 2 mins" },
  },
  {
    id: "speech-ally",
    name: "Speech Ally (PhonoLogix)",
    category: "Healthcare & Digital Therapeutics",
    tagline: "Interactive speech therapy portal & patient ecosystem",
    description:
      "Clinical digital therapy application providing interactive speech pathology exercises, automated session diagnostics, and therapist-patient administration across mobile and desktop devices.",
    tags: ["Audio Processing", "Cross-Platform", "HIPAA Architecture", "Admin Portal", "Analytics"],
    image: "/images/elizabeth.jpeg",
    fallbackGradient: "from-neutral-900 via-neutral-950 to-red-950/30",
    metrics: { label: "Patient Retention", value: "94%" },
  },
  {
    id: "omson-erp",
    name: "Omsons ERP Ecosystem",
    category: "Enterprise Manufacturing ERP",
    tagline: "End-to-end industrial manufacturing & export ERP",
    description:
      "Tailored enterprise resource management software integrating multi-warehouse inventory, procurement cycles, GST compliance, international export documentation, and shop-floor tracking.",
    tags: ["ERP Architecture", "Supply Chain", "Inventory Management", "Financial Ledger", "Role-Based Access"],
    image: "/images/thumb-3d.png",
    fallbackGradient: "from-neutral-900 via-neutral-950 to-neutral-900",
    metrics: { label: "Operational Overhead", value: "-38%" },
  },
  {
    id: "epaylater",
    name: "ePayLater Infrastructure",
    category: "Fintech & Instant Credit Checkout",
    tagline: "Seamless deferred payment & credit settlement engine",
    description:
      "Digital payment infrastructure integration enabling instant credit checkouts, idempotent payment verification, and fraud prevention for commercial merchants and consumers.",
    tags: ["Fintech", "Payment Gateways", "High Throughput", "Security", "Idempotent APIs"],
    image: "/images/aurko.jpeg",
    fallbackGradient: "from-neutral-900 via-neutral-950 to-indigo-950/30",
    metrics: { label: "Uptime Reliability", value: "99.99%" },
  },
  {
    id: "ai-vision",
    name: "Computer Vision & Surveillance",
    category: "Artificial Intelligence & Edge ML",
    tagline: "Real-time anomalous activity detection neural network",
    description:
      "High-throughput intelligent vision model designed to analyze continuous video feeds, recognize facial signatures, and flag suspicious perimeter breaches with sub-second alert latency.",
    tags: ["Python", "PyTorch", "Computer Vision", "Object Detection", "Real-Time Video Stream"],
    image: "/images/thumb-ai.png",
    fallbackGradient: "from-neutral-900 via-neutral-950 to-red-950/50",
    metrics: { label: "Detection Accuracy", value: "98.7%" },
  },
];

export const servicesData: Service[] = [
  {
    id: "web-dev",
    title: "Web & Custom Software",
    shortDesc: "Bespoke digital platforms engineered from ground zero.",
    description:
      "We never use cookie-cutter templates. Every web application and SaaS portal is engineered from the ground up to match your exact business logic, performance demands, and brand sophistication.",
    iconName: "Globe",
    badge: "Core Expertise",
    deliverables: [
      "Custom Enterprise Portals & SaaS",
      "Next.js & React High-Speed Web Apps",
      "Headless CMS & E-Commerce Architectures",
      "Mission-Critical Microservices & APIs",
    ],
  },
  {
    id: "mobile-dev",
    title: "Mobile App Engineering",
    shortDesc: "Native and cross-platform experiences for iOS and Android.",
    description:
      "Delivering consumer-grade smoothness and enterprise security. From offline-first architectures to real-time geospatial tracking, our apps captivate users and drive retention.",
    iconName: "Smartphone",
    badge: "Native & Cross-Platform",
    deliverables: [
      "iOS (Swift) & Android (Kotlin) Development",
      "React Native & Flutter Solutions",
      "Live Geospatial Tracking & Telemetry",
      "Secure In-App Payments & Biometrics",
    ],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    shortDesc: "Cognitive models, Computer Vision, and intelligent NLP.",
    description:
      "We build adaptive intelligence into your operational workflow. From real-time surveillance video analytics to custom NLP chatbots and automated classification engines.",
    iconName: "Cpu",
    badge: "Next-Gen Tech",
    deliverables: [
      "Computer Vision & Object Detection Models",
      "Natural Language Processing (NLP) Engines",
      "Predictive Analytics & Forecasting Pipelines",
      "LLM Fine-Tuning & Intelligent Agents",
    ],
  },
  {
    id: "erp-enterprise",
    title: "ERP & Enterprise Solutions",
    shortDesc: "Unified operational backbones integrating all departments.",
    description:
      "Eliminate fragmented spreadsheets and disparate software. We build unified ERP platforms that sync your supply chain, procurement, inventory, sales leads, and accounting.",
    iconName: "Database",
    deliverables: [
      "End-to-End Enterprise Resource Planning (ERP)",
      "Supply Chain & Multi-Warehouse Tracking",
      "Automated Invoicing & Regulatory Compliance",
      "Role-Based Security & Audit Logs",
    ],
  },
  {
    id: "digital-growth",
    title: "Digital Marketing & SEO",
    shortDesc: "Precision digital channels driving targeted revenue.",
    description:
      "A high-performing product deserves an audience. We implement data-driven SEO architectures, performance marketing, and social funnel engineering that convert visitors into lifetime accounts.",
    iconName: "TrendingUp",
    deliverables: [
      "Technical SEO & Content Hierarchy",
      "High-ROI Google Ads & Meta Funnels",
      "Conversion Rate Optimization (CRO)",
      "Growth Analytics & Attribution Modeling",
    ],
  },
  {
    id: "media-3d",
    title: "3D Animation & Visual Media",
    shortDesc: "Cinematic 3D animations and product visualizations.",
    description:
      "Bring complex mechanical concepts, software architectures, and brand narratives to life with photorealistic 3D rendering, logo animations, and immersive commercial videos.",
    iconName: "Film",
    deliverables: [
      "Commercial Product 3D Renders",
      "Dynamic Logo & Motion Identity",
      "Architectural Walkthroughs & Modeling",
      "Interactive WebGL Experiences",
    ],
  },
];

export const whyClingData: ValueProp[] = [
  {
    id: "end-to-end",
    title: "End-to-End Product Lifecycle",
    subtitle: "Discovery to 24/7 Production SLA",
    description:
      "We don't hand off half-baked designs. We take complete ownership from initial architectural blueprint and UX prototyping to cloud infrastructure, automated QA, and continuous enhancement.",
    iconName: "Layers",
  },
  {
    id: "business-first",
    title: "Business-First Engineering",
    subtitle: "Built for Revenue & Efficiency",
    description:
      "Technology is only as good as the commercial leverage it provides. We build systems that directly compress operational overhead, boost conversion metrics, and unlock new business capabilities.",
    iconName: "Target",
  },
  {
    id: "modern-stack",
    title: "Modern Technical Rigor",
    subtitle: "No Technical Debt. No Outdated Stacks.",
    description:
      "We write clean, strictly-typed code with modular architecture, strict security boundaries, and automated CI/CD deployment pipelines that scale seamlessly from day one.",
    iconName: "ShieldCheck",
  },
  {
    id: "partnership",
    title: "Long-Term Strategic Partnership",
    subtitle: "Your High-Velocity Engineering Squad",
    description:
      "More than 350+ clients trust Cling as their long-term technical backbone. We evolve your digital platforms alongside your growth trajectory, ensuring you stay ahead of market competitors.",
    iconName: "Handshake",
  },
];

export const techStackData: TechItem[] = [
  // Frontend & Mobile
  { name: "Next.js", category: "Frontend & Mobile", iconName: "Terminal", description: "Server-side rendering, App Router, optimized performance" },
  { name: "React", category: "Frontend & Mobile", iconName: "Code2", description: "Modular component architecture and reactive state" },
  { name: "TypeScript", category: "Frontend & Mobile", iconName: "FileCode", description: "Strict static typing and enterprise codebase maintainability" },
  { name: "Tailwind CSS", category: "Frontend & Mobile", iconName: "Palette", description: "Utility-first design system with pixel-level responsiveness" },
  { name: "React Native", category: "Frontend & Mobile", iconName: "Smartphone", description: "Cross-platform mobile applications with native runtime" },
  { name: "Flutter", category: "Frontend & Mobile", iconName: "Layers", description: "Multi-platform high-performance UI engineering" },
  // Backend & API
  { name: "Node.js", category: "Backend & API", iconName: "Server", description: "High-concurrency asynchronous runtime for scalable services" },
  { name: "Python", category: "Backend & API", iconName: "Cpu", description: "Data science, AI/ML pipelines, and microservices" },
  { name: "FastAPI & Express", category: "Backend & API", iconName: "Zap", description: "High-throughput RESTful endpoints and middleware" },
  { name: "GraphQL", category: "Backend & API", iconName: "GitMerge", description: "Declarative, precise data querying across platforms" },
  // Cloud & Infrastructure
  { name: "Amazon Web Services (AWS)", category: "Cloud & Infrastructure", iconName: "Cloud", description: "S3, EC2, CloudFront, RDS resilient cloud architecture" },
  { name: "Docker & Containers", category: "Cloud & Infrastructure", iconName: "Box", description: "Reproducible containerization and microservice orchestration" },
  { name: "PostgreSQL & MongoDB", category: "Cloud & Infrastructure", iconName: "Database", description: "Relational integrity and document-oriented flexibility" },
  { name: "Redis", category: "Cloud & Infrastructure", iconName: "HardDrive", description: "Ultra-fast in-memory caching and message pub/sub" },
  // AI & Vision
  { name: "PyTorch & TensorFlow", category: "AI & Computer Vision", iconName: "Binary", description: "Deep learning models, inference optimization, and training" },
  { name: "OpenCV", category: "AI & Computer Vision", iconName: "Eye", description: "Real-time computer vision and facial/object detection" },
  { name: "Natural Language Processing", category: "AI & Computer Vision", iconName: "Sparkles", description: "Intent recognition, text extraction, and conversational AI" },
];

export const verifiedCountries: Country[] = [
  { name: "India", code: "IN", region: "Asia Pacific", flagUrl: "https://flagcdn.com/w320/in.png", coords: { x: 70, y: 52 }, highlight: "Headquarters & Engineering Hub" },
  { name: "United States", code: "US", region: "Americas", flagUrl: "https://flagcdn.com/w320/us.png", coords: { x: 22, y: 38 }, highlight: "Enterprise Software & Cloud Engagements" },
  { name: "United Kingdom", code: "GB", region: "Europe", flagUrl: "https://flagcdn.com/w320/gb.png", coords: { x: 48, y: 28 }, highlight: "Fintech & Digital Transformation" },
  { name: "Dubai (UAE)", code: "AE", region: "Middle East & Africa", flagUrl: "https://flagcdn.com/w320/ae.png", coords: { x: 62, y: 46 }, highlight: "Logistics & On-Demand Platforms" },
  { name: "Saudi Arabia", code: "SA", region: "Middle East & Africa", flagUrl: "https://flagcdn.com/w320/sa.png", coords: { x: 59, y: 48 }, highlight: "Enterprise ERP & Portal Systems" },
  { name: "Singapore", code: "SG", region: "Asia Pacific", flagUrl: "https://flagcdn.com/w320/sg.png", coords: { x: 77, y: 60 }, highlight: "E-Commerce & High-Frequency Apps" },
  { name: "Australia", code: "AU", region: "Asia Pacific", flagUrl: "https://flagcdn.com/w320/au.png", coords: { x: 86, y: 76 }, highlight: "Web Portals & Mobile Systems" },
  { name: "Ireland", code: "IE", region: "Europe", flagUrl: "https://flagcdn.com/w320/ie.png", coords: { x: 46, y: 27 }, highlight: "Healthcare & Therapeutics Tech" },
  { name: "Spain", code: "ES", region: "Europe", flagUrl: "https://flagcdn.com/w320/es.png", coords: { x: 47, y: 36 }, highlight: "Digital Media & Web Applications" },
  { name: "South Africa", code: "ZA", region: "Middle East & Africa", flagUrl: "https://flagcdn.com/w320/za.png", coords: { x: 55, y: 78 }, highlight: "Enterprise ERP & Custom Web" },
  { name: "Oman", code: "OM", region: "Middle East & Africa", flagUrl: "https://flagcdn.com/w320/om.png", coords: { x: 64, y: 49 }, highlight: "Commercial Business Automation" },
  { name: "Mauritius", code: "MU", region: "Middle East & Africa", flagUrl: "https://flagcdn.com/w320/mu.png", coords: { x: 65, y: 72 }, highlight: "Offshore Advisory & Cloud" },
];

export const verifiedClients: Client[] = [
  { name: "Verified Property Intelligence", category: "PropTech & Analytics", logoText: "VPI", website: "https://mittal-web.vercel.app/" },
  { name: "MAT Commercial Vehicles", category: "Automotive & Engineering", logoText: "MAT Commercial" },
  { name: "Omsons India Handicraft", category: "Manufacturing & Export", logoText: "Omsons India", website: "https://omsons.co.in/" },
  { name: "Delhi Public International School", category: "Education Ecosystem", logoText: "DPIS", website: "https://www.dpissociety.com/" },
  { name: "Indian Racing Festival", category: "Sports & Entertainment", logoText: "Indian Racing Fest", website: "https://rpplind.com/indian-racing-festival/" },
  { name: "ePayLater", category: "Fintech & Payments", logoText: "ePayLater" },
  { name: "Ambit Finvest", category: "Financial Services", logoText: "Ambit Finvest" },
  { name: "Speech Ally", category: "Healthcare Diagnostics", logoText: "Speech Ally" },
  { name: "Piaah", category: "Lifestyle & Retail", logoText: "Piaah.com" },
  { name: "SSCL ERP", category: "Industrial Enterprise", logoText: "SSCL ERP" },
  { name: "SRS Manpower ERP", category: "Workforce Management", logoText: "SRS Manpower" },
  { name: "Seymour Management", category: "Corporate Consulting", logoText: "Seymour" },
  { name: "Apptrove", category: "Mobile Technology", logoText: "Apptrove" },
  { name: "Kalco Systems", category: "Infrastructure & Glass", logoText: "Kalco" },
  { name: "Cutec Delivery", category: "Logistics Automation", logoText: "Cutec" },
  { name: "Bhojras", category: "Retail & F&B", logoText: "Bhojras" },
  { name: "Yogyata", category: "Skill Development", logoText: "Yogyata" },
];

export const storyMilestones: TimelineMilestone[] = [
  {
    year: "2019",
    title: "Foundational Inception",
    description:
      "A year of foundational growth and dedicated learning. Cling was established with a focused core engineering ethos: delivering bespoke, zero-template technology solutions for ambitious founders.",
    metrics: "Inception & Core Stack",
  },
  {
    year: "2020",
    title: "Diversification & Service Expansion",
    description:
      "Solidifying our market presence during a critical digital inflection year. We broadened our engineering capabilities across enterprise ERPs, cloud platforms, and mobile apps, holding steadfast to exceptional quality.",
    metrics: "Expanded to 50+ Deployments",
  },
  {
    year: "2021",
    title: "National Recognition & Stack Innovation",
    description:
      "Gained significant industry momentum and peer recognition. Welcomed larger mid-market enterprises into our clientele while embracing modern reactive frameworks and microservices.",
    metrics: "Crossed 150+ Clients",
  },
  {
    year: "2022",
    title: "Matured Enterprise Delivery",
    description:
      "A landmark milestone year. Cling evolved into a mature, multi-office engineering organization taking on complex, mission-critical systems and multi-tenant architectures.",
    metrics: "250+ Successful Projects",
  },
  {
    year: "Today",
    title: "Global Reach & AI Intelligence",
    description:
      "Expanding our footprint across 12 countries with 350+ happy clients and 32M+ lines of code. Delivering cutting-edge Computer Vision, high-throughput web portals, and scalable cloud solutions.",
    metrics: "350+ Clients • 12 Countries",
  },
];

export const leadershipData: Leader[] = [
  {
    name: "Ramesh Singh",
    role: "Co-founder & Director",
    bio: "Pioneering Cling's technological roadmap and long-term strategic direction. Oversees architectural standards, enterprise partnerships, and operational governance across our engineering divisions.",
    image: "/images/ramesh-singh.png",
    linkedin: "https://www.linkedin.com/company/cling-multi-solutions-pvt-ltd/",
  },
  {
    name: "Ashi Gupta",
    role: "Managing Director",
    bio: "Spearheading company growth, client engagement frameworks, and strategic operations. Ensures every client partnership receives executive-level accountability and flawless delivery precision.",
    image: "/images/ashi-gupta.png",
    linkedin: "https://www.linkedin.com/company/cling-multi-solutions-pvt-ltd/",
  },
  {
    name: "Akshay Gupta",
    role: "CEO",
    bio: "Driving Cling's product vision, engineering excellence, and international business expansion. Focused on cultivating world-class development talent and scaling high-impact digital ventures.",
    image: "/images/akshay-gupta.jpg",
    linkedin: "https://www.linkedin.com/company/cling-multi-solutions-pvt-ltd/",
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Swatee Agrawal",
    role: "Founder",
    company: "Piaah.com",
    quote:
      "Cling Info Tech's professionalism and efficiency surpassed our expectations, understanding our needs exceptionally well. Rarely do we find such a reliable partner in today's market. Their dedication sets them apart.",
    image: "/images/swatee.jpeg",
    rating: 5,
  },
  {
    id: 2,
    name: "Elizabeth Jean Thomas",
    role: "Founder",
    company: "Speech Ally",
    quote:
      "Choosing Cling Info Tech was one of the best decisions we made. Their team's creativity and strategic approach transformed our vision into reality. I'm grateful for their outstanding support and guidance throughout the process.",
    image: "/images/elizabeth.jpeg",
    rating: 5,
  },
  {
    id: 3,
    name: "Aurko Bhattacharya",
    role: "Co-founder",
    company: "ePayLater",
    quote:
      "Working with Cling Info Tech was an absolute pleasure throughout. In today's fiercely competitive market, finding a partner who truly understands your technical scale and needs is invaluable, and Cling excels exceptionally in this regard.",
    image: "/images/aurko.jpeg",
    rating: 5,
  },
  {
    id: 4,
    name: "Ashish Kumar",
    role: "Director",
    company: "Vibgyorweb",
    quote:
      "Cling Info Tech exceeded all our expectations with their technical rigor and delivery speed. Their understanding of our requirements was exceptional, and they consistently went above and beyond to deliver outstanding results.",
    image: "/images/ashish.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Shams Tabrez",
    role: "Director",
    company: "Litmus Ink",
    quote:
      "Finding a digital engineering team that blends deep design sensitivity with robust back-end capabilities is rare. Cling's team communicated clearly and delivered ahead of our schedule.",
    image: "/images/shams.png",
    rating: 5,
  },
  {
    id: 6,
    name: "Gourav Singh",
    role: "CFO",
    company: "Webisdom",
    quote:
      "The engineering depth and commercial understanding that Cling brought to our project saved us months of iteration. They act like true co-founders rather than an outsourced agency.",
    image: "/images/gourav.jpeg",
    rating: 5,
  },
  {
    id: 7,
    name: "Praveen Shetty",
    role: "Managing Director",
    quote:
      "Working with Cling Info Tech was a game-changer for our business. Their expertise and dedication helped us achieve remarkable results. I highly recommend them to anyone looking for top-notch service.",
    image: "/images/logo.png",
    rating: 5,
  },
];

export const companyContact = {
  phone: "+91 8264469132",
  phoneRaw: "8264469132",
  email: "info@clinginfotech.com",
  whatsappUrl: "https://api.whatsapp.com/send?phone=8264469132&text=Hey%20I%20am%20trying%20to%20connect%20with%20you",
  socials: {
    instagram: "https://www.instagram.com/clinginfotechworks/",
    linkedin: "https://www.linkedin.com/company/cling-multi-solutions-pvt-ltd/",
  },
  offices: [
    {
      city: "Noida (Head Office)",
      address: "130, 131, 132, 2nd Floor, Wave Galleria, Wave City, NH-24, Noida, Uttar Pradesh - 201015",
      state: "Uttar Pradesh",
      type: "Global Headquarters",
    },
    {
      city: "Pune Office",
      address: "2nd Floor, Raj Square, Pashan - Sus Rd, near Abhinav Kala College, opp. Reliance Fresh, Sutarwadi, Pashan, Pune - 411021",
      state: "Maharashtra",
      type: "Western Regional Office",
    },
    {
      city: "Moradabad Office",
      address: "2/652, Avas Vikas, Buddhi Vihar, Moradabad, UP - 244001",
      state: "Uttar Pradesh",
      type: "Development Center",
    },
  ],
};
