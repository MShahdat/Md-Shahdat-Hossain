
import { FaCalendar } from "react-icons/fa6";
import { BiSolidSchool } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";


const eduCard = ({ data }) => {
  return (
    <div>
      <div className='mt-4 text-start p-4 md:p-6 border bg-white/5 group border-primaryColor/20 rounded-xl flex flex-col tracking-wider gap-4 group-hover:scale-101 transition-all ease-in-out duration-300 hover:shadow-lg shadow-primaryColor/30'>
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-bl from-primaryColor to-secondaryColor flex items-center justify-center shadow-lg shadow-purple-900/40">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
                <path d="M12 3L1 8l11 5 9-4.09V17h2V8L12 3z" fill="currentColor" />
                <path d="M5 10.18v4.5c0 1.5 3 3.32 7 3.32s7-1.82 7-3.32v-4.5L12 13 5 10.18z" fill="currentColor" />
              </svg>
            </div>
            <div>
              <h2 className="dark:text-white text-ternaryColor font-semibold text-lg leading-snug">
                {data.degree ?? "-"}
              </h2>
              <p className="dark:text-ternaryColor text-neutral-800 text-sm font-medium mt-1">
                {data.institute ?? "-"}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/60">
                <div className="flex items-center gap-2 text-ternaryColor font-medium dark:text-white">
                  <FaCalendar className="w-4 h-4" />
                  <span>{data.dateRange ?? "-"}</span>
                </div>
                <div className="flex items-center gap-2 font-medium dark:text-white text-ternaryColor">
                  <FaLocationDot className="w-4 h-4" />
                  <span>{data.location ?? "-"}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="h-px dark:bg-white/10 bg-primary/30 my-2" />

        <p className="dark:text-white/70 text-neutral-800 text-sm leading-relaxed mt-0">
          {data.description ?? "-"}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {data?.tags.map((tec) => (
            <div
              key={tec}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full dark:bg-ternaryColor/25 bg-ternaryColor border border-white/10 text-xs text-white font-medium"
            >
              {tec}
            </div>
          ))}
        </div>

        {
          data.credential &&
          <div className='mt-2 mx-auto'>
            <a href={data.credential} target='_blank' className='flex items-center justify-center gap-2 border min-w-80 border-ternaryColor/20 px-4 py-1.5 rounded-lg bg-ternaryColor/90 text-white'>
              <BiSolidSchool />
              <p>View Credential</p>
            </a>
          </div>
        }


      </div>
    </div>
  );
};

export default eduCard;