import React, { useState } from 'react';
import { BiSolidSchool } from "react-icons/bi";
import { IoSchoolSharp, IoSchool } from "react-icons/io5";
import { jsSvg, nextSvg, nodeSvg, postgresqlSvg, prismaSvg, reactSvg, tsSvg } from '../utility/svg';
import { FaLocationDot, } from "react-icons/fa6";
import EduCard from '../utility/eduCard';
import { cerData, eduData } from '../data/data';
import Heading from '../utility/Heading';


const Education = () => {
  const [show, setShow] = useState('edu')
  const activeBtn =
    "bg-linear-to-bl from-secondaryColor to-primaryColor text-white scale-105";

  const inactiveBtn =
    "bg-white/15 dar text-ternaryColor";

  return (
    <div id='education' className='bg-white dark:bg-background text-black dark:text-white'>
      <div className='max-w-7xl px-4 py-16 mx-auto'>

        <Heading
          icon={<IoSchoolSharp />}
          title="Education"
          subtitle="Education & Certificate"
          description="A section of my most impactful technical and educational journey"
        />

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
                      <EduCard data={item} />
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
                      <EduCard data={item} />
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