import React from 'react'
import './header.css'
import CTA from '../CTA'
import ME1 from '../../assets/ME1-remove.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Lakshmi Narasimha Sai Narne</h1>
            <h5 className="text-light">Full Stack Developer</h5>
            <CTA/>
            <HeaderSocials/>
            <div className='me'>
                <img src={ME1} alt='Me1'/>
            </div>

            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header;