import React, { useRef, useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";
import { FaLocationArrow, FaGithubSquare  } from "react-icons/fa";
import { toast } from 'react-toastify';
import { IoMdCall } from "react-icons/io";
import emailjs from '@emailjs/browser';


const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('clicked')

    emailjs.sendForm('service_14h6jbl', 'template_glhotqd', form.current, {
        publicKey: 'JzPOWBOssaZtpLF6o',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setName('');
          setEmail('');
          setMsg('')
          toast('Message Sent Successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleCopy = async () => {
    try{
      await navigator.clipboard.writeText('mdshahdat2504@gmail.com');
      toast('Email Copied!');
    } catch(err){
      console.error('Faild Error!', err)
    }
  }

  return (
    <div id='contact' className='bg-black text-white'>
      <div className='max-w-7xl px-4 py-16 mx-auto'>
        <div >
          <h1 className='text-3xl lg:text-4xl font-bold text-center text-primary tracking-wider bg-white/5 shadow-2xl shadow-primary w-fit mx-auto'>Get In Touch</h1>
          <div className='mt-3 w-[150px] lg:w-[200px] mx-auto h-[3px] rounded-2xl bg-primary'></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-16 md:px-8'>
          <div className='bg-white/5 border-primary/30 rounded-lg p-4'>
            <h1 className='text-[18px] md:text-[20px] leading-relaxed tracking-wide mt-1 text-white/80'>Let's build something meaningful—product, research, or collaboration.</h1>
            <div className='mt-6 flex flex-col'>
              <div className='group border rounded-lg mt-4 border-primary/20 p-4 flex items-center justify-between'>
                <div>
                  <div className='flex items-center gap-2'>
                    <span className='text-[19px] text-primary'>
                      <MdEmail />
                    </span>
                    <p className='text-[16px] text-white/60'>Email</p>
                  </div>
                  <p className='mt-1 px-6 tracking-wider group-hover:text-primary transform easy-in-out duration-300'>mdshahdat@gmail.com</p>
                </div>
                <div onClick={() => handleCopy()} className='border px-3 py-2 border-primary rounded cursor-pointer'>
                  <FaRegCopy className='text-[14px] text-primary' />
                </div>
              </div>
              <a href='https://www.linkedin.com/in/md-shahdat-hossain/' target='_blank' className=' border rounded-lg mt-2 border-primary/20 p-4 group'>
                <div className='flex items-center gap-2'>
                  <span className='text-[19px] text-primary'>
                    <FaLinkedin />
                  </span>
                  <p className='text-[16px] text-white/60'>Linkedin</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='mt-1 px-6 tracking-wider group-hover:text-primary transform easy-in-out duration-300'>mdshahdat-hossain</p>

                </div>
              </a>
              <a href='https://github.com/MShahdat' target='_blank' className=' border rounded-lg mt-2 border-primary/20 p-4 group'>
                <div className='flex items-center gap-2'>
                  <span className='text-[19px] text-primary'>
                    <FaGithubSquare  />
                  </span>
                  <p className='text-[16px] text-white/60'>Github</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='mt-1 px-6 tracking-wider group-hover:text-primary transform easy-in-out duration-300'>mdshahdat-hossain</p>

                </div>
              </a>
              <div className=' border rounded-lg mt-2 border-primary/20 p-4 group'>
                <div className='flex items-center gap-2'>
                  <span className='text-[19px] text-primary'>
                    <IoMdCall />
                  </span>
                  <p className='text-[16px] text-white/60'>Phone</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='mt-1 px-6 tracking-wider group-hover:text-primary transform easy-in-out duration-300'>+8801885374041</p>
                </div>
              </div>
              {/* <div className=' border rounded-lg mt-4 border-primary/20 p-4 group'>
                <div className='flex items-center gap-2'>
                  <span className='text-[19px] text-primary'>
                    <FaMapLocationDot />
                  </span>
                  <p className='text-[16px] text-white/60'>Location</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='mt-1 px-6 tracking-wider group-hover:text-primary'>Dhaka, Bangladesh</p>
                </div>
              </div> */}
            </div>
          </div>
          <div className='border border-primary/30 px-4 md:px-10 py-4 bg-white/10 backdrop-blur-2xl rounded-lg'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-6'>
              <div>
                <label className='pl-1'>Name</label>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Your Name' name='name' value={name} required className='mt-1 border border-primary/30 px-4 py-2.5 outline-primary bg-black/20 rounded-lg w-full' />
              </div>

              <div>
                <label className='pl-1'>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your Email' name='email' value={email} required className='mt-1 border border-primary/30 px-4 py-2.5 outline-primary bg-black/20 rounded-lg w-full' />
              </div>

              <div>
                <label className='pl-1'>Message</label>
                <textarea onChange={(e) => setMsg(e.target.value)} type='text' rows={4} placeholder='Write message' name='msg' value={msg} required className='mt-1 outline-primary text-[16px] bg-black/20 border rounded-lg border-primary/30 outline-primary px-3 py-2.5 w-full'></textarea>
              </div>

              <div className='flex justify-between items-center gap-6'>
                <button className='flex items-center justify-center gap-4 px-4 py-2 border-2 rounded-lg border-primary/40 w-full bg-gradient-to-r from-primary to-secondary border-primary shadow-2xl shadow-primary'>
                  <FaLocationArrow />
                  <input type="submit" />
                </button>
                <div onClick={() => handleCopy()} className=' flex items-center gap-4 py-2 border-2 border-primary/40 w-full justify-center px-4 rounded-lg shadow-2xl hover:shadow-primary cursor-pointer'>
                  <FaRegCopy />
                  <div>Copy </div>
                </div>
              </div>
            </form>
            <p className='text-center mt-6 text-[14px]'>Or email me directly at <span className='text-primary font-medium'>mdshahdat2504@gmail.com</span></p>
          </div>
        </div>
      </div>
      <div className='bg-primary/30 text-center py-8'>
        <p className='text-[15px]'>© 2026 Md Shahdat Hossain. All rights reserved.</p>
        <p className='mt-2'>Designed & Developed with ❤️ by Shahdat Hossain</p>
      </div>
    </div>
  );
};

export default Contact;