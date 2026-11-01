import React, { useRef, useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FaRegCopy, FaRocket } from "react-icons/fa6";
import { FaLocationArrow, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { toast } from 'react-toastify';
import { IoMdCall } from "react-icons/io";
import emailjs from '@emailjs/browser';
import { GrServices } from "react-icons/gr";
import { IoSchoolSharp } from "react-icons/io5";
import Heading from '../utility/Heading';


const blockedDomains = [
  "mailinator.com",
  "10minutemail.com",
  "tempmail.com",
  "guerrillamail.com",
  "temp-mail.org",
  "yopmail.com",
  "fakeinbox.com",
  "dispostable.com",
  "trashmail.com",
  "maildrop.cc",
  "getnada.com",
  "moakt.com",
  "emailondeck.com",
  "sharklasers.com",
];

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email) => {
    const regex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    return regex.test(email);
  };

  const isDisposableEmail = (email) => {
    const domain = email.split("@")[1]?.toLowerCase();

    return blockedDomains.includes(domain);
  };


  const sendEmail = (e) => {
    e.preventDefault();

    if (name.length < 3) {
      toast.error("Name must be at least 3 characters.");
      return;
    }


    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Disposable email validation
    if (isDisposableEmail(email)) {
      toast.error("Temporary email addresses are not allowed.");
      return;
    }

    if (msg.length < 10) {
      toast.error("Message should be at least 10 characters.");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_2mlpq18",
        "template_nhxxcma",
        form.current,
        {
          publicKey: "QJeEbmOk74-3zfi5y",
        }
      )
      .then(() => {
        toast.success("Message sent successfully!");

        setName("");
        setEmail("");
        setMsg("");
      })
      .catch((error) => {
        console.error(error);

        toast.error("Failed to send message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('mdshahdat2504@gmail.com');
      toast('Email Copied!');
    } catch (err) {
      console.error('Faild Error!', err)
    }
  }

  return (
    <div id='contact' className='dark:bg-background bg-white text-black dark:text-white'>
      <div className='max-w-7xl px-4 py-16 mx-auto'>

        <Heading
          icon={<FaRocket />}
          title="Get In Touch"
          subtitle="Let's Work Together"
          description="Have a project in mind? I'd love to hear about it"
        />


        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-16 md:px-8'>
          <div className='dark:bg-black/15 bg-white border border-primaryColor/20 rounded-lg p-4'>
            <h1 className='text-[18px] md:text-[20px] leading-relaxed tracking-wide mt-1 text-ternaryColor font-medium dark:text-white/80'>Let's build something meaningful—product, research, or collaboration.</h1>
            <div className='mt-6 flex flex-col'>
              <div className='group border rounded-lg mt-4 p-4 flex items-center justify-between bg-primaryColor/5 md:bg-primaryColor/0 hover:bg-primaryColor/5 border-primaryColor/50 sm:border-primaryColor/20 hover:border-primaryColor/50 transform ease-in-out duration-300'>
                <div className='w-full'>
                  <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center gap-2'>
                      <span className='text-[19px] text-ternaryColor'>
                        <MdEmail className='dark:text-primaryColor' />
                      </span>
                      <p className='text-[16px] text-ternaryColor font-medium dark:text-white/60'>Email</p>
                    </div>
                    <div onClick={() => handleCopy()} className='border px-3 py-2 border-primaryColor rounded cursor-pointer'>
                      <FaRegCopy className='text-[14px] text-ternaryColor dark:text-primaryColor' />
                    </div>
                  </div>
                  <p className='mt-1 px-6 tracking-wider dark:group-hover:text-primaryColor transform easy-in-out duration-300'>mdshahdat2504@gmail.com</p>
                </div>

              </div>
              <a href='https://www.linkedin.com/in/md-shahdat-hossain/' target='_blank' className=' border rounded-lg mt-2 p-4 group bg-primaryColor/5 md:bg-primaryColor/0 hover:bg-primaryColor/5 border-primaryColor/50 sm:border-primaryColor/20 hover:border-primaryColor/50 transform ease-in-out duration-300'>
                <div className='flex items-center gap-2'>
                  <span className='text-[19px] dark:text-primaryColor text-ternaryColor'>
                    <FaLinkedin />
                  </span>
                  <p className='text-[16px] text-ternaryColor font-medium dark:text-white/60'>Linkedin (Link)</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='mt-1 px-6 tracking-wider dark:group-hover:text-primaryColor transform easy-in-out duration-300'>mdshahdat-hossain</p>

                </div>
              </a>
              <a href='https://github.com/MShahdat' target='_blank' className=' border rounded-lg mt-2 p-4 group bg-primaryColor/5 md:bg-primaryColor/0 hover:bg-primaryColor/5 border-primaryColor/50 sm:border-primaryColor/20 hover:border-primaryColor/50 transform ease-in-out duration-300'>
                <div className='flex items-center gap-2'>
                  <span className='text-[19px] text-ternaryColor dark:text-primaryColor'>
                    <FaGithubSquare />
                  </span>
                  <p className='text-[16px] dark:text-white/60 text-ternaryColor font-medium'>Github (Link)</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='mt-1 px-6 tracking-wider dark:group-hover:text-primaryColor transform easy-in-out duration-300'>mdshahdat-hossain</p>

                </div>
              </a>
              <div className=' border rounded-lg mt-2 bg-primaryColor/5 md:bg-primaryColor/0 hover:bg-primaryColor/5 border-primaryColor/50 sm:border-primaryColor/20 hover:border-primaryColor/50 transform ease-in-out duration-300 p-4 group'>
                <div className='flex items-center gap-2'>
                  <span className='text-[19px] text-ternaryColor dark:text-primaryColor'>
                    <IoMdCall />
                  </span>
                  <p className='text-[16px] text-ternaryColor font-medium dark:text-white/60'>Phone</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='mt-1 px-6 tracking-wider dark:group-hover:text-primary transform easy-in-out duration-300'>+8801885374041</p>
                </div>
              </div>
            </div>
          </div>
          <div className='border border-primaryColor/20 px-4 md:px-10 py-4 dark:bg-black/15 backdrop-blur-2xl rounded-lg'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-6'>
              <div>
                <label className='pl-1'>Name</label>
                <input onChange={(e) => setName(e.target.value.replace(/[^a-zA-Z\s]/g, ""))} type="text" placeholder='Your Name' name='name' value={name} required className='mt-1 border border-primaryColor/30 px-4 py-2.5 outline-primaryColor dark:bg-black/20 rounded-lg w-full' />
              </div>

              <div>
                <label className='pl-1'>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your Email' name='email' value={email} required className='mt-1 border border-primaryColor/30 px-4 py-2.5 outline-primaryColor dark:bg-black/20 rounded-lg w-full' />
              </div>

              <div>
                <label className='pl-1'>Message</label>
                <textarea onChange={(e) => setMsg(e.target.value)} type='text' rows={4} placeholder='Write message' name='msg' value={msg} required className='mt-1 outline-primaryColor text-[16px] dark:bg-black/20 border rounded-lg border-primaryColor/30 px-3 py-2.5 w-full'></textarea>
              </div>

              <div className='flex justify-between items-center gap-6'>
                <button
                  disabled={loading}
                  className={`flex items-center justify-center gap-4 px-4 py-2 rounded-lg w-full shadow-2xl transition-all duration-300
    ${loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-linear-to-bl from-primaryColor to-secondaryColor hover:opacity-90 shadow-primaryColor"
                    }
    text-white`}
                >
                  <FaLocationArrow />

                  {loading ? "Sending..." : "Send Message"}
                </button>
                <div onClick={() => handleCopy()} className=' flex items-center gap-4 py-2 border-2 border-ternaryColor/40 text-ternaryColor w-full justify-center px-4 rounded-lg shadow-2xl hover:shadow-primaryColor cursor-pointer'>
                  <FaRegCopy />
                  <div>Copy </div>
                </div>
              </div>
            </form>
            <p className='text-center mt-6 text-[14px]'>Or email me directly at <span className='text-ternaryColor font-medium'>mdshahdat2504@gmail.com</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;