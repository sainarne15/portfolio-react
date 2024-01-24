import React from 'react'
import './about.css'
import ME from '../../assets/ME.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know Me</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Organizations</h5>
              <small>3 </small>
            </article>
            
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>

          </div>

          <p>
          A recent graduate with a Master of Science in Computer Science, equipped with a diverse skill set encompassing web application development, machine learning, and cloud computing. Actively seeking an entry-level position in the development field to leverage technical expertise, problem-solving abilities, and a collaborative mindset for contributing to innovative projects and continuing professional growth as a developer.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>

    </section>
  )
}

export default About