import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG1.PNG';
import IMG2 from '../../assets/foodmagic.PNG';
import IMG3 from '../../assets/returnordermana.png';
import IMG4 from '../../assets/customer.png';
import IMG5 from '../../assets/portfolio.PNG';

const projData = [
  {
    id:1,
    image: IMG5,
    title: 'Portfolio Website',
    github:'https://github.com/sainarne15/FuelQuoteFinal'
  },
  {
    id:2,
    image: IMG1,
    title: 'Fuel Price Prediction Web App',
    github:'https://github.com/sainarne15/FuelQuoteFinal'
  },
  {
    id:3,
    image: IMG4,
    title: 'Customer Feedback Analysis',
    github:'https://github.com/sainarne15/CustomerFeedbackAnalysis'
  },
  {
    id:4,
    image: IMG3,
    title: 'Return Order Management System',
    github:'https://github.com/sainarne15/Final-Project'
  },
  {
    id:5,
    image: IMG2,
    title: 'Food Magic Portal',
    github:'https://github.com/sainarne15/FoodMagic'
  }
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className='container portfolio__container'>        
        {
          projData.map(({id, image, title, github})=>{
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">  
                   <img src={image} alt={title} /></div>
                   <h3>{title}</h3>
                   <div className="portfolio__item-cta">
                   <a href={github} className="btn" target='_blank'>Github</a>
                </div>
             </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio