import React from 'react';
import { LuLink } from "react-icons/lu";
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


const project = [
  {
    cover: <IoSchoolSharp className='text-amber-300'/>,
    title: 'Modern School Website',
    tools: ['React', 'Django', 'Tailwind CSS', 'RESTApi'],
    category: 'Full-Stack',
    des: 'A modern school website with backend API integration for dynamic notices, news, events, and academic updates',
    live: 'https://dania-collage.netlify.app/',
    github: 'https://github.com/MShahdat/Modern-School-Website',
    bgcolor: 'bg-primaryColor/30',
    hbg: 'group-hover:bg-primaryColor/40'
  },
  {
    cover: <FaPix className='text-primaryColor'/>,
    title: 'DevPulse Issue Tracker API',
    tools: ['TypeScript', 'Node', 'JWT', 'PostgreSQL'],
    category: 'Node.js',
    des: 'A secure backend system for managing software issues, role-based access with JWT authentication',
    live: 'https://issue-tracker-api-delta.vercel.app/',
    github: 'https://github.com/MShahdat/B7A2',
    bgcolor: 'bg-secondaryColor/20',
    hbg: 'group-hover:bg-secondaryColor/40'
  },
  {
    cover: <MdRealEstateAgent className='text-fuchsia-500'/>,
    title: 'Velrio Real Estate Website',
    tools: ['React', 'Tailwind CSS', 'Daisy UI', 'Motion'],
    category: 'React',
    des: 'A real estate platform built with React, offering property listings, advanced search, and a seamless user experience',
    live: 'https://veltrio-real-estate-website.netlify.app/',
    github: 'https://github.com/MShahdat/Veltrio-Estates---A-Real-Estate-Website',
    bgcolor: 'bg-primaryColor/30',
    hbg: 'group-hover:bg-primaryColor/40'
  },
  {
    cover: <IoRestaurantSharp className='text-ternaryColor'/>,
    title: 'Teste.io Restaurent Website',
    tools: ['React', 'Tailwind CSS', 'Firebase'],
    category: 'React',
    des: 'A restaurant web app featuring dynamic menus, table reservations, and user authentication',
    live: 'https://teste-io-restaurent.netlify.app/',
    github: 'https://github.com/MShahdat/Teste.io_Restaurant',
    bgcolor: 'bg-secondaryColor/20',
    hbg: 'group-hover:bg-secondaryColor/40'
  },
  {
    cover: <GiSchoolBag className='text-violet-600'/>,
    title: 'Kider Kids School Website',
    tools: ['React', 'Tailwind CSS', 'Motion', 'EmailJs'],
    category: 'React',
    des: 'A child school React application designed for kids schools, featuring a modern UI and seamless user experience',
    live: 'https://kider-kids-school-website.vercel.app/',
    github: 'https://github.com/MShahdat/Kidder-Kids-School-Website',
    bgcolor: 'bg-ternaryColor/20',
    hbg: 'group-hover:bg-ternaryColor/40'
  },
  {
    cover: <IoLibrary className='text-amber-500'/>,
    title: 'E-boimela Library Website',
    tools: ['React', 'Tailwind CSS', 'Motion'],
    category: 'React',
    des: 'A e-library platform built with React, enabling users to explore, search, and manage books seamlessly',
    live: 'https://e-boimela-book-shop.vercel.app/',
    github: 'https://github.com/MShahdat/E-boimela-online-book-shop-website',
    bgcolor: 'bg-secondaryColor/20',
    hbg: 'group-hover:bg-secondaryColor/40'
  },
]

const Projects = () => {

  const cat = ['All', ...new Set(project.map(i => i.category))]
  console.log(cat)

  const [selectedCat, setSelectCat] = useState('All');
  const filtered = selectedCat === 'All'
    ? project
    : project.filter(item => item.category === selectedCat);

  console.log(filtered)

  return (
    <div id='projects' className='bg-[#01011c] text-white'>
      <div className='max-w-6xl px-4 py-12 mx-auto'>
        <div className='flex flex-col items-center gap-4'>
          <div className='w-fit flex flex-row items-center gap-2 px-2 py-0.5 md:px-6 md:py-1.5 tracking-normal border border-secondaryColor/50 bg-ternaryColor/20 rounded-full shadow-2xl shadow-primaryColor text-primaryColor'>
            <FaFolderPlus />
            <p className=' font-bold text-[13px] md:text-[14px] uppercase whitespace-pre tracking-wide'>Portfolio</p>
          </div>
          <h1 className='text-3xl md:text-4xl font-bold bg-linear-to-r from-ternaryColor via-primaryColor to-secondaryColor bg-clip-text text-transparent'>Featured Projects</h1>
          <p className=' leading-tight text-md md:text-lg tracking-normal font-mono text-center'>A selection of my most impactful work</p>
        </div>

        <button className='mt-12 flex items-center gap-4 flex-wrap'>
          {cat.map((c, i) => (
            <div
              key={i}
              onClick={() => setSelectCat(c)}
              className={`cursor-pointer w-fit border font-semibold px-6 py-[3px] rounded-full leading-relaxed transition-colors
        ${selectedCat === c
                  ? 'border-primaryColor/70 bg-linear-to-r from-ternaryColor/60 via-primaryColor/60 to-secondaryColor/60 text-white'
                  : 'border-primaryColor/30 text-primaryColor bg-primaryColor/20'
                }`}
            >
              <p>{c}</p>
            </div>
          ))}
        </button>

        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 space-y-2'>
          {
            filtered.map((item, idx) => {
              return (
                <div key={idx} className='group border border-primaryColor/20 rounded-b-xl hover:scale-103 duration-700 transition-all hover:shadow-xl hover:shadow-primaryColor/20'>
                  <div className={`relative w-full h-52 ${item.bgcolor} ${item.hbg}`}>
                    <div className='group-hover:opacity-0 hover:scale-75 duration-300 transition-all absolute inset-0 items-center justify-center flex'>
                      <div className='text-7xl opacity-0 md:opacity-100'>{item.cover}</div>
                    </div>
                    <div className='group-hover:bg-secondaryColor/5 absolute inset-0 flex items-center justify-center gap-4 opacity-100 md:opacity-0 group-hover:opacity-100 hover:duration-700 transition-all delay-75'>
                      <a href={item.live} target='_blank' className=' flex flex-col items-center justify-center bg-yellow-500 w-12 h-12 rounded-full'>
                        <LuExternalLink className='size-7' />
                      </a>
                      <a href={item.github} target='_blank' className=' flex flex-col items-center justify-center bg-fuchsia-500 w-12 h-12 rounded-full'>
                        <FaGithub className='size-7' />
                      </a>
                    </div>

                  </div>
                  <div className='px-4 py-5 flex flex-col gap-2 bg-primaryColor/10 h-fit hover:cursor-default'>
                    <p className='text-xl font-semibold'>{item.title}</p>
                    <p className='text-white/60 text-[15px] line-clamp-3 tracking-wide leading-relaxed'>{item.des}</p>
                    <div className='mt-2 flex items-center gap-2 flex-wrap'>
                      {
                        item.tools.map((to, id) => (
                          <div key={id} className='text-[11px] border border-primaryColor/50 text-primaryColor font-semibold bg-primaryColor/20 px-2 py-0.5 rounded-full leading-relaxed'>
                            <p>{to}</p>
                          </div>
                        ))
                      }
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