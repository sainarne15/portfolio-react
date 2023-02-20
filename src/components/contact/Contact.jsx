import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md';
import {AiOutlinePhone} from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_jqxb92t', 'template_ikg3kzk', form.current, 'GIHg-viiWis56_URO')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nlnarasimhasai15@gmail.com</h5>
            <a href="mailto:nlnarasimhasai15@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <AiOutlinePhone className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5>+13464940358</h5>
      
          </article>

        </div>
        {/*End of contacts*/ }
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact