import React from 'react'
import './nav.css'
import { useState } from 'react'

import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {CgWorkAlt} from 'react-icons/cg'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {BsCodeSlash} from 'react-icons/bs'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsCodeSlash/></a>
      <a href="#education" onClick={()=> setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#work" onClick={()=> setActiveNav('#work')} className={activeNav === '#work' ? 'active' : ''}><CgWorkAlt/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav