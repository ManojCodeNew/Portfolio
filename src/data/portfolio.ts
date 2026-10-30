import type { PortfolioData } from '../types/portfolio';
import resumePdf from '../assets/Manoj_Resume_Bengaluru.pdf';
import astroAuraImg from '../assets/AA24_image.png';
import eaziQuoteImg from '../assets/EaziQuote_image.png';

const data: PortfolioData = {
  profile: {
    name: 'Manoj C',
    headline: 'Software Developer',
    tagline: 'React.js · React Native · TypeScript',
    status: 'OPEN TO SOFTWARE DEVELOPMENT OPPORTUNITIES',
    heroHeading: 'Building Digital Experiences That Solve Real Problems.',
    heroIntro: "I'm Manoj C, a Software Developer focused on building modern web applications and cross-platform mobile experiences.",
    heroDescription: "I work with React.js, React Native, TypeScript, and modern JavaScript technologies to develop responsive interfaces, integrate APIs, and build reliable software applications.",
    bio: "I'm a Software Developer with practical industry experience building responsive web applications and cross-platform mobile applications. I specialize in modern JavaScript and TypeScript ecosystems, focusing on developing clean, scalable architectures from initial Figma designs through production deployment.",
    location: 'Bengaluru, India',
    email: 'manojpoojary2004@gmail.com',
    phone: '+91 9482292440',
    linkedin: 'https://www.linkedin.com/in/manojc2004',
    github: 'https://github.com/ManojCodeNew',
    resumeUrl: resumePdf,
  },

  experiences: [
    {
      id: 'silversky',
      role: 'Software Engineer Intern',
      company: 'SilverSky Technology',
      location: 'Ahmedabad, India',
      workMode: 'Onsite',
      period: 'March 2026 – October 2026',
      bullets: [
        'Developed responsive, reusable web interfaces using React.js and TypeScript following scalable component architecture.',
        'Architected API-driven applications using Redux Toolkit, Redux Persist, TanStack Query, Axios, React Hook Form, and Zod.',
        'Built a cross-platform business management mobile application from scratch using React Native and TypeScript.',
        'Implemented secure authentication, onboarding, and nested navigation workflows.',
        'Engineered client, quotation, invoice, and payment transaction workflows.',
        'Integrated REST APIs with multi-field search, filtering, pagination, debouncing, and full CRUD operations.',
        'Converted Figma designs into pixel-accurate, high-performance responsive interfaces.',
      ],
      tech: ['React.js', 'React Native', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'Axios', 'React Hook Form', 'Zod'],
    },
    {
      id: 'enterpriseminds',
      role: 'System Programming Intern',
      company: 'Enterprise Minds India Private Limited',
      location: 'Karkala, India',
      workMode: 'Onsite',
      period: 'September 2025 – December 2025',
      bullets: [
        'Developed a C-based QR/vCard encoder.',
        'Built an assembly instruction emulator covering registers, memory operations, and control flow.',
        'Strengthened C programming fundamentals in memory execution flow, function design, and structured code organization.',
        'Practiced writing reliable, maintainable code following production-oriented systems programming practices.',
      ],
      tech: ['C', 'Systems Programming', 'Assembly Emulation', 'Registers & Memory Ops'],
    },
  ],

  projects: [
    {
      id: 'astroaura24',
      title: 'AstroAura24',
      subtitle: 'E-commerce & Live Consultation Platform',
      description: 'A live commercial e-commerce and live consultation booking platform engineered for seamless crystal merchandise purchases, online payment processing, and concurrency-safe consultation scheduling.',
      image: astroAuraImg,
      keyPoints: [
        'Implemented full e-commerce shopping workflows with Razorpay payment gateway integration for secure checkout.',
        'Engineered consultation booking with concurrency-safe slot handling to eliminate double-booking conflicts.',
        'Developed limited-stock product handling and an administrative dashboard for real-time inventory and metrics.',
        'Implemented reporting, order management, and continuous client-requested production improvements.',
      ],
      tech: ['Next.js', 'React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay'],
      liveUrl: 'https://astroaura24.com',
      category: 'Full Stack',
      featured: true,
      badge: 'Production Live Platform',
    },
    {
      id: 'biz-mobile',
      title: 'Business Management Mobile Application',
      subtitle: 'EaziQuote · Cross-Platform Mobile Application',
      description: 'A comprehensive cross-platform business management application for Android and iOS designed to manage clients, draft quotations, issue invoices, and track payments.',
      image: eaziQuoteImg,
      keyPoints: [
        'Implemented intuitive mobile application interface with secure authentication, onboarding, and nested navigation.',
        'Built end-to-end client management, quotations drafting, invoice generation, and payment tracking modules.',
        'Integrated REST APIs using Axios and TanStack Query with persistent offline-ready state via Redux Persist.',
        'Engineered responsive search, multi-factor filtering, pagination, and debounced API requests.',
        'Implemented pixel-perfect UI matching Figma specifications with validation using React Hook Form and Zod.',
      ],
      tech: ['React Native', 'TypeScript', 'Redux Toolkit', 'Redux Persist', 'TanStack Query', 'Axios', 'React Hook Form', 'Zod'],
      category: 'Mobile',
      featured: true,
      badge: 'Enterprise Mobile App',
    },
  ],

  skillCategories: [
    {
      id: 'frontend',
      categoryName: 'Frontend',
      skills: [
        { name: 'React.js' },
        { name: 'React Native' },
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'HTML5' },
        { name: 'CSS3' },
      ],
    },
    {
      id: 'state',
      categoryName: 'State Management',
      skills: [
        { name: 'Redux Toolkit' },
        { name: 'Redux Persist' },
        { name: 'TanStack Query' },
      ],
    },
    {
      id: 'forms',
      categoryName: 'API & Forms',
      skills: [
        { name: 'Axios' },
        { name: 'REST APIs' },
        { name: 'React Hook Form' },
        { name: 'Zod' },
      ],
    },
    {
      id: 'backend',
      categoryName: 'Backend & Database',
      skills: [
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'MongoDB' },
      ],
    },
    {
      id: 'tools',
      categoryName: 'Tools & Systems',
      skills: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'React Navigation' },
        { name: 'Performance Optimization' },
        { name: 'C' },
      ],
    },
  ],

  certifications: [
    {
      id: 'aws',
      title: 'AWS Academy Graduate – AWS Academy Cloud Foundations',
      issuer: 'Amazon Web Services (AWS)',
      status: 'Completed',
    },
    {
      id: 'nptel',
      title: 'NPTEL – Introduction to the Internet of Things',
      issuer: 'National Programme on Technology Enhanced Learning (NPTEL)',
      status: 'Completed',
    },
  ],

  education: [
    {
      id: 'mca',
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Mangalore Institute of Technology and Engineering',
      location: 'Moodabidri, India',
      period: 'November 2024 – August 2026',
      score: 'CGPA: 8.53',
    },
    {
      id: 'bca',
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Sri Mahaveera College',
      location: 'Moodabidri, India',
      period: 'November 2021 – July 2024',
      score: 'CGPA: 8.83',
    },
  ],
};

export default data;