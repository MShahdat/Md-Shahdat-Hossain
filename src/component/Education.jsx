import React from 'react';
import { FaCalendar } from "react-icons/fa6";
import { BiSolidSchool } from "react-icons/bi";
import { IoSchool } from "react-icons/io5";

const timelineData = [
  {
    year: "Aug 2021 - Sept 2025",
    class: 'Bachalor of Computer Science and Engineering',
    school: 'Green University of Bangladesh',
    title: "Timeline Item Title",
     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    year: "July 2018 - Aril 2020",
    class: 'Higher Secondary School Certificate',
    school: 'Dania University Collage',
    title: "Timeline Item Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    year: "Jan 2016 - April 2018",
    class: 'Secondary School Certificate',
    school: 'Charkalia High School',
    title: "Timeline Item Title",
    desc: "Lorem ipsum dolor sit amet, consectetur .",
  },
  {
    year: "Jan 2015 - Dec 2015",
    class: 'Junior School Certificate ',
    school: 'Charkalia High School',
    title: "Timeline Item Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];


const Education = () => {
  return (
    <div id='education' className='bg-black text-white'>
      <div className='max-w-7xl px-4 py-16 mx-auto relative'>
        <h1 className='text-3xl lg:text-4xl font-bold text-center text-primaryColor tracking-wider bg-white/5 shadow-2xl shadow-primaryColor w-fit mx-auto'>My Education</h1>
        <div className='mt-3 w-[100px] lg:w-[160px] mx-auto h-[3px] rounded-2xl bg-primaryColor'></div>
        <div className='mt-20 grid grid-cols-1 md:grid-cols-2 gap-6'>
          {
            timelineData.map((item, idx) => (
              <div key={idx} className='group'>
                <div className='p-2 md:p-6 border bg-white/5 group border-primaryColor/40 rounded-xl flex flex-col tracking-wider gap-4 group-hover:scale-101 transition-all ease-in-out duration-300 hover:shadow-lg shadow-primaryColor'>
                <div className='flex flex-col items-end justify-end'>
                  <div className='flex items-start gap-2'>
                  <FaCalendar className='mt-1 shrink-0 text-primaryColor text-[14px]'/>
                  <p className='text-[14px]'>{item.year}</p>
                </div>
                </div>
                <div className='flex items-start gap-3'>
                  {/* <IoSchool className='mt-1 shrink-0 text-xl text-primary'/> */}
                  <p className='text-lg md:text-2xl font-medium text-white'>{item.class}</p>
                </div>
                <div className='-mt-2 flex items-start gap-3'>
                  {/* <BiSolidSchool className='mt-1 shrink-0 text-xl text-primary'/> */}
                  <p className='text-md md:text-lg text-primaryColor'>{item.school}</p>
                </div>
                <div className='mt-4 text-[16px] tracking-wider leading-relaxed'>
                  {item.desc}
                </div>
                <div className='mt-2  bg-white/10 px-6 py-1.5 w-fit rounded-2xl border border-primaryColor/30 shadow shadow-primaryColor cursor-pointer'>
                  See more
                </div>
              </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Education;