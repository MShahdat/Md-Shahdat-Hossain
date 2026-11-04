

const Badge = ({ icon, name }) => {
  return (
    <div
      className='flex items-center gap-2 border border-primaryColor/50 text-primaryColor font-semibold bg-primaryColor/20 px-4 py-0.5 rounded-full leading-relaxed'
    >
      {icon && (
        <span
          className="size-5 shrink-0 [&>svg]:size-full"
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      )}
      <p>{name}</p>
    </div>
  );
};

export default Badge;