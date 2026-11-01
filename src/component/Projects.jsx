import React, { useContext } from 'react';
import { FaCalendarAlt, FaGithubSquare, FaGithub, FaExternalLinkAlt, FaFolderPlus } from "react-icons/fa";
import { FaArrowRightLong, FaPix } from "react-icons/fa6";
import { useState } from 'react';
import { LuExternalLink } from "react-icons/lu";
import { MdRealEstateAgent } from "react-icons/md";
import { GiSchoolBag } from "react-icons/gi";
import { IoSchoolSharp, IoRestaurantSharp, IoLibrary } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import { dataContext } from '../context/Context';
import { projects } from '../data/data';
import Heading from '../utility/Heading';



const Projects = () => {

  const [openProjectModal, setOpenProjectModal, selectedProject, setSelectedProject] = useContext(dataContext)

  const cat = ['All', ...new Set(projects.map(i => i.category))]
  // console.log(cat)

  const [selectedCat, setSelectCat] = useState('All');
  const filtered = selectedCat === 'All'
    ? projects
    : projects.filter(item => item.category === selectedCat);

  // console.log(filtered)

  return (
    <div id='projects' className='bg-white dark:bg-background text-black dark:text-white'>
      <div className='max-w-7xl px-4 py-12 mx-auto'>

        <Heading
          icon={<FaFolderPlus />}
          title="Projects"
          subtitle="Featured Projects"
          description="A selection of my most impactful work"
        />

        <div className='mt-12 w-fit rounded-full sm:shadow-2xl sm:bg-white/0 border sm:border-none border-white dark:border-none px-6 py-3'>
          <button className='flex items-center gap-2 flex-wrap'>
            {cat.map((c, i) => (
              <div
                key={i}
                onClick={() => setSelectCat(c)}
                className={`cursor-pointer w-fit border font-semibold px-6 py-[3px] rounded-full leading-relaxed transition-colors
        ${selectedCat === c
                    ? 'border-primaryColor/70 bg-linear-to-bl from-secondaryColor to-primaryColor text-white'
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