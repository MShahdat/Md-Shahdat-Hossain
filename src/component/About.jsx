
import me from '/shahdat1.png';
import cv from '/Md-Shahdat-Hossain-cv.pdf'
import { FaDownload, FaRocket } from "react-icons/fa6";
import { jsSvg, nextSvg, nodeSvg, postgresqlSvg, reactSvg, tsSvg } from '../utility/svg';

const About = () => {

  const tech = [
    { icon: reactSvg, name: 'React.js' },
    { icon: jsSvg, name: 'JavaScript' },
    { icon: nodeSvg, name: 'Node.js' },
    { icon: tsSvg, name: 'TypeScript' },
    { icon: postgresqlSvg, name: 'PostgreSQL' },
    { icon: nextSvg, name: 'Next.js' },
  ];

  return (
    <div id='about' className='bg-[#010108]  text-white'>
      <div className='max-w-6xl px-4 py-12 mx-auto'>
        <div className='flex flex-col items-center'>
          <div className='w-fit flex flex-row items-center gap-2 px-2 py-0.5 md:px-6 md:py-1 tracking-normal border border-secondaryColor/50 bg-ternaryColor/20 rounded-full shadow-2xl shadow-primaryColor'>
            <p>👤</p>
            <p className='text-primaryColor font-bold text-[13px] md:text-[14px] uppercase whitespace-pre tracking-wide'>About Me</p>
          </div>
        </div>

        <div className='mt-6 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 '>
          <div className='order-2 md:order-1 bg-green-00 h-full w-full flex items-center justify-center relative'>
            <div className=' w-4/5 sm:w-3/5 md:w-full lg:w-4/5 mx-auto'>
              <div className='absolute inset-0 bg-linear-to-r from-ternaryColor via-primaryColor to-secondaryColor rounded-2xl blur-2xl opacity-20'></div>

              <div className='relative border border-primaryColor/30 rounded-2xl overflow-hidden shadow-2xl shadow-primaryColor hover:shadow-primaryColor/80 transform transition-all duration-300 hover:scale-[1.02]'>
                <img src={me} className='w-full h-[340px] sm:h-[480px] md:h-[520px] object-cover' />
              </div>

              {/* <div className='absolute bottom-6 left-4 md:-bottom-8 md:-left-6 flex flex-col items-center justify-center border border-primaryColor/50 bg-gradient-to-br from-primaryColor to-secondaryColor px-4 py-3 rounded-xl shadow-xl shadow-primaryColor'>
                  <span className='text-2xl font-bold text-white'>2+</span>
                  <span className='text-xs font-medium text-white whitespace-nowrap'>Years Exp</span>
                </div> */}
            </div>
          </div>
          <div className=' order-2 md:order-2 border-primaryColor/20 md:px-2 py-0 pb-4 bg-white/0 rounded-lg shadow-xl transform ease-in-out duration-300 hover:border-primaryColor/60'>
            <h1 className='text-3xl md:text-4xl xl:text-5xl bg-linear-to-r from-ternaryColor via-primaryColor to-secondaryColor bg-clip-text text-transparent leading-tight font-bold'>Passionate Developer & Tech Enthusiast</h1>
            <p className='mt-6 text-md md:text-[17px] text-white/50 leading-relaxed tracking-wide'>I'm a full-stack web developer with experience building 5+ industry standard web applications. I specialized in React, JavaScript, TypeScript, Node.js, PostgreSQL, Tailwind CSS and so on. Skilled in responsive UI development, REST API development & integration, Redux Toolkit, state management, JWT authentication, and performance optimization</p>

            {/* tech */}
            <div className='mt-8 flex flex-wrap items-center gap-2'>
              {tech.map((t, idx) => (
                <div key={idx} className='flex items-center gap-2 border border-primaryColor/30 font-semibold text-ternaryColor bg-ternaryColor/12 px-4 py-1 rounded-full'>
                  <span className='size-4 flex items-center justify-center'>{t.icon}</span>
                  <span>{t.name}</span>
                </div>
              ))}
            </div>

            <div >
              <div className='mt-8 flex flex-col md:flex-row gap-4 '>
                <button
                  onClick={() => {
                    window.open(cv, '_blank', 'noopener, noreferrer');
                  }}
                  className='w-fit flex gap-2 items-center text-[16px] font-medium hover:bg-linear-to-r hover:from-secondaryColor hover:to-primaryColor transform ease-in-out transition-colors duration-300 border border-primaryColor px-6 py-2 rounded-lg bg-white/5 shadow-2xl hover:scale-101  hover:shadow-primaryColor'>
                  <FaDownload />
                  <p>Download CV</p>
                </button>
                <a href='#contact' className='w-fit flex gap-2 items-center text-center text-[16px] font-medium border bg-linear-to-r from-ternaryColor to-primaryColor border-primaryColor px-6 py-2 rounded-lg shadow-2xl shadow-primaryColor hover:scale-101'>
                  <FaRocket />
                  <p>Get in Touch</p>
                </a>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default About;