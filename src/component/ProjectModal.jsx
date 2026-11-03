import React, { useContext, useEffect } from 'react';
import { RxCross2 } from "react-icons/rx";
import { TbListDetails } from "react-icons/tb";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { AiOutlineCluster } from "react-icons/ai";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { dataContext } from '../context/Context';



const ProjectModal = () => {
  const [openProjectModal, setOpenProjectModal, selectedProject, setSelectedProject, open] = useContext(dataContext);

  useEffect(() => {
    if ((openProjectModal && selectedProject) || open) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    };
  }, [openProjectModal, selectedProject, open])

  if (!openProjectModal || !selectedProject) return null;

  const info = selectedProject;

  // console.log('selected project', info)

  return (
    <div className='flex items-center justify-center bg-black h-screen fixed inset-0 z-40 p-4 sm:p-6'>
      <div className="relative w-[95vw] sm:w-[90vw] lg:w-[80vw] h-auto lg:h-[85vh] max-h-[85vh] rounded-lg border border-white/10 bg-white dark:bg-primaryColor/15 flex flex-col overflow-hidden">
        <button
          onClick={() => setOpenProjectModal(!openProjectModal)}
          className='absolute right-2 top-2 rounded-full bg-white/90 active:bg-white/70 p-1.5 z-50'
        >
          <RxCross2 className='text-xl text-red-600' />
        </button>

        <div className="h-full w-full overflow-y-auto lg:overflow-hidden hide-scrollbar py-4">
          <div className='w-full grid grid-cols-1 lg:grid-cols-9 h-auto lg:h-full'>
            <div className='lg:col-span-4 xl:col-span-3 h-auto lg:h-full flex flex-col gap-5 p-4 border-b lg:border-b-0 lg:border-r border-white/10 lg:overflow-y-auto hide-scrollbar'>
              <div className='rounded-lg overflow-hidden border border-primaryColor/50 dark:border-neutral-800 shrink-0'>
                <img
                  src={info?.cover}
                  alt={info?.title}
                  className='w-full h-52 object-cover'
                />
              </div>

              <div className='mt-1 flex items-center gap-4 sm:gap-4 xl:gap-12 justify-between shrink-0 dark:text-white'>
                <a
                  href={info?.liveUrl ?? ""}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center gap-2 border border-ternaryColor/20 px-4 w-full py-1.5 rounded-lg dark:bg-ternaryColor/15 bg-linear-to-bl from-primaryColor to-secondaryColor'
                >
                  <FaExternalLinkAlt />
                  <p className='font-semibold'>Live Demo</p>
                </a>
                <a
                  href={info?.githubUrl ?? ""}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center gap-2 border border-ternaryColor/20 px-4 w-full py-1.5 rounded-lg dark:bg-ternaryColor/15 bg-ternaryColor'
                >
                  <FaGithub />
                  <p className='font-semibold'>GitHub</p>
                </a>
              </div>

              <div className="mt-4 px-4 divide-y divide-ternaryColor/10 border-t border-ternaryColor/10">
                {info?.meta &&
                  info?.meta.map((me) => (
                    <div
                      key={me.level}
                      className="flex items-center justify-between gap-6 py-3 text-sm"
                    >
                      <span className="flex items-center gap-2 dark:text-neutral-400 text-neutral-700">
                        <span className="w-6 h-6 rounded-md bg-ternaryColor/10 flex items-center justify-center">
                          <TbListDetails className="text-ternaryColor" />
                        </span>
                        {me?.level ?? "-"}
                      </span>
                      <span className="dark:text-neutral-200 text-neutral-700 font-medium">
                        {me?.value ?? "-"}
                      </span>
                    </div>
                  ))}
              </div>
            </div>


            <div className='lg:col-span-5 xl:col-span-6 h-auto lg:h-full flex flex-col gap-4 px-4 py-4 lg:overflow-y-auto hide-scrollbar'>
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="shrink-0 w-fit text-xs font-medium text-ternaryColor border border-ternaryColor/40 bg-ternaryColor/10 rounded-full px-3 py-1.5 whitespace-nowrap">
                      {info?.category?.title ?? ""} Project
                    </div>
                    <h1 className="mt-4 text-2xl md:text-3xl font-bold text-ternaryColor">
                      {info?.title ?? "-"}
                    </h1>
                    <p className="text-lg md:text-lg font-semibold dark:text-white text-neutral-700 mt-1">
                      {info?.subtitle ?? "-"}
                    </p>
                  </div>
                </div>
                <p className="mt-3 dark:text-neutral-400 text-neutral-700 text-[15px] tracking-wide leading-relaxed">
                  {info?.description ?? "-"}
                </p>
              </div>

              {info.tools &&
                <div className='mt-4'>
                  <div className='flex items-center gap-2 dark:text-white text-ternaryColor text-2xl'>
                    <IoSettings />
                    <p className='font-semibold'>Technology Used</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {info.tools.map((tool) => (
                      <span
                        key={tool}
                        className="border text-center border-primaryColor/30 text-[14px] font-semibold text-ternaryColor bg-primaryColor/10 dark:bg-ternaryColor/12 px-4 py-0.5 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              }

              {
                info.feature &&
                <div className='mt-4'>
                  <div className='flex items-center gap-2 text-ternaryColor dark:text-white text-2xl'>
                    <BsFillRocketTakeoffFill />
                    <p className='font-semibold'>Key Features</p>
                  </div>
                  <div className="mt-4 grid sm:grid-cols-2 gap-3">
                    {info.feature.map((fea) => (
                      <div
                        key={fea}
                        className="flex items-start gap-2"
                      >
                        <TbListDetails
                          className="text-ternaryColor mt-1 shrink-0"
                          size={15}
                        />
                        <span className="text-sm lg:text-[16px] dark:text-neutral-300 text-neutral-700 leading-6">
                          {fea}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              }

              {
                info.stats &&
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-neutral-800">
                  {info.stats.map((item) => (
                    <div
                      key={item?.lavel}
                      className="rounded-lg dark:bg-ternaryColor/5 bg-ternaryColor/10 py-5 text-center"
                    >
                      <h2 className="text-xl md:text-2xl font-bold text-ternaryColor">
                        {item?.value ?? "-"}
                      </h2>

                      <p className="text-sm dark:text-neutral-400 text-neutral-700 mt-1">
                        {item?.level ?? "-"}
                      </p>
                    </div>
                  ))}
                </div>
              }
              {
                info?.futureImporve &&
                <div className='mt-4'>
                  <div className='flex items-center gap-2 text-ternaryColor dark:text-white text-2xl'>
                    <FaExternalLinkAlt />
                    <p className='font-semibold'>Future Improvement</p>
                  </div>
                  <div className="mt-4 grid sm:grid-cols-2 gap-3">
                    {info?.futureImporve.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2"
                      >
                        <AiOutlineCluster
                          className="text-ternaryColor mt-1 shrink-0"
                          size={15}
                        />
                        <span className="text-sm lg:text-[16px] dark:text-neutral-300 text-neutral-700 leading-6">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              }

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;