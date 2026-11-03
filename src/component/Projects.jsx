import { useContext, useState } from 'react';
import { FaExternalLinkAlt, FaFolderPlus } from "react-icons/fa";

import { TbListDetails } from "react-icons/tb";
import { dataContext } from '../context/Context';
import Heading from '../utility/Heading';
import { useGetCategories, useGetHeadingById, useGetProjects } from '../hook/index.hook';



const Projects = () => {

  const [openProjectModal, setOpenProjectModal, selectedProject, setSelectedProject] = useContext(dataContext)
  const [selectedCat, setSelectCat] = useState('All');

  const { data } = useGetHeadingById("3")
  const { data: categoriesData } = useGetCategories()
  const { data: projectData } = useGetProjects()

  const heading = data?.data ?? undefined
  const projects = projectData?.data ?? []
  const categories = categoriesData?.data ?? []

  const cat = ['All', ...new Set(categories.map((cat) => cat.title))]
  // console.log(cat)

  const filtered = selectedCat === 'All'
    ? projects
    : projects.filter(item => item?.category?.title === selectedCat);


  return (
    <div id='projects' className='bg-white dark:bg-background text-black dark:text-white'>
      <div className='max-w-7xl px-4 py-12 mx-auto'>

        <Heading
          icon={<FaFolderPlus />}
          title={heading?.name ?? ""}
          subtitle={heading?.title ?? ""}
          description={heading?.description ?? ""}
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
                  <img className='w-full h-52 object-cover group-hover:scale-105 transform duration-300' src={item?.cover ?? ""} alt={item.title} />
                  <div className='px-4 py-3 flex flex-col gap-2 dark:bg-ternaryColor/10 h-fit hover:cursor-default'>
                    <p className='text-xl font-semibold line-clamp-1'>{item?.title ?? ""}</p>
                    <p className=' dark:text-neutral-400 text-neutral-700 text-[15px] line-clamp-3 tracking-wide leading-relaxed'>{item?.description}</p>
                    <div className='mt-2 grid grid-cols-9 gap-4'>
                      <a href={item?.liveUrl ?? ""} target='_blank' className='col-span-6 flex items-center justify-center gap-2 border border-ternaryColor/20 px-4 w-full py-1 rounded-lg bg-ternaryColor/90 text-white'>
                        <FaExternalLinkAlt />
                        <p className=''>Preview</p>
                      </a>
                      <button
                        onClick={() => {
                          setOpenProjectModal(!openProjectModal),
                            setSelectedProject(item)
                        }}
                        className='col-span-3 flex items-center justify-center gap-2 border border-ternaryColor/20 px-4 w-full py-1 rounded-lg bg-white text-ternaryColor'>
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