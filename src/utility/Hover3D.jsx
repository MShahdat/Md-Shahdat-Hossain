export const Hover3D = ({ children }) => {
  return (
    <div
      className="
        transition-all
        duration-500
        hover:[transform:perspective(1200px)_rotateX(6deg)_rotateY(-6deg)rotateZ(-1deg)_scale(1.03)]
      "
    >
      {children}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};