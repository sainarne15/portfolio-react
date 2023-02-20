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
            <p>University Of Houston</p>
            <h5>Teaching Assistant</h5>
            <ul >
              <li>Responsible for two courses with 30 students; duties include grading assignments, providing feedback to the students and
offering additional support via emails.</li>
              <li>Aiding in the revision of the class notes and giving guest lectures on machine learning-related topics.</li>
            </ul>
          </article>
    
  
          <article className="work__details">
            <p>University of Houston</p>
            <h5>Research Assistant</h5>
            <ul >
              <li>Implemented Machine Learning models in Python, including logistic regression, SVM, RF, GB, ELM, and neural
networks, to uncover the non-linear relationship between several socio-demographic factors and the teenagers acquisition
of driver’s license for millennials and their succeeding generation.</li>
              <li>Assisting in research on the same topic and working on publishing the work.</li>
            </ul>

          </article>
          <article className="work__details">
            <p>Cognizant</p>
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