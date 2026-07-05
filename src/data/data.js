
export const eduData = [
  {
    id: 1,
    year: '2021 - 2025',
    date: "Oct 2021 – Sep 2025",
    degree: "Bachelor of Computer Science and Engineering (CSE)",
    institute: "Green University of Bangladesh",
    location: "Purbachal, American City",
    description:
      "Built REST APIs with Express, Prisma, and PostgreSQL, focusing on authentication, validation, and error handling best practices.",
    tags: ["DSA", "Networking", "Operating System", "Database", "Machine Learning"],
  },
  {
    id: 2,
    year: '2018 - 2020',
    date: "July 2018 – April 2020",
    degree: "Higher Secondary Certificate (HSC)",
    institute: "Dania College, Dhaka",
    location: "Jatrabari, Dhaka",
    description:
      "Completed HSC in the Science group, developing a strong foundation in ICT, Mathematics, Physics and Chemistry.",
    tags: ["ICT", "Physics", "Chemistry", "Mathematics"],
  },
];

export const cerData = [
  {
    id: 1,
    year: '2025',
    date: "Nov 2024 – Feb 2025",
    degree: "Python with Django – 80 Hours",
    institute: "Green University of Bangladesh",
    location: "Green University",
    description:
      "Institute of Information Technology (IIT), Jahangirnagar University — EDGE Programme, Bangladesh Computer Council.",
    tags: ["Python", "Django"],
    credential:
      "https://drive.google.com/file/d/1xyeIBClkPlLl5cM1ldbbp9Fm0stp-Rot/view?usp=drive_link", // optional
  },
];

