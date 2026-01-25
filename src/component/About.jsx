import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import me from '/shahdat1.png';
import cv from '/Md. Shahdat Hossain_CV.pdf';

const About = () => {

  const link = [
    {
      icon: <FaFacebook />,
      to: 'https://www.facebook.com/md.shahdat.hossain.547522/',
    },
    {
      icon: <FaTwitter />,
      to: 'https://x.com/MdShahdat25',
    },
    {
      icon: <FaInstagram />,
      to: 'https://www.instagram.com/sahadathossain85/',
    },
    {
      icon: <FaGithub />,
      to: 'https://github.com/MShahdat',
    },
    {
      icon: <FaLinkedin />,
      to: 'https://www.linkedin.com/in/md-shahdat-hossain/',
    }
  ]

  return (
    <div id='about' className='bg-black  text-white'>
      <div className='max-w-7xl px-4 py-16 mx-auto'>
        <div >
          <h1 className='text-3xl lg:text-4xl font-bold text-center text-primary tracking-wider bg-white/5 shadow-2xl shadow-primary w-fit mx-auto'>About Shahdat</h1>
          <div className='mt-3 w-[150px] lg:w-[200px] mx-auto h-[3px] rounded-2xl bg-primary'></div>
        </div>

        <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 '>
          <div className='order-2 md:order-1 bg-green-00 h-100 w-full'>
            <div className='xl:px-8 bg-red-00 h-full w-full sm:w-2/3 md:w-full lg:w-4/5 mx-auto'>
              <img src={me} className='h-full w-screen object-cover' />
            </div>
          </div>

          <div className='order-1 md:order-2 border border-primary/20 px-4 py-6 bg-white/10 rounded-lg'>
            <p className='tracking-wider leading-relaxed text-justify text-white/80'>I'm a dedicated Frontend Developer specializing in building modern, scalable, and user-centric web applications with a strong focus on accessibility, performance, and clean architecture. I enjoy translating complex requirements into intuitive and visually refined user experiences.</p>

            <div
            >
              <h3 className='mt-8 font-medium text-[17px]'>What I Do</h3>
              <div className='tracking-wider leading-relaxed text-justify text-white/80'>
                <p>✅ Build scalable and well-structured frontend architectures</p>
                <p>✅ Focus on clean UI, accessibility, and smooth user interactions</p>
                <p>✅ Continuously learn and apply modern tools, frameworks, and best practices</p>
              </div>
            </div>

            <div >
              <div className='mt-8 flex flex-col md:flex-row gap-4 '>
                <button
                  onClick={() => {
                    window.open(cv, '_blank', 'noopener, noreferrer');
                  }}
                  className='text-[16px] font-medium hover:bg-gradient-to-r hover:from-secondary hover:to-primary transform ease-in-out transition-colors duration-300 border border-primary px-6 py-2 rounded-lg bg-white/5 shadow-2xl hover:scale-101  hover:shadow-primary'>Download CV</button>
                <a href='#contact' className='text-center text-[16px] font-medium border bg-gradient-to-r from-primary to-secondary border-primary px-6 py-2 rounded-lg shadow-2xl shadow-primary hover:scale-101'>Get in Touch</a>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default About;