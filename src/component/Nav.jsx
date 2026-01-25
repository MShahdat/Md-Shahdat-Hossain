import React, { useState, useEffect } from 'react';
import { IoMdMenu} from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaTwitter, FaHome } from "react-icons/fa";
import { MdManageAccounts, MdContactPhone } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";
import { GrProjects } from "react-icons/gr";
import me from '/shahdat1.png';
import { IoSchool } from "react-icons/io5";


const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = navitem.map(item => item.path.substring(1));
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  const navitem = [
    { path: '#home', link: 'Home', icon: <FaHome /> },
    { path: '#about', link: 'About', icon: <MdManageAccounts /> },
    { path: '#education', link: 'Education', icon: <IoSchool /> },
    { path: '#skills', link: 'Skills', icon: <LuNotebookPen /> },
    { path: '#projects', link: 'Projects', icon: <GrProjects /> },
    { path: '#contact', link: 'Contact', icon: <MdContactPhone /> },
  ]

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


  return (
    <div className={`sticky left-0 top-0 z-50 w-full bg-black text-white border-b border-primary/20`}>
      <nav className='max-w-7xl px-4 py-4 mx-auto flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div onClick={() => {
            setOpen(!open)
          }} className={`block md:hidden text-primary border border-secondary rounded-md px-2 py-0.5`}>
            {open ? <RxCross2 className='size-6 md:size-8' /> : <IoMdMenu className='size-6 md:size-8'/>}
          </div>
          <a href='#home' className='text-xl text-primary sm:text-xl lg:text-2xl font-bold uppercase'>
            <div className='flex gap-1 items-center'>
              <h3 className='tracking-wide flex flex-col leading-tight shadow-2xl shadow-primary'>Shahdat <span className='text-[10px] sm:text-[12px] px-1'>Hossain</span></h3>
            </div>
            {/* <h1 className='text-xl lg:text-2xl uppercase text-[#6F00FF] font-primary'>Shahdat Hossain</h1> */}
          </a>
        </div>

        <div className='flex items-center gap-3 lg:gap-6'>
          {navitem.map((item, idx) => {
            return (
              <a
                key={idx}
                href={item.path}
                onClick={() => setActiveSection(item.path)}
                className={`relative hidden md:block text-[16px] font-semibold tracking-[1px] transition-colors hover:text-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${activeSection === item.path ? 'text-primary after:w-full' : ''
                  }`}
              >
                {item.link}
              </a>
            )
          })}

        </div>

      </nav>

      {/* Mobile menu */}
      <div className={`fixed left-0 md:hidden transform transition-transform duration-500 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='bg-black w-screen'>
          <div className='bg-black text-white w-[320px] h-screen'>
            <div className='flex flex-col gap-10 py-8  px-10 md:px-16'>
              <div className='flex flex-col gap-4 items-start'>
                <img src={me} className='h-32 w-32 rounded-full border-[6px] border-primary object-fill mx-auto'></img>
                <h2 className='text-[24px] font-medium'>Md. Shahdat Hossain</h2>
                <div className='flex gap-3'>
                  {
                    link.map((li, idx) => (
                      <a href={li.to} target='_blank' key={idx} className='flex flex-col items-center justify-center size-9 rounded-full bg-primary'>
                        {
                          li.icon
                        }
                      </a>
                    ))
                  }
                </div>
              </div>
              <div className='flex flex-col gap-6'>
                {
                  navitem.map((item, idx) => (
                    <a onClick={() => {
                      setOpen(!open)
                    }} key={idx} href={item.path} className={`flex items-center gap-3 ${activeSection === item.path ? 'text-primary underline' : ''
                      }`}>
                      <span className='text-[18px]'>{item.icon}</span>
                      <h2 className='text-[17px] font-medium'>{item.link}</h2>
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Nav;
