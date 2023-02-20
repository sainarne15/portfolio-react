import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Sai Narne</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#work">Experience</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

  {/* <div className="footer__copyright">
    <small>&copy; By Sai Narne</small>
  </div> */}
    </footer>
  )
}

export default Footer