import { useContext } from 'react';
import Nav from './component/Nav';
import Hero from './component/Hero';
import About from './component/About';
import Projects from './component/Projects';
import Skill from './component/Skills';
import Contact from './component/Contact';
import { ToastContainer, Zoom } from 'react-toastify'
import ScrollToTop from './scroll/ScrollTop';
import Services from './component/Services';
import Education from './component/Education'
import ProjectModal from './component/ProjectModal';
import Footer from './component/Footer';
import { dataContext } from './context/Context';
import Provider from "./provider/index"
import Loading from './utility/Loading';

const App = () => {
  const [openProjectModal] = useContext(dataContext);

  return (
    <Provider>
      <Loading />
      <Nav />
      <Hero />
      <div className="h-px bg-neutral-300 dark:bg-white/5" />
      <About />
      <div className="h-px bg-neutral-300 dark:bg-white/5" />
      <Skill />
      <div className="h-px bg-neutral-300 dark:bg-white/5" />
      <Projects />
      {
        openProjectModal &&
        <ProjectModal />
      }
      <div className="h-px bg-neutral-300 dark:bg-white/5" />
      <Services />
      <div className="h-px bg-neutral-300 dark:bg-white/5" />
      <Education />
      <div className="h-px bg-neutral-300 dark:bg-white/5" />
      <Contact />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
      <ScrollToTop />
    </Provider>
  );
};

export default App;