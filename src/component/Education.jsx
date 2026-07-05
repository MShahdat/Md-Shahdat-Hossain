import React, { useState } from 'react';
import { FaCalendar } from "react-icons/fa6";
import { BiSolidSchool } from "react-icons/bi";
import { IoSchool } from "react-icons/io5";
import { IoSchoolSharp } from "react-icons/io5";
import { jsSvg, nextSvg, nodeSvg, postgresqlSvg, prismaSvg, reactSvg, tsSvg } from '../utility/svg';
import { FaLocationDot } from "react-icons/fa6";
import EduCard from '../utility/eduCard';


const eduData = [
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

const cerData = [
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


const Education = () => {
  const [show, setShow] = useState('edu')
  const activeBtn =
  "bg-ternaryColor text-white shadow-md shadow-primaryColor/40 scale-105";

const inactiveBtn =
  "bg-white/5 text-ternaryColor";

  return (
    <div id='education' className='bg-white dark:bg-background text-black dark:text-white'>
      <div className='max-w-7xl px-4 py-16 mx-auto'>
        <div className='flex flex-col items-center gap-4'>
          <div className='w-fit flex flex-row items-center gap-2 px-2 py-0.5 md:px-6 md:py-1.5 tracking-normal border border-secondaryColor/50 bg-ternaryColor/20 rounded-full shadow-2xl shadow-primaryColor text-ternaryColor'>
            <IoSchoolSharp />
            <p className=' font-bold text-[13px] md:text-[14px] uppercase whitespace-pre tracking-wide'>Education</p>
          </div>
          <h1 className='text-3xl md:text-4xl font-bold bg-linear-to-r from-ternaryColor via-primaryColor to-secondaryColor bg-clip-text text-transparent'>Education & Certificate</h1>
          <p className=' leading-tight text-md md:text-lg tracking-normal font-mono text-center text-neutral-700 dark:text-neutral-400'>A section of my most impactful technical and educational journey</p>
        </div>


        <div className='mt-12'>
          <div className='mt-4 flex items-center justify-center gap-4 '>
            <button onClick={() => setShow('edu')} className={`w-fit flex items-center gap-2 border border-primaryColor/20 px-6 py-1.5 md:py-2 rounded-lg font-medium transition-all duration-300 ${show === "edu" ? activeBtn : inactiveBtn
              }`}>
              <IoSchoolSharp />
              <p>Education</p>
            </button>
            <button onClick={() => setShow('cer')} className={`w-fit flex items-center gap-2 border border-primaryColor/20 px-6 py-1.5 md:py-2 rounded-lg font-medium transition-all duration-300 ${show === "cer" ? activeBtn : inactiveBtn
              }`}>
              <IoSchoolSharp />
              <p>Certificate</p>
            </button>
          </div>


          {
            show === 'edu' &&
            <ul className="mt-8 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ">
              {
                eduData.map((item, idx) => (
                  <li key={idx}>
                    {idx !== 0 && <hr />}
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className={`${idx % 2 == 0 ? 'timeline-start mb-10 md:text-end' : 'timeline-end md:mb-10'}`}>
                      <time className="font-mono italic font-bold text-primaryColor text-lg">{item.year}</time>
                      <EduCard data = {item}/>
                    </div>
                    <hr />
                  </li>
                ))
              }
            </ul>
          }
          {
            show === 'cer' &&
            <ul className="mt-8 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ">
              {
                cerData.map((item, idx) => (
                  <li key={idx}>
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className={`${idx % 2 === 0 ? 'timeline-start mb-10 md:text-end' : 'mb-10 md:text-end'}`}>
                      <time className="font-mono italic text-lg text-primaryColor font-bold">{item.year}</time>
                      <EduCard data = {item}/>
                    </div>
                    <hr />
                  </li>
                ))
              }

            </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default Education;