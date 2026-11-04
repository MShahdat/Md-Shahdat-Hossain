import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaDownload } from 'react-icons/fa6';
import { useGetConfigById, useGetServices } from "../hook/index.hook"
import ButtonLink from '../utility/btn.link';



const quickLinks = [
  { path: '#about', label: 'About' },
  { path: '#skills', label: 'Skills' },
  { path: '#projects', label: 'Projects' },
  { path: '#services', label: 'Services' },
  { path: '#education', label: 'Education' }
];


const Footer = () => {
  const year = new Date().getFullYear();

  const { data: configData } = useGetConfigById()
  const { data: serviceData } = useGetServices()


  const config = configData?.data ?? undefined
  const resume = config?.resumeUrl ?? undefined
  const services = serviceData?.data ?? []

  return (
    <footer className="bg-[#FAFAFB] dark:bg-[#060121] text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
      <div className="h-px bg-gradient-to-r from-transparent via-primaryColor/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 pt-12 pb-6">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Brand */}
          <div>
            <a href="#home" className="inline-block">
              <span className="text-[17px] font-bold uppercase tracking-wide bg-gradient-to-r from-ternaryColor to-primaryColor bg-clip-text text-transparent">
                {config?.name ?? "-"}
              </span>
            </a>
            <p className="mt-1 text-[14px] font-medium tracking-wide text-black dark:text-white">
              {config?.role ?? "-"}
            </p>
            <p className="mt-3 text-[14px] leading-relaxed">
              Building scalable APIs and polished UIs with React, Node.js and
              PostgreSQL.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex rounded-full size-2 bg-green-500" />
              </span>
              <span className="text-neutral-700 dark:text-neutral-300">
                Open to work
              </span>
            </p>
            <div className="mt-4 flex items-center gap-2.5">
              <a
                href={config?.linkedin ?? ""}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center size-9 rounded-lg border border-neutral-300 dark:border-white/15 text-neutral-600 dark:text-neutral-300 hover:text-primaryColor hover:border-primaryColor/60 transition-colors"
              >
                <FaLinkedin className="size-4" />
              </a>
              <a
                href={config?.github ?? ""}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center size-9 rounded-lg border border-neutral-300 dark:border-white/15 text-neutral-600 dark:text-neutral-300 hover:text-primaryColor hover:border-primaryColor/60 transition-colors"
              >
                <FaGithub className="size-4" />
              </a>
              <a
                href={`mailto:${config?.email ? config?.email : "mdshahdat2504@gmail.com"}`}
                aria-label="Email"
                className="inline-flex items-center justify-center size-9 rounded-lg border border-neutral-300 dark:border-white/15 text-neutral-600 dark:text-neutral-300 hover:text-primaryColor hover:border-primaryColor/60 transition-colors"
              >
                <MdEmail className="size-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links — 6 links in 2 columns */}
          <nav aria-label="Footer quick links">
            <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-500">
              Quick Links
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-x-4 gap-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.path}
                    className="text-[14px] font-medium hover:text-primaryColor transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: Services / Expertise */}
          <nav aria-label="Footer services">
            <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-500">
              Services
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#service"
                    className="text-[14px] font-medium hover:text-primaryColor transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 4: For Recruiters */}
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-500">
              For Recruiters
            </p>
            <p className="mt-4 pb-2 text-[14px] leading-relaxed">
              Hiring for full-time or freelance? Let&apos;s talk.
            </p>

            <ButtonLink
              title={"Download Resume"}
              url={resume}
              target={"_blank"}
              icon={<FaDownload />}
              css={"bg-linear-to-bl from-primaryColor to-secondaryColor text-white w-fit"}
            />
            <a
              href="mailto:mdshahdat2504@gmail.com"
              className="mt-3 block text-[14px] hover:text-primaryColor transition-colors"
            >
              mdshahdat2504@gmail.com
            </a>
            <p className="mt-2 flex items-center gap-1.5 text-[13px]">
              <MdLocationOn className="size-4 text-ternaryColor dark:text-primaryColor" />
              Dhaka, Bangladesh
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-5 border-t border-neutral-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-[13px]">
            © {year} Md. Shahdat Hossain. All rights reserved.
          </p>
          <p className="text-[12px] font-mono text-neutral-500 dark:text-neutral-500">
            React · Tailwind CSS · Node.js · PostgreSQL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