export const skillCategories = [
  {
    icon: '💻',
    title: 'Frontend',
    skills: [
      { name: 'Next.Js', level: 60 },
      { name: 'React.Js', level: 82 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML & CSS', level: 85 },
      // { name: 'CSS', level: 84 },

    ],
  },
  {
    icon: '⚙️',
    title: 'Backend',
    skills: [
      { name: 'TypeScript', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 82 },
      { name: 'PostgreSQL', level: 83 },
      { name: 'Prisma', level: 80 },
    ],
  },
];

export const projects = [

  {
    cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80",

    title: "PrismaPress Backend API",

    subtitle: "Production-Ready Blog Management REST API",

    category: "Backend API",

    tools: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "JWT",
      "Bcrypt",
      "Cookie Parser",
      "Vercel"
    ],

    des: "A production-ready blog backend featuring secure JWT authentication, role-based authorization, Prisma ORM, advanced filtering, pagination, ownership validation, and admin analytics.",

    description:
      "PrismaPress is a scalable and modular RESTful Blog Management API built with Express.js, TypeScript, Prisma ORM, and PostgreSQL. It provides complete authentication with JWT access and refresh tokens, role-based authorization, profile management, blog posts, comments, advanced search, filtering, pagination, sorting, ownership validation, and admin dashboard statistics. The project follows a clean modular architecture with reusable services, centralized error handling, Prisma transactions, and production-ready API design.",

    live: "https://prisma-press-api.vercel.app/",

    github: "https://github.com/MShahdat/Prisma-Press-Blog-Application-Backend",

    bgcolor: "bg-primaryColor/30",

    hbg: "group-hover:bg-primaryColor/40",

    status: "Completed",

    duration: "Learning Phase",

    platform: "Backend API",

    features: [
      "JWT Authentication & Refresh Token",
      "Role-Based Authorization (USER & ADMIN)",
      "Secure Password Hashing (bcrypt)",
      "HTTP-only Cookie Authentication",
      "User Registration & Profile Management",
      "Blog Post CRUD Operations",
      "Comment CRUD & Moderation",
      "Ownership Validation",
      "Advanced Search, Filtering & Sorting",
      "Pagination with Metadata",
      "Admin Dashboard Statistics",
      "Prisma Transactions",
      "View Counter",
      "Global Error Handling",
      "Modular REST API Architecture"
    ],

    stats: [
      {
        value: "17+",
        label: "API Endpoints"
      },
      {
        value: "4",
        label: "Database Models"
      },
      {
        value: "3",
        label: "User Roles"
      },
      {
        value: "100%",
        label: "RESTful API"
      }
    ],

    meta: [
      {
        label: "Duration",
        value: "Learning Phase"
      },
      {
        label: "Status",
        value: "Completed"
      },
      {
        label: "Platform",
        value: "Backend API"
      },
      {
        label: "Authentication",
        value: "JWT + Refresh Token"
      },
      {
        label: "Database",
        value: "PostgreSQL"
      },
      {
        label: "ORM",
        value: "Prisma ORM"
      },
      {
        label: "Architecture",
        value: "Modular REST API"
      }
    ],
    future: [
      "Email Verification & Password Reset",
      "Redis Caching",
      "Docker Support",
      "Real-time Notifications"
    ]
  },
  {
    cover: "https://images.pexels.com/photos/20139116/pexels-photo-20139116.jpeg",
    title: "Modern School Website",
    subtitle: "Dania College",
    category: "Full-Stack",
    tools: [
      "React",
      "Django",
      "Tailwind CSS",
      "REST API",
      "React Router",
      "Framer Motion",
      "Google Map"
    ],
    des: "A modern school website with backend API integration for dynamic notices, news, events, and academic updates.",
    description: "Dania College is a modern, fully responsive school website designed to provide a smooth, user-friendly, and informative digital experience for students, parents, teachers, and visitors. The website is integrated with backend APIs, allowing dynamic content updates such as notices, news, events, academic information, and so on ",
    live: 'https://dania-collage.netlify.app/',
    github: 'https://github.com/MShahdat/Modern-School-Website',

    bgcolor: "bg-primaryColor/30",
    hbg: "group-hover:bg-primaryColor/40",

    status: "Completed",
    duration: "Learning Phase",
    platform: "Web Application",

    features: [
      "Modern & Responsive Design",
      "Infinite Notice Bar",
      "Dynamic Notices, News & Events",
      "Dark, Light & System Themes",
      "Multi-level Navigation",
      "Google Map Integration",
      "Smooth Animations",
      "Fully Responsive for All Devices"
    ],

    stats: [
      {
        value: "50+",
        label: "Pages"
      },
      {
        value: "10+",
        label: "Features"
      },
      {
        value: "3",
        label: "Themes"
      },
      {
        value: "100%",
        label: "Responsive"
      }
    ],

    meta: [
      {
        label: "Duration",
        value: 'Learning Phase'
      },
      {
        label: "Status",
        value: 'Completed'
      },
      {
        label: "Platform",
        value: 'web'
      },
    ],
    future: [
      "Student Portal & Dashboard",
      "Online Admission System",
      "Result & Fee Management",
      "Multi-language Support",
    ]
  },
  {
    cover: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1600&q=80",
    title: "DevPulse Issue Tracker API",
    subtitle: "RESTful Backend API for Issue Tracking & Team Collaboration",
    category: "Backend API",

    tools: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Raw SQL",
      "JWT",
      "Bcrypt",
      "NeonDB"
    ],

    des: "A role based secure backend system for managing software issues, role-based access with JWT authentication",
    description: "DevPulse Issue Tracker API provides a structured backend for managing software issues and feature requests within a development team. It supports two user roles — contributor and maintainer — each with clearly defined permissions. Contributors can create and manage their own issues, while maintainers have full administrative control over all issues and system metrics. All protected routes are secured using JSON Web Tokens (JWT).",

    live: "https://issue-tracker-api-delta.vercel.app/",
    github: "https://github.com/MShahdat/B7A2",

    bgcolor: "bg-primaryColor/30",
    hbg: "group-hover:bg-primaryColor/40",

    status: "Completed",
    duration: "Learning Phase",
    platform: "Backend API",

    features: [
      "JWT Authentication",
      "Role-based Authorization",
      "Issue CRUD Operations",
      "Contributor & Maintainer Roles",
      "Filtering & Sorting",
      "Secure Password Hashing",
      "Protected Routes",
      "RESTful API Architecture",
      "PostgreSQL Database Integration",
      "Environment Variable Configuration"
    ],

    stats: [
      {
        value: "7+",
        label: "API Endpoints"
      },
      {
        value: "2",
        label: "User Roles"
      },
      {
        value: "2",
        label: "Database Tables"
      },
      {
        value: "100%",
        label: "RESTful"
      }
    ],

    meta: [
      {
        label: "Duration",
        value: "Learning Phase"
      },
      {
        label: "Status",
        value: "Completed"
      },
      {
        label: "Platform",
        value: "Backend API"
      },
      {
        label: "Authentication",
        value: "JWT"
      },
      {
        label: "Database",
        value: "PostgreSQL"
      },
      {
        label: "Architecture",
        value: "REST API"
      }
    ],
    future: [
      "Email Verification & Password Reset",
      "File Attachment Support",
      "Advanced Search & Pagination",
    ]
  },
  {
    cover: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80",
    title: "Veltrio Estate",
    subtitle: "Modern Real Estate Web Application",
    category: "React",

    tools: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "React Router",
      "Framer Motion",
      "React Pagination",
      "React Icons"
    ],

    des: "A real estate platform built with React, offering property listings, advanced search, and a seamless user experience",
    description: "Veltrio is a modern, scalable, and fully responsive real estate web application built with React. The platform provides an intuitive browsing experience for property listings, advanced filtering options, agent interaction, and content-driven pages such as blogs and services. It is designed with performance, accessibility, and clean UI architecture in mind.",

    live: "https://veltrio-estate.vercel.app/",
    github: "https://github.com/MShahdat/Veltrio-estate",

    status: "Completed",
    duration: "Learning Phase",
    platform: "Web Application",

    features: [
      "Modern & Responsive Design",
      "Light, Dark & System Themes",
      "Property Listings & Details",
      "Advanced Filtering & Sorting",
      "Agent Profiles",
      "Contact Agent Section",
      "Blog Listing & Details",
      "Google Map Integration",
    ],

    stats: [
      {
        value: "15+",
        label: "Pages"
      },
      {
        value: "12+",
        label: "Features"
      },
      {
        value: "3",
        label: "Themes"
      },
      {
        value: "100%",
        label: "Responsive"
      }
    ],

    meta: [
      {
        label: "Duration",
        value: "Learning Phase"
      },
      {
        label: "Status",
        value: "Completed"
      },
      {
        label: "Platform",
        value: "Web Application"
      }
    ],
    future: [
      "Backend Integrate",
      "Real-time Chat with Agents",
      "AI-based Property Recommendations",
    ]
  },
  {
    cover: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80",
    title: "Teste-IO Restaurant",
    subtitle: "Modern Restaurant Web Application",
    category: "React",

    tools: [
      "React",
      "Tailwind CSS",
      "React Router",
      "Firebase Authentication",
      "EmailJS",
      "React Slick",
      "Framer Motion",
      "React Toastify",
      "Google Maps",
      "LocalStorage"
    ],

    des: "A restaurant web app featuring dynamic menus, online table reservations, categorized food manu, and user authentication ",
    description: 'Teste-IO Restaurant is a fully responsive, modern restaurant web application built with React and Tailwind CSS. The project focuses on user authentication, table reservation, dynamic menus, smooth animations, and an engaging user experience across all devices.',

    live: "https://teste-io-restaurant.vercel.app/",
    github: "https://github.com/MShahdat/Teste.io_Restaurant",

    bgcolor: "bg-primaryColor/30",
    hbg: "group-hover:bg-primaryColor/40",

    status: "Completed",
    duration: "Learning Phase",
    platform: "Web Application",

    features: [
      "Secure User Authentication",
      "Email, Google & Facebook Login",
      "User Profile & Reservation History",
      "Categorized Restaurant Menu",
      "Master Chef Showcase",
      "Blog Listing & Details",
      "Google Map Integration",
      "Lightweight Smooth Animations",
      "Fully Responsive Design"
    ],

    stats: [
      {
        value: "10+",
        label: "Pages"
      },
      {
        value: "13+",
        label: "Features"
      },
      {
        value: "6",
        label: "Menu Categories"
      },
      {
        value: "100%",
        label: "Responsive"
      }
    ],

    meta: [
      {
        label: "Duration",
        value: "Learning Phase"
      },
      {
        label: "Status",
        value: "Completed"
      },
      {
        label: "Platform",
        value: "Web Application"
      }
    ],
    futureImprovement: [
      "Backend Interation",
      "Online Payment Integration",
      "Admin Dashboard & CMS",
      "Performance & SEO Optimization",
    ]
  },
  {
    cover: "https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg",
    title: "Kider School Website",
    subtitle: "Modern Educational Web Application",
    category: "React",

    tools: [
      "React",
      "Tailwind CSS",
      "React Router",
      "React Slick",
      "Framer Motion",
      "EmailJS",
      "React Icons",
      "React Toastify"
    ],

    des: "A child school React application designed for kids schools, featuring a modern UI and seamless user experience",
    description: "A fully responsive educational website for a kids school featuring modern UI, admission appointments, class information, teacher profiles, events, blogs, testimonials, and interactive user experience across all devices.",


    live: "https://kider-kids-school-website.vercel.app/",
    github: "https://github.com/MShahdat/Kidder-Kids-School-Website/",

    bgcolor: "bg-primaryColor/30",
    hbg: "group-hover:bg-primaryColor/40",

    status: "Completed",
    duration: "Learning Phase",
    platform: "Web Application",

    features: [
      "Modern & Responsive Design",
      "Dark & Light Theme",
      "React Slick Banner Slider",
      "Testimonials Section",
      "Events & Blogs",
      "Google Map Integration",
      "EmailJS Form Submission",
      "Smooth Framer Motion Animations",
      "404 Not Found Page"
    ],

    stats: [
      {
        value: "10+",
        label: "Pages"
      },
      {
        value: "14+",
        label: "Features"
      },
      {
        value: "2",
        label: "Themes"
      },
      {
        value: "100%",
        label: "Responsive"
      }
    ],

    meta: [
      {
        label: "Duration",
        value: "Learning Phase"
      },
      {
        label: "Status",
        value: "Completed"
      },
      {
        label: "Platform",
        value: "Web Application"
      }
    ],
    future: [
      "Backend Integrate",
      "Online Fee Payment",
      "Admin Dashboard & CMS",
    ]
  },
];

