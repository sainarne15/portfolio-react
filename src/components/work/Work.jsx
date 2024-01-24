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
              <li>•	Instructed 2 courses, SCLT 6320 Procurement Strategies and SCLT 6397 Urban Informatics for Logistics Management with 40 students; duties include grading assignments, providing feedback to the students and offering additional support via emails.</li>
              <li>•	Aided in the revision of the class notes, prepared grading criteria, delivered 2 guest lectures on applications of machine learning in supply chain and logistics, enhancing students' coding proficiency and resulting in a 25% performance improvement.
</li>
            </ul>
          </article>
    
  
          <article className="work__details">
            <p>University of Houston </p> <small className='text-light'>09/2022 - 05/2023</small>
            <h5>Research Assistant</h5>
            <ul >
              <li>•	Investigated socio-demographic factors and teenage driver's license acquisition patterns for Millennials and Gen Z with a team 
      of 3 professors. 
</li>
              <li>•	Implemented a variety of Machine Learning models in Python, including logistic regression, SVM , Random Forest, Gradient –
      Boosting, Extreme Learning Machines, and neural networks, achieved an average accuracy improvement of 10%. 
</li>
              <li>•	Contributed to research, achieving a model accuracy of 89% after tuning and dataset balancing, also drafted the initial research paper.
</li>
            </ul>

          </article>
          <article className="work__details">
            <p>Cognizant</p> <small className='text-light'>02/2021 - 06/2021</small>
            <h5>Programmer Analyst Trainee</h5>
            <ul >
              <li>•	Developed a scalable application with a microservices architecture using Entity Framework, ASP.NET Core Web API, Postman API 
and Microsoft SQL Server Database; optimized data retrieval, resulting in a 30% decrease in query execution time.
</li>
              <li>•	Utilized Microsoft Azure Logic Apps to host 4 web APIs and used continuous integration service in order to automate the entire
process of loading the latest build code and test files.
</li>
              <li>•	Leveraged NUnit and Moq to develop comprehensive mock Web APIs, streamlining the process of interacting with targeted web page elements; significantly improved testing accuracy and reduced bug discovery time by 40%. 
</li>
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