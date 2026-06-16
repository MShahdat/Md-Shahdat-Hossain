
import { GrServices } from "react-icons/gr";
import { IoSchoolSharp } from "react-icons/io5";

const service = [
  {
    icon: <IoSchoolSharp/>,
    iconColor: 'bg-secondaryColor/50',
    bg: 'bg-primaryColor/15',
    title: 'Full-Stack Web Development',
    des: 'End-to-end web apps with React, Next.js, Node.js, and PostgreSQL from pixel-perfect UI to scalable server logic.',
  },
  {
    icon: <IoSchoolSharp/>,
    iconColor: 'bg-primaryColor/50',
    bg: 'bg-ternaryColor/15',
    title: 'API Design & Development',
    des: 'RESTful APIs built with Node.js and TypeScript secure with JWT auth, well-structured, documented, and production-ready.',
  },
  {
    icon: <IoSchoolSharp/>,
    iconColor: 'bg-ternaryColor/40',
    bg: 'bg-secondaryColor/15',
    title: 'Database Design',
    des: 'Efficient PostgreSQL schemas with Prisma ORM normalized, indexed, and optimized for performance and data integrity.',
  },
]

const Services = () => {
  return (
    <div id='services' className='bg-[#010b11] text-white'>
      <div className='max-w-6xl px-4 py-12 mx-auto'>
        <div className='flex flex-col items-center gap-4'>
          <div className='w-fit flex flex-row items-center gap-2 px-2 py-0.5 md:px-6 md:py-1.5 tracking-normal border border-secondaryColor/50 bg-ternaryColor/20 rounded-full shadow-2xl shadow-primaryColor text-primaryColor'>
            <GrServices />
            <p className=' font-bold text-[13px] md:text-[14px] uppercase whitespace-pre tracking-wide'>Services</p>
          </div>
          <h1 className='text-3xl md:text-4xl font-bold bg-linear-to-r from-ternaryColor via-primaryColor to-secondaryColor bg-clip-text text-transparent'>What I Offer</h1>
          <p className=' leading-tight text-md md:text-lg tracking-wider text-center'>Comprehensive development services to bring your vision to life</p>
        </div>

        {/* body part */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {
            service.map((ser, idx) => (
              <div className={`group hover:scale-103 duration-500 transition-all hover:bg-linear-to-r from-primaryColor/20 via-primaryColor/20 to-secondaryColor/20 hover:cursor-default border ${ser.bg} border-primaryColor/20 rounded-2xl flex flex-col items-center gap-4 px-4 py-8`}>
                <div className={`group-hover:scale-103 duration-500 transition-all h-18 w-18 border border-primaryColor/25 ${ser.iconColor} rounded-2xl flex flex-col items-center justify-center`}>
                  <div className="text-5xl">{ser.icon}</div>
                </div>
                <p className="text-xl font-semibold">{ser.title}</p>
                <p className="text-center text-[15px] text-white/75 tracking-wide leading-relaxed">{ser.des}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Services;