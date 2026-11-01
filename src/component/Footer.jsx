import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaDownload } from 'react-icons/fa6';

const quickLinks = [
  { path: '#about', label: 'About' },
  { path: '#skills', label: 'Skills' },
  { path: '#projects', label: 'Projects' },
  { path: '#services', label: 'Services' },
  { path: '#education', label: 'Education' }
];

const services = [
  { path: '#services', label: 'Full-Stack Development' },
  { path: '#services', label: 'API Design & Development' },
  { path: '#services', label: 'Database Design' },
  { path: '#projects', label: 'Backend Systems' },
  { path: '#projects', label: 'React Applications' },
];

const Footer = () => {
  const year = new Date().getFullYear();

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
                Md. Shahdat Hossain
              </span>
            </a>
            <p className="mt-1 text-[14px] font-medium tracking-wide text-black dark:text-white">
              Full-Stack Web Developer
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
                href="https://www.linkedin.com/in/md-shahdat-hossain/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center size-9 rounded-lg border border-neutral-300 dark:border-white/15 text-neutral-600 dark:text-neutral-300 hover:text-primaryColor hover:border-primaryColor/60 transition-colors"
              >
                <FaLinkedin className="size-4" />
              </a>
              <a
                href="https://github.com/MShahdat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center size-9 rounded-lg border border-neutral-300 dark:border-white/15 text-neutral-600 dark:text-neutral-300 hover:text-primaryColor hover:border-primaryColor/60 transition-colors"
              >
                <FaGithub className="size-4" />
              </a>
              <a
                href="mailto:mdshahdat2504@gmail.com"
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
                <li key={s.label}>
                  <a
                    href={s.path}
                    className="text-[14px] font-medium hover:text-primaryColor transition-colors"
                  >
                    {s.label}
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
            <p className="mt-4 text-[14px] leading-relaxed">
              Hiring for full-time or freelance? Let&apos;s talk.
            </p>
            <a
              href="/Md-Shahdat-Hossain-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-white bg-gradient-to-r from-primaryColor to-secondaryColor px-5 py-2 rounded-lg hover:opacity-90 transition-opacity shadow-md shadow-primaryColor/25"
            >
              <FaDownload className="size-3.5" />
              Download Resume
            </a>
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
