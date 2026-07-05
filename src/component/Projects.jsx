import React, { useContext } from 'react';
import { FaCalendarAlt, FaGithubSquare, FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from 'react';
import { FaFolderPlus } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { FaPix } from "react-icons/fa6";
import { MdRealEstateAgent } from "react-icons/md";
import { GiSchoolBag } from "react-icons/gi";
import { IoRestaurantSharp } from "react-icons/io5";
import { IoSchoolSharp } from "react-icons/io5";
import { IoLibrary } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import { FaExternalLinkAlt } from "react-icons/fa";
import { context } from '../context/context';

const project = [

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
      "Services & About Pages",
      "Statistics & Why Choose Us Section",
      "Google Map Integration",
      "Smooth Page Animations",
      "Mobile-Friendly Navigation"
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
      "Responsive Navigation",
      "User Profile & Reservation History",
      "Table Reservation with Email Confirmation",
      "Categorized Restaurant Menu",
      "Master Chef Showcase",
      "Customer Reviews Slider",
      "Blog Listing & Details",
      "About & Contact Pages",
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
      "Responsive Navigation with Dropdown",
      "Mobile Slide Menu",
      "React Slick Banner Slider",
      "Class & Tuition Information",
      "Teachers Showcase",
      "Admission Appointment System",
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
    futureImprovement: [
      "Backend Integrate",
      "Online Fee Payment",
      "Admin Dashboard & CMS",
    ]
  },
]

const Projects = () => {

  const [openProjectModal, setOpenProjectModal, selectedProject, setSelectedProject] = useContext(context)

  const cat = ['All', ...new Set(project.map(i => i.category))]
  // console.log(cat)

  const [selectedCat, setSelectCat] = useState('All');
  const filtered = selectedCat === 'All'
    ? project
    : project.filter(item => item.category === selectedCat);

  // console.log(filtered)

  return (
    <div id='projects' className='bg-white dark:bg-background text-black dark:text-white'>
      <div className='max-w-7xl px-4 py-12 mx-auto'>
        <div className='flex flex-col items-center gap-4'>
          <div className='w-fit flex flex-row items-center gap-2 px-2 py-0.5 md:px-6 md:py-1.5 tracking-normal border border-secondaryColor/50 bg-ternaryColor/20 rounded-full shadow-2xl shadow-primaryColor text-ternaryColor'>
            <FaFolderPlus />
            <p className=' font-bold text-[13px] md:text-[14px] uppercase whitespace-pre tracking-wide'>Portfolio</p>
          </div>
          <h1 className='text-3xl md:text-4xl font-bold bg-linear-to-r from-ternaryColor via-primaryColor to-secondaryColor bg-clip-text text-transparent'>Featured Projects</h1>
          <p className=' leading-tight text-md md:text-lg tracking-normal font-mono text-center text-neutral-700 dark:text-neutral-400'>A selection of my most impactful work</p>
        </div>

        <div className='mt-12 w-fit rounded-full sm:shadow-2xl sm:bg-white/0 border sm:border-none border-white dark:border-none px-6 py-3'>
          <button className='flex items-center gap-2 flex-wrap'>
            {cat.map((c, i) => (
              <div
                key={i}
                onClick={() => setSelectCat(c)}
                className={`cursor-pointer w-fit border font-semibold px-6 py-[3px] rounded-full leading-relaxed transition-colors
        ${selectedCat === c
                    ? 'border-primaryColor/70 bg-ternaryColor text-white'
                    : 'border-primaryColor/30 text-ternaryColor dark:text-white bg-primaryColor/5'
                  }`}
              >
                <p>{c}</p>
              </div>
            ))}
          </button>
        </div>

        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 space-y-2'>
          {
            filtered.map((item, idx) => {
              return (
                <div key={idx} className='group border overflow-hidden border-primaryColor/20 rounded-xl hover:scale-101 duration-700 transition-all hover:shadow-xl hover:shadow-primaryColor/20'>
                  <img className='w-full h-52 object-cover group-hover:scale-105 transform duration-300' src={item.cover} alt={item.title} />
                  <div className=' px-4 py-3 flex flex-col gap-2 dark:bg-ternaryColor/10 h-fit hover:cursor-default'>
                    <p className='text-xl  font-semibold'>{item.title}</p>
                    <p className=' dark:text-neutral-400 text-neutral-700 text-[15px] line-clamp-3 tracking-wide leading-relaxed'>{item.des}</p>
                    {/* <div className='mt-2 flex items-center gap-2 flex-wrap'>
                      {
                        item.tools.map((to, id) => (
                          <div key={id} className='text-[11px] border border-primaryColor/50 text-primaryColor font-semibold bg-primaryColor/20 px-2 py-0.5 rounded-full leading-relaxed'>
                            <p>{to}</p>
                          </div>
                        ))
                      }
                    </div> */}
                    <div className='mt-2 grid grid-cols-9 gap-4'>
                      <a href={item.live} target='_blank' className='col-span-6 flex items-center justify-center gap-2 border border-ternaryColor/20 px-4 w-full py-1.5 rounded-lg bg-ternaryColor/90 text-white'>
                        <FaExternalLinkAlt />
                        <p className=''>Preview</p>
                      </a>
                      <button
                        onClick={() => {
                          setOpenProjectModal(!openProjectModal),
                            setSelectedProject(item)
                        }}
                        className='col-span-3 flex items-center justify-center gap-2 border border-ternaryColor/20 px-4 w-full py-1.5 rounded-lg bg-white text-ternaryColor'>
                        <TbListDetails />
                        <p className=''>Details</p>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Projects;