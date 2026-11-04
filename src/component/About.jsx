
import { FaDownload, FaRocket } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import Heading from '../utility/Heading';
import { Hover3D } from '../utility/Hover3D';
import { useGetConfigById, useGetHeadingById, useGetSkills } from '../hook/index.hook';
import Badge from "../utility/badge";
import ButtonLink from "../utility/btn.link";


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
                <div className='relative border border-primaryColor/30 rounded-2xl overflow-hidden shadow-lg shadow-primaryColor/40 dark:shadow hover:shadow-primaryColor/50 transform transition-all duration-300 hover:scale-[1.02]'>
                  <img src={config?.image ?? "df"} className='w-full h-[340px] sm:h-[480px] md:h-[520px] object-cover' />
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
                <ButtonLink
                  title={"Download CV"}
                  url={cv}
                  target={"_blank"}
                  icon={<FaDownload />}
                  css={"hover:bg-ternaryColor hover:text-white bg-white text-ternaryColor hover:shadow-primaryColor w-fit"}
                />
                <ButtonLink
                  title={"Get in Touch"}
                  url={"#contact"}
                  icon={<FaRocket />}
                  css={"bg-linear-to-bl from-primaryColor to-secondaryColor text-white w-fit"}
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default About;