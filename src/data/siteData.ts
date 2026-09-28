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
  sublabel?: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  image?: string | null;
  fallbackGradient: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
  deliverables: string[];
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
  category: "Web & Frontend" | "Mobile" | "Backend & Data" | "AI & ML" | "Enterprise & Creative";
  iconName: string;
  description: string;
}

export interface Country {
  name: string;
  code: string;
  region: string;
  flagUrl: string;
  coords: { x: number; y: number };
}

export interface Client {
  name: string;
  imageURL: string;
  websiteLink?: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export interface Leader {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role?: string;
  company?: string;
  quote: string;
  image?: string;
}

export const navigationData: NavItem[] = [
  {
    name: "About",
    href: "#story",
    children: [
      { name: "Our Story", href: "#story", desc: "Our journey, vision, and mission" },
      { name: "Leadership", href: "#leadership", desc: "Meet our leadership team" },
      { name: "Global Presence", href: "#global", desc: "Our presence across international markets" },
    ],
  },
  {
    name: "Services",
    href: "#services",
    children: [
      { name: "Web Development", href: "#services", desc: "Custom web design and ground-up development" },
      { name: "Mobile App Development", href: "#services", desc: "Android and iOS mobile applications" },
      { name: "AI & ML", href: "#services", desc: "Intelligent systems and NLP solutions" },
      { name: "ERPs", href: "#services", desc: "Integrated back and front office applications" },
    ],
  },
  {
    name: "Work",
    href: "#work",
  },
  {
    name: "Why Cling",
    href: "#why-cling",
  },
  {
    name: "Clients",
    href: "#clients",
  },
];

export const statisticsData: Statistic[] = [
  {
    value: 32387122,
    suffix: "+",
    label: "Lines of Code",
    sublabel: "Number of lines of code",
  },
  {
    value: 350,
    suffix: "+",
    label: "Happy Clients",
    sublabel: "Clients served globally",
  },
  {
    value: 390,
    suffix: "+",
    label: "Projects Completed",
    sublabel: "Projects delivered across domains",
  },
  {
    value: 1500,
    suffix: "+",
    label: "Coffee With Clients",
    sublabel: "Client interactions & consultations",
  },
];

export const projectsData: Project[] = [
  {
    id: "task-flow",
    name: "Task Flow",
    category: "Productivity & Management",
    tagline: "Task management platform",
    description:
      "Task management platform featured in Cling's custom web application portfolio.",
    tags: ["Web Application", "Task Management"],
    image: "/images/project-taskflow.png",
    fallbackGradient: "from-neutral-900 via-neutral-950 to-red-950/40",
  },
  {
    id: "rusho",
    name: "Rusho",
    category: "On-Demand Services",
    tagline: "On-demand home services platform",
    description:
      "On-demand home services platform serving Wave City and surrounding areas.",
    tags: ["On-Demand Services", "Mobile Application"],
    image: "/images/project-rusho.png",
    fallbackGradient: "from-neutral-900 via-neutral-950 to-neutral-900",
  },
  {
    id: "ai-surveillance",
    name: "AI Surveillance",
    category: "Artificial Intelligence",
    tagline: "Video surveillance activity detection",
    description:
      "AI surveillance model designed to identify suspicious activity in video.",
    tags: ["AI / ML", "Surveillance"],
    image: "/images/thumb-ai.png",
    fallbackGradient: "from-neutral-900 via-neutral-950 to-red-950/50",
  },
  {
    id: "omson-erp",
    name: "Omson ERP",
    category: "Enterprise ERP",
    tagline: "Custom ERP software",
    description:
      "Custom ERP software developed for Omsons India.",
    tags: ["ERP", "Custom Software"],
    image: "/images/project-omson.png",
    fallbackGradient: "from-neutral-900 via-neutral-950 to-neutral-900",
  },
  {
    id: "speech-ally",
    name: "Speech Ally",
    category: "Healthcare & Therapeutics",
    tagline: "Speech-focused application",
    description:
      "Speech-focused mobile and web application featured in Cling's portfolio.",
    tags: ["Mobile App", "Web Portal"],
    image: "/images/project-speechally.png",
    fallbackGradient: "from-neutral-900 via-neutral-950 to-red-950/30",
  },
  {
    id: "matrix-solutions",
    name: "Matrix",
    category: "Web & Management",
    tagline: "Custom web application",
    description:
      "Custom web application featured in Cling's portfolio.",
    tags: ["Custom Web Application"],
    image: "/images/project-matrix.png",
    fallbackGradient: "from-neutral-900 via-neutral-950 to-indigo-950/30",
  },
];

export const servicesData: Service[] = [
  {
    id: "app-dev",
    title: "App Development",
    shortDesc: "Custom mobile application development.",
    description:
      "Need custom app development services? We can help you to take advantage of the rapidly growing segment of mobile application development.",
    iconName: "Smartphone",
    deliverables: [
      "Android & iOS App Development",
      "Custom User Interface & Experience",
      "Mobile Architecture & Integration",
      "App Deployment & Maintenance",
    ],
  },
  {
    id: "web-design",
    title: "Web Design & Custom Development",
    shortDesc: "Ground-up design layouts, never pre-designed templates.",
    description:
      "Don't let your website be just another URL on the web! We never use a pre-designed template for your website. All design layouts are developed from ground up, meeting the exacting standards you demand.",
    iconName: "Globe",
    deliverables: [
      "Custom Web Portal Development",
      "Ground-Up Responsive Layouts",
      "Frontend & Backend Development",
      "Domain & Application Hosting Support",
    ],
  },
  {
    id: "erps",
    title: "ERPs",
    shortDesc: "Integrated back and front office applications.",
    description:
      "We help you to manage your business activities by integrating your back and front office applications.",
    iconName: "Database",
    deliverables: [
      "Business Activity Management",
      "Front Office & Back Office Integration",
      "Operations & Workflow Automation",
      "Data Synchronization & Reporting",
    ],
  },
  {
    id: "ai-ml",
    title: "AI / ML",
    shortDesc: "Intelligent systems that adapt, learn, and evolve.",
    description:
      "We craft intelligent systems that adapt, learn, and evolve. Harnessing the power of Natural Language Processing (NLP), we decode language patterns for deeper understanding and actionable intelligence. Experience the future of innovation with our AI/ML solutions.",
    iconName: "Cpu",
    deliverables: [
      "Natural Language Processing (NLP)",
      "Surveillance & Video Activity Models",
      "Adaptive Learning Systems",
      "Custom AI Integration",
    ],
  },
  {
    id: "3d-animation",
    title: "3D Animations",
    shortDesc: "Stunning visuals bringing imagination to life.",
    description:
      "Our 3D animation services bring imagination to life. From conceptualization to execution, we craft stunning visuals that captivate audiences. Our offerings encompass character animation, product visualization, architectural rendering, and beyond.",
    iconName: "Film",
    deliverables: [
      "Character Animation",
      "Product Visualization",
      "Architectural Rendering",
      "Brand & Logo 3D Visuals",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & SEO",
    shortDesc: "Online promotion, social media marketing, and SEO.",
    description:
      "Nowadays digital marketing is one of the popular ways to boost or promote brands & products through the internet and other digital channels. Social media marketing connects people worldwide, while SEO helps you reach your targeted customers.",
    iconName: "TrendingUp",
    deliverables: [
      "Search Engine Optimization (SEO)",
      "Google Ads Campaign Management",
      "Social Media Marketing",
      "Brand Promotion Channels",
    ],
  },
];

export const whyClingData: ValueProp[] = [
  {
    id: "end-to-end",
    title: "End-to-End IT Solutions",
    subtitle: "Comprehensive service coverage",
    description:
      "We provide end-to-end IT solutions covering web development, mobile applications, digital marketing, ERPs, and custom software for all your business needs.",
    iconName: "Layers",
  },
  {
    id: "ground-up",
    title: "Ground-Up Development",
    subtitle: "No pre-designed templates",
    description:
      "We never use pre-designed templates for your website. Every design layout and software module is developed from the ground up to match your exacting standards.",
    iconName: "Target",
  },
  {
    id: "cutting-edge",
    title: "Cutting-Edge Technologies",
    subtitle: "Continuous innovation",
    description:
      "We recognize the significance of staying at the forefront in today's swiftly changing digital environment, allocating resources to embrace emerging technologies.",
    iconName: "ShieldCheck",
  },
  {
    id: "partnership",
    title: "Long-Term Partnership",
    subtitle: "A trustworthy ally",
    description:
      "We take pride in our agility to respond to shifting market trends and evolving customer needs, establishing ourselves as a trustworthy ally for businesses.",
    iconName: "Handshake",
  },
];

export const techStackData: TechItem[] = [
  // Web & Frontend
  {
    name: "React",
    category: "Web & Frontend",
    iconName: "Code2",
    description: "JavaScript library for building component-based user interfaces.",
  },
  {
    name: "JavaScript",
    category: "Web & Frontend",
    iconName: "FileCode",
    description: "Core programming language used across Cling's web development training and solutions.",
  },
  {
    name: "HTML5 & CSS3",
    category: "Web & Frontend",
    iconName: "Terminal",
    description: "Core web standards for structure, styling, and responsive layouts.",
  },
  {
    name: "Bootstrap",
    category: "Web & Frontend",
    iconName: "Palette",
    description: "Frontend framework referenced in Cling's web development curriculum.",
  },

  // Mobile
  {
    name: "Mobile App Development",
    category: "Mobile",
    iconName: "Smartphone",
    description: "Custom mobile application development services.",
  },

  // Backend & Data
  {
    name: "Node.js",
    category: "Backend & Data",
    iconName: "Server",
    description: "Server-side JavaScript runtime used in Cling's backend development curriculum.",
  },
  {
    name: "MongoDB",
    category: "Backend & Data",
    iconName: "Database",
    description: "NoSQL database technology referenced in Cling's web development curriculum.",
  },
  {
    name: "Backend & APIs",
    category: "Backend & Data",
    iconName: "Zap",
    description: "Backend servers and API development.",
  },

  // AI & ML
  {
    name: "AI / ML",
    category: "AI & ML",
    iconName: "Sparkles",
    description: "Artificial intelligence and machine learning solutions.",
  },
  {
    name: "Natural Language Processing (NLP)",
    category: "AI & ML",
    iconName: "FileCode",
    description: "AI capability used to decode language patterns for deeper understanding.",
  },
  {
    name: "AI Surveillance",
    category: "AI & ML",
    iconName: "Eye",
    description: "AI model demonstrating detection of suspicious activity in video.",
  },

  // Enterprise & Creative
  {
    name: "ERP Solutions",
    category: "Enterprise & Creative",
    iconName: "Layers3",
    description: "Enterprise resource planning solutions integrating business operations.",
  },
  {
    name: "3D Animation",
    category: "Enterprise & Creative",
    iconName: "Box",
    description: "3D animation services including product visualization and architectural rendering.",
  },
];

export const verifiedCountries: Country[] = [
  { name: "India", code: "IN", region: "Asia Pacific", flagUrl: "https://flagcdn.com/w320/in.png", coords: { x: 70, y: 52 } },
  { name: "Saudi Arabia", code: "SA", region: "Middle East & Africa", flagUrl: "https://flagcdn.com/w320/sa.png", coords: { x: 59, y: 48 } },
  { name: "South Africa", code: "ZA", region: "Middle East & Africa", flagUrl: "https://flagcdn.com/w320/za.png", coords: { x: 55, y: 78 } },
  { name: "United States", code: "US", region: "Americas", flagUrl: "https://flagcdn.com/w320/us.png", coords: { x: 22, y: 38 } },
  { name: "Oman", code: "OM", region: "Middle East & Africa", flagUrl: "https://flagcdn.com/w320/om.png", coords: { x: 64, y: 49 } },
  { name: "Dubai (UAE)", code: "AE", region: "Middle East & Africa", flagUrl: "https://flagcdn.com/w320/ae.png", coords: { x: 62, y: 46 } },
  { name: "Singapore", code: "SG", region: "Asia Pacific", flagUrl: "https://flagcdn.com/w320/sg.png", coords: { x: 77, y: 60 } },
  { name: "Ireland", code: "IE", region: "Europe", flagUrl: "https://flagcdn.com/w320/ie.png", coords: { x: 46, y: 27 } },
  { name: "Mauritius", code: "MU", region: "Middle East & Africa", flagUrl: "https://flagcdn.com/w320/mu.png", coords: { x: 65, y: 72 } },
  { name: "Australia", code: "AU", region: "Asia Pacific", flagUrl: "https://flagcdn.com/w320/au.png", coords: { x: 86, y: 76 } },
  { name: "United Kingdom", code: "GB", region: "Europe", flagUrl: "https://flagcdn.com/w320/gb.png", coords: { x: 48, y: 28 } },
  { name: "Spain", code: "ES", region: "Europe", flagUrl: "https://flagcdn.com/w320/es.png", coords: { x: 47, y: 36 } },
];

export const verifiedClients: Client[] = [
  {
    name: "Verified Property Intelligence",
    imageURL: "https://cling-portfolio-video.s3.ap-south-1.amazonaws.com/logos/1780307320868-Screenshot_2026-06-01_at_3.18.00_PM.png",
    websiteLink: "https://mittal-web.vercel.app/",
  },
  {
    name: "Omsons India Handicraft",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/1761644572462-logo.png",
    websiteLink: "https://omsons.co.in/",
  },
  {
    name: "Seymour Management",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/1761644602861-logo.png",
  },
  {
    name: "Kirana Quick Technologies",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/1761307901537-logo.png",
    websiteLink: "https://www.orlonow.in/",
  },
  {
    name: "Solidarity Advisors",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/1761307659597-logo.png",
    websiteLink: "https://www.solidarity.in/",
  },
  {
    name: "CP67",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/1761307195398-logo.png",
    websiteLink: "https://cp67.in/",
  },
  {
    name: "Capital Curve",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/1761307073516-logo.png",
    websiteLink: "https://www.capitalcurv.com/",
  },
  {
    name: "FDX Group",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/1761306951257-logo.jpeg",
    websiteLink: "https://www.fdxnetwork.com/",
  },
  {
    name: "Kalco",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/1761306794323-logo.png",
    websiteLink: "http://kalcoindia.com/",
  },
  {
    name: "Bhojras",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/bhojras-1760612419392.png",
  },
  {
    name: "Wings Rehabilitation Center",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/wings-rehabilitation-1760612418801.png",
    websiteLink: "https://wingsrehabilitationcenter.com",
  },
  {
    name: "NK Architects",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/nk-architects-1760612417999.jpeg",
    websiteLink: "https://nkarchitects.co.in",
  },
  {
    name: "Vestiary",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/vestiary-1760612417637.jpeg",
    websiteLink: "https://vestiary.in",
  },
  {
    name: "Skuad",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/skuad-1760612417294.jpeg",
    websiteLink: "https://www.skuad.io",
  },
  {
    name: "Piaah",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/piaah-1760612416885.jpeg",
    websiteLink: "https://piaah.com",
  },
  {
    name: "Forescribe",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/forescribe-1760612416165.jpeg",
    websiteLink: "https://www.forescribe.ai",
  },
  {
    name: "Apptrove",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/apptrove-1760612415831.jpeg",
    websiteLink: "https://apptrove.com",
  },
  {
    name: "BeatRoute",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/beatroute-1760612415117.png",
    websiteLink: "https://beatroute.io/",
  },
  {
    name: "Phonologix Therapy",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/phonologix-therapy-1760612414290.png",
    websiteLink: "https://phonologixtherapy.com/",
  },
  {
    name: "Kite Digiceutix",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/kite-digiceutix-1760612413861.png",
    websiteLink: "https://kitedigiceutix.com/",
  },
  {
    name: "E-Pay Later",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/epay-later-1760612413032.png",
    websiteLink: "https://www.epaylater.in",
  },
  {
    name: "Matrix Solutions",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/matrix-solutions-1760612411095.jpeg",
  },
  {
    name: "Parashar",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/parashar-1760612410064.png",
    websiteLink: "https://www.prcpl.com/",
  },
  {
    name: "Papertio",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/papertio-1760612409208.png",
  },
  {
    name: "MatchMe Global",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/matchme-1760612408758.jpeg",
    websiteLink: "https://www.matchmeglobal.com",
  },
  {
    name: "Mint HR",
    imageURL: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/minthr-1760612408304.png",
  },
];

export const storyText = {
  overview:
    "We are a company with multifarious IT services like ERPS, Websites, App Development, Support, Innovations, Projects, Ideas. Innovations At Its best, is what we believe in. We understand not only customers well, but also the industry at large. We majorly focus to enhance skills and growth of individual. Our diverse team of professionals shares a passion for online education. We provide consistent and captivating learning experience across desktops, tablets and smartphone.",
  vision:
    "At Cling, our goal is to deliver premier web design, development, and marketing solutions to our clients, fostering their profitable online growth while expanding our roster of satisfied clients. We are dedicated to enhancing various facets of our business, such as the quality of our work, customer service excellence, technology integration, dynamic innovation, and steadfast commitment, among other key aspects.",
  mission:
    "We recognize the significance of staying at the forefront in today's swiftly changing digital environment. That's why we consistently allocate resources to enhance our personnel, refine our processes, and embrace cutting-edge technologies. Our commitment is to deliver top-notch services to our clients. We take pride in our agility to respond to shifting market trends and evolving customer needs, establishing ourselves as a trustworthy ally for businesses aiming to outpace the competition.",
};

export const storyMilestones: TimelineMilestone[] = [
  {
    year: "2019",
    title: "Foundational Growth & Learning",
    description:
      "A year of foundational growth and learning, we focused on building a strong foundation and establishing our identity.",
  },
  {
    year: "2020",
    title: "Solidifying Our Presence",
    description:
      "Solidifying our presence, we diversified our services and remained committed to quality and customer satisfaction.",
  },
  {
    year: "2021",
    title: "Momentum & Recognition",
    description:
      "We gained momentum and recognition, expanding our client base and embracing new technologies and methodologies.",
  },
  {
    year: "2022",
    title: "Matured Organization",
    description:
      "A milestone year, we grew into a matured organization, taking on ambitious projects and delivering greater value.",
  },
];

export const leadershipData: Leader[] = [
  {
    name: "Ramesh Singh",
    role: "Co-founder & Director",
    image: "/images/ramesh-singh.png",
    linkedin: "https://www.linkedin.com/company/cling-multi-solutions-pvt-ltd/",
  },
  {
    name: "Ashi Gupta",
    role: "Managing Director",
    image: "/images/ashi-gupta.png",
    linkedin: "https://www.linkedin.com/company/cling-multi-solutions-pvt-ltd/",
  },
  {
    name: "Akshay Gupta",
    role: "CEO",
    image: "/images/akshay-gupta.jpg",
    linkedin: "https://www.linkedin.com/company/cling-multi-solutions-pvt-ltd/",
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Praveen Shetty",
    quote:
      "Working with Cling Info Tech was a game-changer for our business. Their expertise and dedication helped us achieve remarkable results. I highly recommend them to anyone looking for top-notch service",
  },
  {
    id: 2,
    name: "Swatee Agrawal",
    role: "Founder",
    company: "Piaah.com",
    quote:
      "Cling Info Tech' professionalism and efficiency surpassed our expectations, understanding our needs exceptionally well. Rarely do we find such a reliable partner in today's market. Their dedication sets them apart.",
    image: "/images/swatee.jpeg",
  },
  {
    id: 3,
    name: "Elizabeth Jean Thomas",
    role: "Founder",
    company: "Speech Ally",
    quote:
      "Choosing Cling Info Tech was one of the best decisions we made. Their team's creativity and strategic approach transformed our vision into reality. I'm grateful for their outstanding support and guidance throughout the process.",
    image: "/images/elizabeth.jpeg",
  },
  {
    id: 4,
    name: "Ashish Kumar",
    role: "Director",
    company: "Vibgyorweb",
    quote:
      "Cling Info Tech exceeded all our expectations with their professionalism and efficiency. Their understanding of our requirements was exceptional, and they consistently went above and beyond to deliver outstanding results.",
    image: "/images/ashish.jpg",
  },
  {
    id: 5,
    name: "Shams Tabrez",
    role: "Director",
    company: "Litmus Ink",
    quote:
      "Working with Cling Info Tech was an absolute pleasure throughout. In today's fiercely competitive market, finding a partner who truly understands your needs is invaluable, and Cling Info Tech excels exceptionally in this regard.",
    image: "/images/shams.png",
  },
  {
    id: 6,
    name: "Arif",
    quote:
      "Working with Cling Info Tech was a game-changer for our business. Their expertise and dedication helped us achieve remarkable results. I highly recommend them to anyone looking for top-notch service",
  },
  {
    id: 7,
    name: "Aurko Bhattacharya",
    role: "Co-founder",
    company: "ePayLater",
    quote:
      "Working with Cling Info Tech was an absolute pleasure throughout. In today's fiercely competitive market, finding a partner who truly understands your needs is invaluable, and Cling Info Tech excels exceptionally in this regard.",
    image: "/images/aurko.jpeg",
  },
  {
    id: 8,
    name: "Ankit Solanki",
    quote:
      "Choosing Cling Info Tech was one of the best decisions we made. Their team's creativity and strategic approach transformed our vision into reality. I'm grateful for their outstanding support and guidance throughout the process.",
  },
  {
    id: 9,
    name: "Gourav Singh",
    role: "CFO",
    company: "Webisdom",
    quote:
      "Working with Cling Info Tech was an absolute pleasure throughout. In today's fiercely competitive market, finding a partner who truly understands your needs is invaluable, and Cling Info Tech excels exceptionally in this regard.",
    image: "/images/gourav.jpeg",
  },
  {
    id: 10,
    name: "Shubhanshu Srivastava",
    quote:
      "Cling Info Tech' professionalism and efficiency surpassed our expectations, understanding our needs exceptionally well. Rarely do we find such a reliable partner in today's market. Their dedication sets them apart.",
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
      city: "Head Office Noida",
      address: "130, 131, 132, 2nd Floor, Wave Galleria, Wave City, NH-24, Noida, Uttar Pradesh - 201015",
    },
    {
      city: "Pune Office Address",
      address: "2nd Floor, Raj Sqaure, Pashan - Sus Rd, near Abhinav kala college, opposite Reliance Fresh, Sutarwadi, Pashan, Pune, Maharashtra - 411021",
    },
    {
      city: "Moradabad Office Address",
      address: "2/652, Avas Vikas, Buddhi Vihar, Moradabad, UP - 244001",
    },
  ],
};
