
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
      { name: 'Next.Js', level: 80 },
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
      { name: 'Nest.js', level: 70 },
    ],
  },
];

export const projects = [
  {
    cover: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "Field Service Management System",
    subtitle: "Field Service Operations Backend API",
    category: "Backend API",

    tools: [
      "Node.js",
      "Express.js v5",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "Redis",
      "JWT",
      "Passport.js",
      "Zod",
      "bKash",
      "Cloudinary",
      "Nodemailer",
      "Google OAuth",
      "Facebook OAuth"
    ],

    des: "A production-grade REST API for managing end-to-end field service operations — from customer service requests through technician dispatch, work order execution, and bKash payments.",

    description:
      "Field Service Management System is a backend REST API built with Express v5 and TypeScript, backed by PostgreSQL via Prisma, with Redis caching for performance-sensitive reads. It supports five distinct roles — Super Admin, Admin, Manager, Technician, and Customer — each governed by scoped role-based access control. The API models the full service lifecycle: customers submit service requests, managers review and dispatch by matching technician skills against service categories and regions, and technicians execute and report on assigned work orders through to completion. Authentication combines JWT access/refresh tokens with email OTP verification and Google/Facebook OAuth via Passport.js. A dedicated manager onboarding flow (apply → email verify → admin approval) and two-step technician registration (account creation, then a separate profile-completion step for skills, region, and experience) mirror real-world onboarding UX. Other capabilities include bKash-integrated payments with role-specific history, Cloudinary-backed file attachments with soft delete, post-completion service reports, a customer feedback and rating system, and role-specific analytics dashboards for admins, managers, technicians, and customers.",

    live: "https://field-service-nine.vercel.app/",
    github: "https://github.com/MShahdat/Field-Service-Management-System-backend-",

    features: [
      "Five-Tier RBAC (Super Admin, Admin, Manager, Technician, Customer)",
      "JWT Access/Refresh Auth with Email OTP & Password Reset",
      "Google & Facebook OAuth Login via Passport.js",
      "Manager Onboarding: Apply → Verify → Admin Approval",
      "Two-Step Technician Signup with Profile-Completion Gating",
      "Skill & Region-Based Technician Dispatch Matching",
      "Full Service Lifecycle: Request → Review → Work Order → Completion",
      "bKash Payment Integration with Role-Scoped History",
      "Cloudinary File Attachments with Soft Delete",
      "Customer Feedback & Ratings System",
      "Role-Specific Analytics Dashboards"
    ],

    stats: [
      {
        value: "60+",
        label: "API Endpoints"
      },
      {
        value: "14",
        label: "Database Models"
      },
      {
        value: "5",
        label: "User Roles"
      },
      {
        value: "100%",
        label: "Type-Safe"
      }
    ],

    meta: [
      {
        label: "Duration",
        value: "Production Project"
      },
      {
        label: "Status",
        value: "In Progress"
      },
      {
        label: "Platform",
        value: "Backend REST API"
      },
      {
        label: "Authentication",
        value: "JWT (Access + Refresh) + OAuth"
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
        label: "Payments",
        value: "bKash"
      },
      {
        label: "Architecture",
        value: "Modular REST API"
      }
    ],

    future: [
      "Frontend Client (Customer/Technician/Manager/Admin Dashboards)",
    ]
  },
  {
    cover: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "PH Healthcare System",

    subtitle: "Healthcare Consultation Backend API",

    category: "Backend API",

    tools: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "Redis",
      "JWT",
      "Zod",
      "bKash",
      "Cloudinary",
      "Nodemailer",
      "Google OAuth",
      "PDFKit",
      "Cron Jobs"
    ],

    des: "A robust REST API powering a healthcare consultation platform — handling doctor verification, real-time appointment booking, bKash payments, and digital prescriptions.",

    description:
      "PH Healthcare System is a backend-only REST API built with Express and TypeScript, backed by PostgreSQL via Prisma, with Redis for caching and session handling. It powers four distinct roles — Patient, Doctor, Admin, and Super Admin — each governed by strict role-based access control. The API handles doctor onboarding end-to-end: application submission, document upload, email verification, and admin approval, before doctors can publish availability schedules. Patients book same-day appointments against those schedules and pay securely through bKash's tokenized checkout, with the API managing the full appointment lifecycle (Pending → Confirmed → Ongoing → Completed), automated refund logic on cancellations, PDF invoice generation, and digital prescription delivery via email. Other capabilities include Google OAuth login for patients, role-specific analytics endpoints, Cloudinary-backed file storage, and node-cron background jobs for cleanup tasks. JWT access/refresh tokens in httpOnly cookies and Zod-validated inputs round out a production-oriented, modular API architecture.",

    live: "https://ph-healthcare-system.vercel.app/",
    github: "https://github.com/MShahdat/PH-Healthcare-System-Backend",

    features: [
      "Multi-Role Authentication (Patient, Doctor, Admin, Super Admin)",
      "Doctor Onboarding with Admin Verification Workflow",
      "Real-Time Schedule & Slot Management",
      "Payment Integration via bKash (Bangladesh)",
      "Full Appointment Lifecycle Management",
      "Digital Prescription Generation (PDF + Email)",
      "Google OAuth Login for Patients",
      "Automated Email Notifications (OTP, Invoices, Prescriptions)",
      "Redis-Backed Caching & Session Management",
      "Cron-Based Cleanup for Unverified/Rejected Applications"
    ],

    stats: [
      {
        value: "40+",
        label: "API Endpoints"
      },
      {
        value: "6",
        label: "Database Models"
      },
      {
        value: "4",
        label: "User Roles"
      },
      {
        value: "100%",
        label: "Type-Safe"
      }
    ],

    meta: [
      {
        label: "Duration",
        value: "Personal Project"
      },
      {
        label: "Status",
        value: "In Progress"
      },
      {
        label: "Platform",
        value: "Backend REST API"
      },
      {
        label: "Authentication",
        value: "JWT (Access + Refresh)"
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
        label: "Payments",
        value: "bKash"
      },
      {
        label: "Architecture",
        value: "Modular REST API"
      }
    ],

    future: [
      "Frontend Client (Patient/Doctor/Admin Dashboards)",
      "Video Call Integration (WebRTC) instead of external meet links"
    ]
  },
  {
    cover: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80",

    title: "FixItNow",

    subtitle: "Full-Stack Home Services Marketplace",

    category: "Full-Stack Application",

    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "JWT",
      "Stripe",
      "Cloudinary",
      "Recharts",
      "Zod"
    ],

    des: "A full-stack marketplace connecting customers with verified home-service technicians, featuring role-based dashboards, Stripe payments, Cloudinary uploads, and a complete booking lifecycle.",

    description:
      "FixItNow is an end-to-end home services marketplace built with a Next.js (App Router) frontend and an Express/TypeScript REST API backend, backed by PostgreSQL via Prisma. It supports three distinct roles — Customer, Technician, and Admin — each with a purpose-built, protected dashboard. Customers can browse services and technicians, book appointments, pay securely through Stripe Checkout, track booking status in real time, and leave reviews. Technicians manage listings, availability, and incoming job requests through a structured lifecycle (Requested → Accepted → Paid → In Progress → Completed). Admins get platform-wide analytics, user management, and category controls. The system features JWT-based role-aware authentication, idempotent Stripe webhook handling, Cloudinary image uploads, and a consistent design system using CSS custom properties for full dark/light theme support — built to feel like a polished product rather than a template.",

    live: "https://assignment5-blush-ten.vercel.app/",

    github: "https://github.com/MShahdat/FixItNow-Frontend",
    githubBackend: "https://github.com/MShahdat/FixItNow-Backend",

    features: [
      "Role-Based Dashboards (Customer, Technician, Admin)",
      "Payment Integration Via (Stripe)",
      "Full Booking Lifecycle Management",
      "Cloudinary Image Uploads",
      "Admin Analytics Dashboard (Recharts)",
      "Advanced Service & Technician Filtering",
      "Review System Tied to Completed Bookings",
      "Technician Availability Scheduling",
      "Server Components & Server Actions",
      "Centralized Error Handling & Response Envelope",
      "Prisma-Backed Modular REST API"
    ],

    stats: [
      {
        value: "45+",
        label: "API Endpoints"
      },
      {
        value: "7",
        label: "Database Models"
      },
      {
        value: "3",
        label: "User Roles"
      },
      {
        value: "100%",
        label: "Type-Safe"
      }
    ],

    meta: [
      {
        label: "Duration",
        value: "Personal Project"
      },
      {
        label: "Status",
        value: "In Progress"
      },
      {
        label: "Platform",
        value: "Full-Stack Web App"
      },
      {
        label: "Authentication",
        value: "JWT (Access + Refresh)"
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
        label: "Payments",
        value: "Stripe Checkout"
      },
      {
        label: "Architecture",
        value: "Modular REST API + App Router Frontend"
      }
    ],

    future: [
      "Real-Time Notifications (Socket.io)",
      "Technician Geolocation & Map View",
    ]
  },
  // {
  //   cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80",

  //   title: "PrismaPress Backend API",

  //   subtitle: "Production-Ready Blog Management REST API",

  //   category: "Backend API",

  //   tools: [
  //     "Node.js",
  //     "Express.js",
  //     "TypeScript",
  //     "Prisma ORM",
  //     "PostgreSQL",
  //     "JWT",
  //     "Stripe",
  //     "Bcrypt",
  //     "Cookie Parser",
  //     "Vercel"
  //   ],

  //   des: "A production-ready blog backend featuring secure JWT authentication, role-based authorization, Prisma ORM, advanced filtering, pagination, ownership validation, and admin analytics.",

  //   description:
  //     "PrismaPress is a scalable and modular RESTful Blog Management API built with Express.js, TypeScript, Prisma ORM, and PostgreSQL. It provides complete authentication with JWT access and refresh tokens, role-based authorization, profile management, blog posts, comments, advanced search, filtering, pagination, sorting, ownership validation, and admin dashboard statistics. The project follows a clean modular architecture with reusable services, centralized error handling, Prisma transactions, and production-ready API design.",

  //   live: "https://prisma-press-api.vercel.app/",

  //   github: "https://github.com/MShahdat/Prisma-Press-Blog-Application-Backend",

  //   features: [
  //     "JWT Authentication & Refresh Token",
  //     "Role-Based Authorization (USER & ADMIN)",
  //     "Secure Password Hashing (bcrypt)",
  //     "Subscription Integration Via Stripe",
  //     "Blog Post & Comment CRUD Operations",
  //     "Ownership Validation",
  //     "Advanced Search, Filtering & Sorting",
  //     "Pagination with Metadata",
  //     "Admin Dashboard Statistics",
  //     "Prisma Transactions",
  //     "Global Error Handling",
  //     "Modular REST API Architecture"
  //   ],

  //   stats: [
  //     {
  //       value: "17+",
  //       label: "API Endpoints"
  //     },
  //     {
  //       value: "4",
  //       label: "Database Models"
  //     },
  //     {
  //       value: "3",
  //       label: "User Roles"
  //     },
  //     {
  //       value: "100%",
  //       label: "RESTful API"
  //     }
  //   ],

  //   meta: [
  //     {
  //       label: "Duration",
  //       value: "Learning Phase"
  //     },
  //     {
  //       label: "Status",
  //       value: "In Progress"
  //     },
  //     {
  //       label: "Platform",
  //       value: "Backend API"
  //     },
  //     {
  //       label: "Authentication",
  //       value: "JWT + Refresh Token"
  //     },
  //     {
  //       label: "Database",
  //       value: "PostgreSQL"
  //     },
  //     {
  //       label: "ORM",
  //       value: "Prisma ORM"
  //     },
  //     {
  //       label: "Architecture",
  //       value: "Modular REST API"
  //     }
  //   ],
  //   future: [
  //     "Docker Support",
  //     "Real-time Notifications"
  //   ]
  // },
  {
    cover: "https://images.pexels.com/photos/20139116/pexels-photo-20139116.jpeg",
    title: "Modern School Website",
    subtitle: "Dania College",
    category: "Full-Stack Application",
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
  // {
  //   cover: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1600&q=80",
  //   title: "DevPulse Issue Tracker API",
  //   subtitle: "RESTful Backend API for Issue Tracking & Team Collaboration",
  //   category: "Backend API",

  //   tools: [
  //     "Node.js",
  //     "Express.js",
  //     "TypeScript",
  //     "PostgreSQL",
  //     "Raw SQL",
  //     "JWT",
  //     "Bcrypt",
  //     "NeonDB"
  //   ],

  //   des: "A role based secure backend system for managing software issues, role-based access with JWT authentication",
  //   description: "DevPulse Issue Tracker API provides a structured backend for managing software issues and feature requests within a development team. It supports two user roles — contributor and maintainer — each with clearly defined permissions. Contributors can create and manage their own issues, while maintainers have full administrative control over all issues and system metrics. All protected routes are secured using JSON Web Tokens (JWT).",

  //   live: "https://issue-tracker-api-delta.vercel.app/",
  //   github: "https://github.com/MShahdat/B7A2",

  //   features: [
  //     "JWT Authentication",
  //     "Role-based Authorization",
  //     "Issue CRUD Operations",
  //     "Contributor & Maintainer Roles",
  //     "Filtering & Sorting",
  //     "Secure Password Hashing",
  //     "Protected Routes",
  //     "RESTful API Architecture",
  //     "PostgreSQL Database Integration",
  //     "Environment Variable Configuration"
  //   ],

  //   stats: [
  //     {
  //       value: "7+",
  //       label: "API Endpoints"
  //     },
  //     {
  //       value: "2",
  //       label: "User Roles"
  //     },
  //     {
  //       value: "2",
  //       label: "Database Tables"
  //     },
  //     {
  //       value: "100%",
  //       label: "RESTful"
  //     }
  //   ],

  //   meta: [
  //     {
  //       label: "Duration",
  //       value: "Learning Phase"
  //     },
  //     {
  //       label: "Status",
  //       value: "Completed"
  //     },
  //     {
  //       label: "Platform",
  //       value: "Backend API"
  //     },
  //     {
  //       label: "Authentication",
  //       value: "JWT"
  //     },
  //     {
  //       label: "Database",
  //       value: "PostgreSQL"
  //     },
  //     {
  //       label: "Architecture",
  //       value: "REST API"
  //     }
  //   ],
  //   future: [
  //     "Email Verification & Password Reset",
  //     "File Attachment Support",
  //     "Advanced Search & Pagination",
  //   ]
  // },
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
  // {
  //   cover: "https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg",
  //   title: "Kider School Website",
  //   subtitle: "Modern Educational Web Application",
  //   category: "React",

  //   tools: [
  //     "React",
  //     "Tailwind CSS",
  //     "React Router",
  //     "React Slick",
  //     "Framer Motion",
  //     "EmailJS",
  //     "React Icons",
  //     "React Toastify"
  //   ],

  //   des: "A child school React application designed for kids schools, featuring a modern UI and seamless user experience",
  //   description: "A fully responsive educational website for a kids school featuring modern UI, admission appointments, class information, teacher profiles, events, blogs, testimonials, and interactive user experience across all devices.",


  //   live: "https://kider-kids-school-website.vercel.app/",
  //   github: "https://github.com/MShahdat/Kidder-Kids-School-Website/",


  //   features: [
  //     "Modern & Responsive Design",
  //     "Dark & Light Theme",
  //     "React Slick Banner Slider",
  //     "Testimonials Section",
  //     "Events & Blogs",
  //     "Google Map Integration",
  //     "EmailJS Form Submission",
  //     "Smooth Framer Motion Animations",
  //     "404 Not Found Page"
  //   ],

  //   stats: [
  //     {
  //       value: "10+",
  //       label: "Pages"
  //     },
  //     {
  //       value: "14+",
  //       label: "Features"
  //     },
  //     {
  //       value: "2",
  //       label: "Themes"
  //     },
  //     {
  //       value: "100%",
  //       label: "Responsive"
  //     }
  //   ],

  //   meta: [
  //     {
  //       label: "Duration",
  //       value: "Learning Phase"
  //     },
  //     {
  //       label: "Status",
  //       value: "Completed"
  //     },
  //     {
  //       label: "Platform",
  //       value: "Web Application"
  //     }
  //   ],
  //   future: [
  //     "Backend Integrate",
  //     "Online Fee Payment",
  //     "Admin Dashboard & CMS",
  //   ]
  // },
];

