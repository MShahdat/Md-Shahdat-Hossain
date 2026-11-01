import React, { useState, useEffect, useContext } from 'react';
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaTwitter, FaHome, FaMoon } from "react-icons/fa";
import { MdManageAccounts, MdContactPhone } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";
import { GrProjects } from "react-icons/gr";
import me from '/shahdat1.png';
import { IoSchool, IoColorPalette } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { RiComputerLine } from "react-icons/ri";
import { SiOpenapiinitiative } from "react-icons/si";
import { dataContext } from '../context/Context';




const Nav = () => {
  const [, , , , open, setOpen, scrolled, setScrolled, activeSection, setActiveSection] = useContext(dataContext)

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  )

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  const handleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }


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
    { path: '#skills', link: 'Skills', icon: <LuNotebookPen /> }, { path: '#projects', link: 'Projects', icon: <GrProjects /> },
    { path: '#services', link: 'Service', icon: <MdManageAccounts /> },
    { path: '#education', link: 'Education', icon: <IoSchool /> },
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

  // bg-[#060121]

  return (
    <div className={`sticky left-0 top-0 z-40 w-full bg-white dark:bg-[#060121] text-black dark:text-white`}>
      <nav className='max-w-7xl mx-auto px-4 pt-4 pb-4'>
        <div className=' flex items-center justify-between border border-primaryColor/40 py-2 px-4 md:px-8 rounded-full bg-black/10 backdrop-blur-xl'>
          <div className='flex items-center gap-4'>
            <a href='#home' className='text-xl text-primaryColor sm:text-xl lg:text-2xl font-bold uppercase'>
              <div className='flex gap-1 items-center'>
                <h3 className='tracking-wide flex flex-col leading-tight bg-linear-to-b from-ternaryColor to-primaryColor bg-clip-text text-transparent text-[14px] lg:text-[15px]'>Shahdat <span className='text-[10px] sm:text-[12px] px-1'>Hossain</span></h3>
              </div>
            </a>
          </div>
          <div className='flex items-center gap-3 lg:gap-6'>
            {navitem.map((item, idx) => {
              return (
                <a
                  key={idx}
                  href={item.path}
                  onClick={() => setActiveSection(item.path)}
                  className={`relative hidden md:block text-[15px] font-semibold tracking-[1px] transition-colors hover:text-primaryColor after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primaryColor after:transition-all after:duration-300 hover:after:w-full ${activeSection === item.path ? 'bg-linear-to-r from-ternaryColor to-primaryColor bg-clip-text text-transparent after:w-full' : ''
                    }`}
                >
                  {item.link}
                </a>
              )
            })}

          </div>
          <div className='flex items-center gap-4'>
            <button onClick={() => handleTheme()} className=' flex items-center gap-2'>
              {theme === 'light' ? <FiSun className='size-4' /> : <FaMoon className='size-4' />}
            </button>
            <div onClick={() => {
              setOpen(!open)
            }} className={`block md:hidden text-primaryColor/80 border border-primaryColor/70 rounded-md px-1 py-0.5`}>
              {open ? <RxCross2 className='size-6 md:size-8' /> : <IoMdMenu className='size-6 md:size-8' />}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed left-0 top-18 md:hidden transform transition-transform duration-500 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='bg-white dark:bg-black text-black dark:text-white w-screen'>
          <div className=' w-[320px] h-screen'>
            <div className='flex flex-col gap-8 py-8  px-10'>
              <div className='flex flex-col gap-3 items-start'>
                <img src={me} className='h-32 w-32 rounded-full border-[6px] border-ternaryColor object-fill mx-auto'></img>
                <h2 className='text-[24px] font-medium'>Md. Shahdat Hossain</h2>
                <div className='flex gap-3'>
                  {
                    link.map((li, idx) => (
                      <a href={li.to} target='_blank' key={idx} className='flex flex-col items-center justify-center size-9 rounded-full bg-ternaryColor'>
                        <span className='text-white'>{li.icon}</span>
                      </a>
                    ))
                  }
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                {
                  navitem.map((item, idx) => (
                    <a onClick={() => {
                      setOpen(!open)
                    }} key={idx} href={item.path} className={`flex items-center gap-3 ${activeSection === item.path ? 'text-ternaryColor underline' : ''
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
