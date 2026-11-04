

const ButtonLink = ({ title, url, target, icon, css }) => {
  return (
    <a
      href={url}
      aria-disabled={!url}
      target={`${target ? "_blank" : ""}`}
      className={`flex gap-2 items-center text-[16px] font-medium transform ease-in-out transition-colors duration-300 px-6 py-1.5 rounded-lg shadow-2xl hover:scale-101 ${css} ${!url ? 'pointer-events-none opacity-50' : ''}`}
    >
      <span>{icon}</span>
      <p>{title}</p>
    </a>
  );
};

export default ButtonLink;