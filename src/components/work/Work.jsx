import React from 'react'
import './work.css'

const Work = () => {
  return (
    <section id='work'>
    <h5>Where did I work</h5>
    <h2>Experience</h2>


    <div className="container work__container">

      <div className="work__places">

  
          <article className="work__details">
            <p>University Of Houston </p> <small className='text-light'>01/2023 - 05/2023</small>
            <h5>Teaching Assistant</h5>
            <ul >
              <li>Responsible for two courses, SCLT 6320 Procurement Strategies and SCLT 6397 Urban Informatics for Logistics Management with 40 students; duties include grading assignments, providing feedback to the students and offering additional support via emails.</li>
              <li>Aiding in the revision of the class notes, preparing grading criteria and delivering guest lectures on machine learning related topics.
</li>
            </ul>
          </article>
    
  
          <article className="work__details">
            <p>University of Houston </p> <small className='text-light'>09/2022 - 05/2023</small>
            <h5>Research Assistant</h5>
            <ul >
              <li>Implemented Machine Learning models in Python, including logistic regression, SVM, RF, GB, Extreme Learning Machine, and neural networks, to uncover the non-linear relationship between several socio-demographic factors and the teenager's acquisition of driver’s license for millennials and their succeeding generation's.</li>
              <li>Assisted in conducting research on the same topic and contributed to preparing the initial draft for the work.</li>
            </ul>

          </article>
          <article className="work__details">
            <p>Cognizant</p> <small className='text-light'>02/2021 - 06/2021</small>
            <h5>Programmer Analyst Trainee</h5>
            <ul >
              <li>Trained and worked in ASP.NET Framework, and developed an application with micro services using the ASP.NET Core
MVC and Entity Framework, ASP.NET Core Web API, Postman API and testing frameworks such as NUnit, Moq etc.</li>
              <li>Utilized Microsoft Azure DevOps to host the web APIs and used continuous integration service in order to automate the
entire process of loading the latest build code and test files.</li>
              <li>Collaborated with team members using version control systems such as Git to organize modifications and assign tasks.</li>
            </ul>
          </article>
          <article className="work__details">
            <p>Cognibot</p>
            <small className='text-light'>04/2020 - 05/2020</small>
            <h5>Intern</h5>
            <ul>
              
              <li>Worked as a research intern in the domains of ML, AI and IoT and implemented a project regarding stock price
prediction using Neural Networks</li>
            </ul>
          </article>
      
      </div>
    </div>
  </section>
  )
}

export default Work