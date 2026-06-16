import React from 'react';
import Nav from './component/Nav';
import Hero from './component/Hero';
import About from './component/About';
import Projects from './component/Projects';
import Skill from './component/Skills';
import Contact from './component/Contact';
import {ToastContainer, Zoom} from 'react-toastify'
import ScrollToTop from './scroll/ScrollTop';
import Services from './component/Services';


const App = () => {
  return (
    <div className=''>
      <Nav />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Services/>
      <Contact />
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
      <ScrollToTop/>
    </div>
  );
};

export default App;