
const Heading = ({ icon, title, subtitle, description }) => {
  return (
    <div className='w-full mb-10'>
      <div className='flex flex-col items-center gap-4 text-center'>
        
        {title && (
          <div className='w-fit flex flex-row items-center gap-2 px-4 py-1.5 border border-secondaryColor/50 bg-ternaryColor/20 rounded-full shadow-2xl shadow-primaryColor text-ternaryColor'>
            {icon && <span className="flex items-center justify-center">{icon}</span>}
            <p className='font-bold text-[13px] md:text-[14px] uppercase tracking-wide'>
              {title}
            </p>
          </div>
        )}
        
        {subtitle && (
          <h1 className='text-3xl md:text-4xl font-bold bg-linear-to-r from-ternaryColor via-primaryColor to-secondaryColor bg-clip-text text-transparent'>
            {subtitle}
          </h1>
        )}
        
        {description && (
          <p className='leading-tight text-md md:text-lg max-w-2xl font-mono dark:text-neutral-400 text-neutral-700'>
            {description}
          </p>
        )}
        
      </div>
    </div>
  );
};

export default Heading;