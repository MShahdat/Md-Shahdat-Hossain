
import { GrServices } from "react-icons/gr";
import Heading from "../utility/Heading";
import { Hover3D } from "../utility/Hover3D";
import { useGetHeadingById, useGetServices } from "../hook/index.hook"


const Services = () => {

  const { data } = useGetHeadingById("4")
  const { data: serviceData } = useGetServices()

  const heading = data?.data ?? undefined
  const services = serviceData?.data ?? []

  return (
    <div id='services' className='dark:bg-background bg-white dark:text-white text-black'>
      <div className='max-w-7xl px-4 py-12 mx-auto'>
        <Heading
          icon={<GrServices />}
          title={heading?.name ?? "-"}
          subtitle={heading?.title ?? "-"}
          description={heading?.description ?? "-"}
        />
        {/* body part */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {
            services.map((service) => (
              <Hover3D key={service.id}>
                <div className={` dark:hover:bg-linear-to-r from-primaryColor/20 via-primaryColor/20 to-secondaryColor/20 hover:cursor-default border ${service?.bgColor ?? ""} border-primaryColor/20 rounded-2xl flex flex-col items-center gap-4 px-4 py-8`}>
                  <div className={`group-hover:scale-103 duration-500 transition-all h-18 w-18 border border-primaryColor/25 ${service?.iconColor ?? ""} rounded-2xl flex flex-col items-center justify-center`}>
                    <div className="text-5xl text-white">{service?.icon ?? "-"}</div>
                  </div>
                  <p className="text-xl font-semibold">{service?.title ?? "-"}</p>
                  <p className="text-center text-[15px] text-neutral-700 dark:text-white/75 tracking-wide leading-relaxed ">{service?.description ?? "-"}</p>
                </div>
              </Hover3D>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Services;