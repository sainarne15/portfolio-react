import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return(
    <section id='experience'>
      <h5>What I Know</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
       {/* ================ Frontend ============= */}
        <div className="experience__frontend">
          {/* <h3>Frontend Development</h3> */}
           <div className="experience__content">

           <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div><h4>HTML</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
              <h4>CSS</h4>
              {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
              <h4>JavaScript</h4>
              {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
              <h4>React</h4>
              {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
              <h4>Bootstrap</h4>
              {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
              <h4>Python</h4>
              {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
              <h4>ASP.NET CORE</h4>
              {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
              <h4>ASP.NET CORE MVC</h4>
              {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
              <h4>ASP.NET CORE WEB API</h4>
              {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
              <h4>C++</h4>
              {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
              <h4>C++</h4>
              {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
              <h4>C#</h4>
              {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
              <h4>Java</h4>
              {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
              <h4>R</h4>
              {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
              <h4>MySQL</h4>
              {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
              <h4>Microsoft SQL Server</h4>
              {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

           </div>
        </div>


        {/* ================ Backend ==================
        <div className="experience__Backend">
          <h3>Backend Development</h3>
           <div className="experience__content">

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div><h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
            <div>
            <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

           </div> 
        </div>*/}

      </div>
    </section>
  );
}

export default Experience