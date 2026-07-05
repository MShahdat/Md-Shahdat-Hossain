import { createContext, useState } from "react";

export const context = createContext()

const Context = (props) => {
  const [openProjectModal, setOpenProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  return (
    <context.Provider value={[
      openProjectModal,
      setOpenProjectModal,
      selectedProject,
      setSelectedProject,
      open, 
      setOpen,
      scrolled,
      setScrolled,
      activeSection,
      setActiveSection,
    ]}>
      {props.children}
    </context.Provider>
  );
};

export default Context;