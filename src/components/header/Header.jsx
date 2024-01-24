import React from 'react'
import './header.css'
import CTA from '../CTA'
import az900 from '../../assets/az900.png'
import terraform from '../../assets/terraform.png'
import aws from '../../assets/aws.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Lakshmi Narasimha Sai Narne</h1>
            <h5 className="text-light">I’m interested in Web Development, DevOps and Machine Learning</h5>
            <CTA/>
            <HeaderSocials/>
            <div className='image-grid image-row'>
            <div className='image-item image1'>
               <a href="https://www.credly.com/badges/e8250dd8-4cc4-42b9-9451-d4c745042ac2/public_url"> <img src={az900} alt='az900' /> </a>
            </div>
            <div className='image-item image1'>
               <a href="https://www.credly.com/badges/2d62f778-fa89-4026-a79b-e935c9426c2e/public_url"><img src={terraform} alt='terraform' /> </a>
            </div>
            <div className='image-item image1'>
               <a href="https://www.credly.com/badges/510e837c-4f62-4c90-920c-8642f38e2be3/public_url"><img src={aws} alt='aws' /> </a>
            </div>
            </div>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header;