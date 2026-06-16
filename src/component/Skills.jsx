
import { FaCode } from "react-icons/fa";
import React, { useEffect, useRef, useState } from 'react';
import {SiLatex,SiNetlify,} from "react-icons/si";
import { cppSvg, daisyUiSvg, figmaSvg, firebaseSvg, githubSvg, gitSvg, javaSvg, pythonSvg, vercelSvg } from "../utility/svg";

const skillCategories = [
  {
    icon: '💻',
    title: 'Frontend',
    skills: [
      { name: 'Next.Js', level: 75 },
      { name: 'React.Js', level: 88 },
      { name: 'Tailwind CSS', level: 84 },
      { name: 'JavaScript', level: 92 },
      { name: 'HTML & CSS', level: 90 },
      // { name: 'CSS', level: 84 },

    ],
  },
  {
    icon: '⚙️',
    title: 'Backend',
    skills: [
      { name: 'TypeScript', level: 89 },
      { name: 'Node.js', level: 91 },
      { name: 'PostgreSQL', level: 90 },
      { name: 'Prisma', level: 80 },
    ],
  },
];


const tools = [
  { icon: pythonSvg, to: 'Python' },
  { icon: cppSvg, to: 'C/C++' },
  { icon: javaSvg, to: 'Java' },
  { icon: gitSvg, to: 'Git' },
  { icon: githubSvg, to: 'Github' },
  { icon: figmaSvg, to: 'Figma' },
  { icon: daisyUiSvg, to: 'Daisy UI' },
  { icon: firebaseSvg, to: 'Firebase' },
  { icon: <SiLatex />, to: 'LaTeX' },
  { icon: <SiNetlify />, to: 'Netlify' },
  { icon: vercelSvg, to: 'Vercel' }

]

const Skill = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          // observer.disconnect(); // only trigger once
        }else{
          setAnimate(false)
        }
      },
      { threshold: 0.2 } // fires when 20% of section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div id='skills' ref={sectionRef} className='bg-[#030014] text-white'>
      <div className='max-w-6xl px-4 py-16 mx-auto'>
        <div className='flex flex-col items-center gap-4'>
          <div className='w-fit flex flex-row items-center gap-2 px-2 py-0.5 md:px-6 md:py-1.5 tracking-normal border border-secondaryColor/50 bg-ternaryColor/20 rounded-full shadow-2xl shadow-primaryColor text-primaryColor'>
            <FaCode />
            <p className=' font-bold text-[13px] md:text-[14px] uppercase whitespace-pre tracking-wide'>Technical Skills</p>
          </div>
          <h1 className='text-3xl md:text-4xl font-bold bg-linear-to-r from-ternaryColor via-primaryColor to-secondaryColor bg-clip-text text-transparent'>My Tech Arsenal</h1>
          <p className=' leading-tight text-md md:text-lg text-center font-mono'>Technologies I use daily to build amazing products</p>
        </div>

        <div className='mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 bg-red-00'>
          {skillCategories.map((cat, idx) => (
            <div key={idx} className=' group w-full flex flex-col items-start border border-primaryColor/10 px-2 py-4 bg-white/5 rounded-lg shadow-xl hover:shadow-primaryColor/60 transform ease-in-out duration-300 hover:border-primaryColor/10'>
              <div className='flex items-center gap-2'>
                <div className='text-3xl'>{cat.icon}</div>
                <h1 className='text-2xl md:text-3xl font-medium group-hover:text-primaryColor/80 transition-all duration-300 ease-in-out'>{cat.title}</h1>
              </div>

              <div className='mt-6 bg-red-00 relative border border-primaryColor/0 py-2 rounded-lg w-full h-full flex'>
                {/* Label column */}
                <div className='relative py-4 w-[180px] md:w-[160px] flex flex-col justify-between border-r-2 border-primaryColor bg-red-00'>
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className='relative h-[56px] flex items-center justify-end'>
                      <div className='absolute -right-2.5 w-5 h-[3px] bg-linear-to-r from-ternaryColor to-secondaryColor/70'></div>
                      <p className='text-right pr-4 font-medium text-[16px] sm:text-[17px]'>{skill.name}</p>
                    </div>
                  ))}
                </div>

                {/* Bars column */}
                <div className='py-4 flex flex-col justify-between w-full pl-4 pr-4 bg-blue-0'>
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className='h-[56px] flex items-center gap-2'>
                      <div className='w-full h-[10px] sm:h-[12px] bg-white/10 rounded-full overflow-hidden'>
                        <div
                          className='h-full bg-linear-to-r from-ternaryColor/70 via-primaryColor to-secondaryColor/70 rounded-full transition-all duration-700 ease-out'
                          style={{ width: animate ? `${skill.level}%` : '0%' }}
                        />
                      </div>
                      <p className='font-medium'>{skill.level}%</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*Language & tools */}
        <div className='mt-8 flex flex-wrap items-center gap-2'>
          {tools.map((t, idx) => {
            return (
              <div key={idx} className='flex items-center gap-2 border border-primaryColor/50 text-primaryColor font-semibold bg-primaryColor/20 px-4 py-1 rounded-full leading-relaxed'>
                <p className='size-5'>{t.icon}</p>
                <p>{t.to}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Skill;