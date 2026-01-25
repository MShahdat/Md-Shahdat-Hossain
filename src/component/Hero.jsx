import React from 'react';
import me from '/shahdat.png';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import resume from '/Shahdat_Hossain_Resume.pdf';

const link = [
  {
    icon: <FaFacebook className='size-5' />,
    to: 'https://www.facebook.com/md.shahdat.hossain.547522/',
  },
  {
    icon: <FaTwitter className='size-5' />,
    to: 'https://x.com/MdShahdat25',
  },
  {
    icon: <FaInstagram className='size-5' />,
    to: 'https://www.instagram.com/sahadathossain85/',
  },
  {
    icon: <FaGithub className='size-5' />,
    to: 'https://github.com/MShahdat',
  },
  {
    icon: <FaLinkedin className='size-5' />,
    to: 'https://www.linkedin.com/in/md-shahdat-hossain/',
  }
]

const Hero = () => {
  return (
    <div id='home' className=' bg-black text-white overflow-auto'>
      <div className='max-w-7xl px-4 py-12 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 space-y-8 space-x-4'>
          <div className=' flex flex-col gap-4 lg:gap-8 items-start lg:py-12'>
            <h3 className='text-[16px] lg:text-xl font-medium uppercase'>Hello, I'm</h3>
            <h1 className='text-3xl  lg:text-5xl font-bold uppercase text-primary '>Md. Shahdat Hossain</h1>
            <p className=' lg:text-xl font-medium '>Fontend Developer | React.js | JavaScript | Tailwind CSS</p>
            <p className='text-[14px] text-justify lg:text-[16px] leading-normal tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, incidunt! Qui itaque perferendis fugit excepturi vero soluta, possimus unde commodi.</p>
            <div className='mt-4 flex flex-col md:flex-row gap-4 '>
              <a href='#contact' className='text-center text-[16px] font-medium border bg-gradient-to-r from-primary to-secondary border-primary px-6 py-2 rounded-lg shadow-2xl shadow-primary hover:scale-101'>Get in Touch</a>
              <button onClick={() => {
                window.open(resume, '_blank', 'noopener, noreferrer');
              }} className='text-[16px] font-medium hover:bg-gradient-to-r hover:from-secondary hover:to-primary transform ease-in-out transition-colors duration-300 border border-primary px-6 py-2 rounded-lg bg-white/5 shadow-2xl hover:scale-101  hover:shadow-primary'>Download Resume</button>
            </div>
            <div className='mt-4 flex gap-4'>
              {
                link.map((li, idx) => (
                  <a href={li.to} target='_blank' key={idx} className='flex flex-col items-center justify-center size-10 rounded-full text-primary border border-secondary bg-white/5 ring-0 ring-primary hover:ring-2 hover:scale-102 transform ease-in-out duration-300'>
                    {
                      li.icon
                    }
                  </a>
                ))
              }
            </div>
          </div>
          <div className=' flex flex-col items-center w-full justify-center bg-red-00'>
            <div className='border border-primary/40 w-9/11 sm:w-3/6 md:w-8/12 rounded-xl px-0 md:px-0 bg-green-00'>
              <img src={me} className='lg:h-140 h-100 w-full mx-auto rounded-xl object-cover shadow-xl hover:shadow-primary transform ease-in-out duration-300'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;