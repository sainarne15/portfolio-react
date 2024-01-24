import React from "react";
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Awards from './components/awards/Awards';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Portfolio from './components/portfolio/Portfolio';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';



const App = () => {
  return(
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Education/>
      <Work/>
      <Portfolio/>
      <Awards/>
      <Contact/>
      <Footer/>
    </>
  );
}


export default App;