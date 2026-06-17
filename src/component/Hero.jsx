import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import resume from '/Md-Shahdat-Hossain-cv.pdf'
import { FaDownload } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { jsSvg, nextSvg, nodeSvg, postgresqlSvg, reactSvg, tsSvg } from '../utility/svg';


const link = [
  {
    icon: <FaGithub className='size-6 xl:size-7' />,
    to: 'https://github.com/MShahdat',
  },
  {
    icon: <FaLinkedin className='size-6 xl:size-7' />,
    to: 'https://www.linkedin.com/in/md-shahdat-hossain/',
  },
  {
    icon: <FaFacebook className='size-6 xl:size-7' />,
    to: 'https://www.facebook.com/md.shahdat.hossain.547522/',
  },
  {
    icon: <FaTwitter className='size-6 xl:size-7' />,
    to: 'https://x.com/MdShahdat25',
  },
  {
    icon: <FaInstagram className='size-6 xl:size-7' />,
    to: 'https://www.instagram.com/sahadathossain85/',
  },

]

const expert = [
  'Full-Stack Developer',
  'React & Node.js Expert',
  'Problem Solver',
  'Open to Opportunities',
  'AI/ML Enthusiast',
];

const Hero = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = expert[index % expert.length];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setIndex((prev) => prev + 1);
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          isDeleting
            ? current.substring(0, prev.length - 1)
            : current.substring(0, prev.length + 1)
        );
      }, isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <div id='home' className='relative bg-[#030014] text-white overflow-auto'>
      <div className='max-w-6xl px-4 py-4 mx-auto'>
        <div className='grid grid-cols-1 bg-primaryColor/0 lg:grid-cols-2 space-y-8 space-x-4'>
          <div className=' bg-red-00 flex flex-col gap-3 items-start lg:py-12'>
            <div className='flex flex-row items-center gap-2 px-2 py-0.5 md:px-6 md:py-1 tracking-normal border border-secondaryColor/50 bg-ternaryColor/20 rounded-full'>
              <p>👋</p>
              <p className='text-primaryColor font-semibold text-[13px] md:text-[14px] uppercase whitespace-pre tracking-wide'>Available for work</p>
            </div>
            <h3 className='text-[16px] lg:text-[18px] tracking-wider'>Hello, I'm
              <span className='text-[16px]  lg:text-[20px] font-bold text-ternaryColor'> Md. Shahdat Hossain</span>
            </h3>
            <p className='text-4xl lg:text-6xl font-bold leading-tight font-["Syne"]'>
              <p>Full-Stack</p>
              <p className='-mt-2 bg-linear-to-r from-ternaryColor via-primaryColor to-secondaryColor bg-clip-text text-transparent'>Web Developer</p>
            </p>
            <p className='text-lg lg:text-2xl font-semibold text-ternaryColor'>
              {text}
              <span className='animate-pulse'>|</span>
            </p>
            <p className='mt-2 lg:mt-4 text-[16px] text-justify text-white/40 lg:text-[17px] leading-relaxed tracking-wider font-mono'>Develop reusable component-based code, design a clean and scalable architecture, robust API development, JWT based secure authentication & authorization and high-performance web application</p>
            <div className='mt-4 flex flex-col md:flex-row gap-4 '>
              <a href='#contact' className='flex items-center gap-2 text-center text-[16px] font-medium border bg-gradient-to-r from-primaryColor to-ternaryColor border-primaryColor px-6 py-2 rounded-lg shadow-2xl shadow-primaryColor hover:scale-101'>
                <FaRocket />
                <p>Get in Touch</p>
              </a>
              <button onClick={() => {
                window.open(resume, '_blank', 'noopener, noreferrer');
              }} className='flex gap-2 items-center text-[16px] font-medium hover:bg-gradient-to-r hover:from-ternaryColor hover:to-primaryColor transform ease-in-out transition-colors duration-300 border border-primaryColor px-6 py-2 rounded-lg bg-white/5 shadow-2xl hover:scale-101  hover:shadow-primaryColor'>
                <FaDownload />
                <p>Download Resume</p>
              </button>
            </div>
            <div className='mt-4 flex gap-4'>
              {
                link.map((li, idx) => (
                  <a href={li.to} target='_blank' key={idx} className='flex flex-col items-center justify-center size-10  xl:size-12 rounded-full text-primaryColor border border-primaryColor/50 bg-white/5 ring-0 ring-primaryColor hover:ring-2 hover:scale-102 transform ease-in-out duration-300'>
                    {
                      li.icon
                    }
                  </a>
                ))
              }
            </div>
          </div>
          <div className='relative bg-green-00 flex flex-col items-center w-full justify-center bg-red-00'>

            {/* badge */}
            <div className='opacity-0 md:opacity-100 float-1 absolute top-8 lg:top-30 right-36 flex items-center gap-2 bg-primaryColor/20 border border-primaryColor/30 px-3 py-1.5 rounded-full text-sm font-semibold shadow-2xl shadow-ternaryColor'>
              <span className='size-4 flex items-center justify-center'>{reactSvg}</span>
              <p>React.js</p>
            </div>

            <div className='opacity-0 md:opacity-100 float-2 absolute top-8 lg:top-15 left-10 lg:-left-30 flex items-center gap-2 bg-primaryColor/20 border border-primaryColor/30 px-3 py-1.5 rounded-full text-sm font-semibold shadow-2xl shadow-ternaryColor'>
              <span className='size-4 flex items-center justify-center'>{nodeSvg}</span>
              <p>Node.js</p>
            </div>

            <div className='opacity-0 md:opacity-100 float-3 absolute bottom-25 right-20 flex items-center gap-2 bg-primaryColor/20 border border-primaryColor/30 px-3 py-1.5 rounded-full text-sm font-semibold shadow-2xl shadow-ternaryColor'>
              <span className='size-4 flex items-center justify-center'>{tsSvg}</span>
              <p>TypeScript</p>
            </div>

            <div className='opacity-0 md:opacity-100 float-4 absolute bottom-8 lg:bottom-35 left-10 lg:-left-20 flex items-center gap-2 bg-primaryColor/20 border border-primaryColor/30 px-3 py-1.5 rounded-full text-sm font-semibold shadow-2xl shadow-ternaryColor'>
              <span className='size-4 flex items-center justify-center'>{postgresqlSvg}</span>
              <p>PostgreSQL</p>
            </div>

            <div className='border border-primaryColor/40 w-full sm:w-3/6 md:w-8/12 lg:w-10/12 rounded-xl bg-black/40 shadow-2xl shadow-primaryColor overflow-hidden font-mono text-sm'>
              {/* Window header */}
              <div className='flex items-center gap-2 px-4 py-2.5 border-b border-primaryColor/20'>
                <div className='w-3 h-3 rounded-full bg-red-500'></div>
                <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                <div className='w-3 h-3 rounded-full bg-green-500'></div>
                <span className='ml-2 text-xs text-white/50'>developer.js</span>
              </div>

              {/* Code body */}
              <div className='px-5 py-5 leading-8 text-white/90'>
                <div><span className='text-purple-400'>const</span> developer = {'{'}</div>
                <div className='pl-5'>name: <span className='text-ternaryColor'>'Md. Shahdat Hossain'</span>,</div>
                <div className='pl-5'>role: <span className='text-ternaryColor'>'Full-Stack Developer'</span>,</div>
                <div className='pl-5'>skills: [<span className='text-secondaryColor'>'React'</span>, <span className='text-secondaryColor'>'Node.js'</span>, <span className='text-secondaryColor'>'TypeScript'</span>],</div>
                <div className='pl-5'>passion: <span className='text-ternaryColor'>'Building scalable apps'</span>,</div>
                <div className='pl-5'>available: <span className='text-primaryColor'>true</span>,</div>
                <div>{'}'};</div>
                <div className='mt-2'>
                  <span className='text-purple-400'>console</span>.log(developer.role);
                  <span className='inline-block w-2 h-4 bg-white align-middle ml-1 animate-pulse'></span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='bg-green-00 flex flex-col items-center w-full justify-center bg-red-00'>
            <div className=' border border-primaryColor/40 w-9/11 sm:w-3/6 md:w-8/12 rounded-xl px-0 md:px-0 bg-green-00'>
              <img src={me} className='lg:h-140 h-110 w-full mx-auto rounded-xl object-cover shadow-2xl shadow-primaryColor transform ease-in-out duration-300' />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;