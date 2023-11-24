import React, { useState } from "react"
import { faq } from "../../dummydata"
// import Heading from "../common/heading/Heading"
import Back from "../common/back/Back"
import "./faq.css"


const Faq = () => {
  const [click, setClick] = useState(false)

  const toggle = (index) => {
    if (click === index) {
      return setClick(null)
    }
    setClick(index)
  }
  // {TutorialVideo.map((val) => (
  //   <><Back title='Tutorial video' /><section className='tutorial padding'>
  //     <div className='container grid'>
  //     </div>
  //   </section></>
  // ))}
  return (
    <>
      <section className='faq'>
        <div className='container-faq'>
          {faq.map((val, index) => (
            <><Back title='Frequently Asked Questions' />
            <div className='box-faq'>
              <button className='accordion-faq' onClick={() => toggle(index)} key={index}>
                <h2 className="header-faq">{val.title}</h2>
                <span>{click === index ? <i className='fa fa-chevron-down'></i> : <i className='fa fa-chevron-right'></i>}</span>
              </button>
              {click === index ? (
                <div className='text-faq'>
                  <p className="p-faq">{val.desc}</p>
                </div>
              ) : null}
            </div></>
          ))}
        </div>
      </section>
    </>
  )
}

export default Faq
