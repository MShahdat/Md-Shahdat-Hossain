import { useIsFetching } from "@tanstack/react-query";

const Loading = () => {
  const isFetching = useIsFetching()

  if (isFetching === 0) return

  return (
    <div className={`fixed inset-0 z-[9999] bg-black/60 dark:bg-black/80 backdrop-blur-2xl flex items-center justify-center transition-opacity duration-200`}>
      <div className='flex flex-col items-center gap-3 text-white'>
        <div className='w-12 h-12 border-4 border-primaryColor/30 border-t-primaryColor rounded-full animate-spin'></div>
        <p className='text-sm font-medium tracking-wide uppercase'>Loading...</p>
      </div>
    </div>
  );
};

export default Loading;