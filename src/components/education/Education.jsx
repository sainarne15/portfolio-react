import React from 'react'
import './education.css'

const Education = () => {
  return (
    <section id='education'>
      <h5>My Background</h5>
      <h2>Education</h2>


      <div className="container education__container">

        <div className="education__places">

    
            <article className="education__details">
              <p>University Of Houston</p>
              <small>Jan 2022 – May 2023</small>
              <h5>Master of Science in Computer Science</h5>


            </article>
      
    
            <article className="education__details">
              <p>RVR & JC College of Engineering</p>
               <small>August 2017 – July 2021 </small>
              <h5>Bachelor of Technology in Computer Science and Engineering</h5>

            </article>
        
        </div>
      </div>
    </section>
  )
}

export default Education