
import { FaDownload, FaRocket } from "react-icons/fa6";
import { expressSvg, jsSvg, nextSvg, nodeSvg, postgresqlSvg, prismaSvg, reactSvg, tsSvg } from '../utility/svg';
import { GrUserManager } from "react-icons/gr";
import Heading from '../utility/Heading';
import { Hover3D } from '../utility/Hover3D';
import { useGetConfigById, useGetHeadingById, useGetSkills } from '../hook/index.hook';
import Badge from "../utility/badge";


const About = () => {

  const { data } = useGetHeadingById("1")
  const { data: configData } = useGetConfigById()
  const { data: skillData } = useGetSkills()


  const heading = data?.data ?? undefined
  const config = configData?.data ?? undefined
  let skills = skillData?.data ?? []
  const cv = config?.cvUrl ?? undefined


  skills = skills.filter((skill) => skill.featured)
  // console.log(skills)


  return (
    <div id='about' className='bg-white dark:bg-background text-black dark:text-white'>
      <div className='max-w-7xl px-4 py-12 mx-auto'>
        <Heading
          icon={<GrUserManager />}
          title={heading?.name ?? "About"}
        />

        <div className='mt-6 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 xl:gap-0 '>
          <div className='order-2 md:order-1 bg-green-00 h-full w-full flex items-center justify-center relative'>
            <div className=' w-4/5 sm:w-3/5 md:w-full lg:w-4/5 mx-auto'>
              <div className='absolute inset-0 bg-linear-to-r from-ternaryColor/0 via-primaryColor/0 to-secondaryColor/0 rounded-2xl blur-2xl opacity-20'></div>

              <Hover3D>
                <div className='relative border border-primaryColor/30 rounded-2xl overflow-hidden shadow-lg shadow-primaryColor/60 dark:shadow hover:shadow-primaryColor/60 transform transition-all duration-300 hover:scale-[1.02]'>
                  <img src={config?.image ?? ""} className='w-full h-[340px] sm:h-[480px] md:h-[520px] object-cover' />
                </div>
              </Hover3D>
            </div>
          </div>
          <div className=' order-2 md:order-2 border-primaryColor/20 px-2 py-0 pb-4 bg-white/0 rounded-lg shadow-sm transform ease-in-out duration-300 hover:border-primaryColor/60'>
            <h1 className='text-3xl md:text-4xl xl:text-5xl bg-linear-to-r from-ternaryColor via-primaryColor to-secondaryColor bg-clip-text text-transparent leading-tight font-bold'>{config?.title ?? ""}</h1>
            <p className='mt-6 text-md md:text-[17px] text-neutral-700 dark:text-neutral-400 leading-relaxed tracking-wide'>{config?.aboutDescription ?? ""}</p>

            {/* tech */}
            <div className='mt-8 flex flex-wrap items-center gap-2'>
              {skills.map((skill) => (
                <Badge key={skill.id} icon={skill.icon} name={skill.name} />
              ))}
            </div>

            <div >
              <div className='mt-8 flex flex-col sm:flex-row gap-4 '>
                <a
                  href={cv}
                  aria-disabled={!cv}
                  target='_blank'
                  className={`w-fit flex gap-2 items-center text-[16px] font-medium hover:bg-ternaryColor transform ease-in-out transition-colors duration-300 hover:text-white px-6 py-1.5 rounded-lg bg-white text-ternaryColor border shadow-2xl hover:scale-101 hover:shadow-primaryColor ${!cv ? 'pointer-events-none opacity-50' : ''}`}
                >
                  <FaDownload />
                  <p>Download CV</p>
                </a>
                <a href='#contact' className='w-fit flex items-center gap-2 text-center text-[16px] font-medium bg-linear-to-bl from-primaryColor to-secondaryColor text-white px-6 py-1.5 rounded-lg hover:scale-101'>
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