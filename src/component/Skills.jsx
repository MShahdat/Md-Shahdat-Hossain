
import { FaCode } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';
import Heading from "../utility/Heading";
import { useGetCategories, useGetHeadingById, useGetTools } from "../hook/index.hook";
import Badge from "../utility/badge";



const Skill = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  const { data: headingData } = useGetHeadingById("2")
  const { data: categoryData } = useGetCategories()
  const { data: toolData } = useGetTools()

  const heading = headingData?.data ?? undefined
  const categories = categoryData?.data ?? []
  const tools = toolData?.data ?? []


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          // observer.disconnect(); // only trigger once
        } else {
          setAnimate(false)
        }
      },
      { threshold: 0.2 } // fires when 20% of section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const skills = categories.filter((category) => category.title !== "Full-Stack")

  // console.log(skills)

  return (
    <div id='skills' ref={sectionRef} className='bg-white dark:bg-background  dark:text-white text-black'>
      <div className='max-w-7xl px-4 py-16 mx-auto'>
        <Heading
          icon={<FaCode />}
          title={heading?.name ?? ""}
          subtitle={heading?.title ?? ""}
          description={heading?.description ?? ""}
        />
        <div className='mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 bg-red-00'>
          {skills?.map((cat, idx) => (
            <div key={idx} className=' group w-full flex flex-col items-start border border-primaryColor/10 px-2 py-4 bg-white/5 rounded-lg shadow-lg hover:shadow-primaryColor/40 transform ease-in-out duration-300 hover:border-primaryColor/10'>
              <div className='flex items-center gap-2'>
                <div className='text-3xl'>{cat.icon}</div>
                <h1 className='text-2xl md:text-3xl font-medium group-hover:text-ternaryColor transition-all duration-300 ease-in-out'>{cat.title}</h1>
              </div>

              <div className='mt-6 bg-red-00 relative border border-primaryColor/0 py-2 rounded-lg w-full h-full flex'>
                {/* Label column */}
                <div className='relative py-4 w-[180px] md:w-[160px] flex flex-col justify-between border-r-2 border-primaryColor bg-red-00'>
                  {cat.skill.map((sk) => (
                    <div key={sk.id} className='relative h-[56px] flex items-center justify-end'>
                      <div className='absolute -right-2.5 w-5 h-[3px] bg-linear-to-r from-ternaryColor to-secondaryColor/70'></div>
                      <p className='text-right pr-4 font-medium text-[16px] sm:text-[17px]'>{sk?.name}</p>
                    </div>
                  ))}
                </div>

                {/* Bars column */}
                <div className='py-4 flex flex-col justify-between w-full pl-4 pr-4 bg-blue-0'>
                  {cat.skill.map((sk) => (
                    <div key={sk.id} className='h-[56px] flex items-center gap-2'>
                      <div className='w-full h-[10px] sm:h-[12px] bg-white/10 rounded-full overflow-hidden'>
                        <div
                          className='h-full bg-linear-to-r from-ternaryColor/70 via-primaryColor to-secondaryColor/70 rounded-full transition-all duration-700 ease-out'
                          style={{ width: animate ? `${sk.level}%` : '0%' }}
                        />
                      </div>
                      <p className='font-medium'>{sk.level}%</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*Language & tools */}
        <div className='mt-8 md:px-8 flex flex-wrap items-center gap-2'>
          {tools.map((tool) => (
            <Badge key={tool.id} icon={tool.icon} name={tool.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;