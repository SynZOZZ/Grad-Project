import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO SCHOOlNAME' title='Best Online Education Expertise' />
            <p>In halls of learning, young minds take flight,<tr></tr>
School's beacon of knowledge, a guiding light.</p>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
