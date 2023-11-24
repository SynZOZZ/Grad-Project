import React from "react"
// import { Link } from "react-router-dom"
import "./header.css"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>SchoolName</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className='social'>
            
          <a href="https://www.facebook.com/zezo.mahmoud.96" className="fab fa-facebook-f icon"> </a>
            <a href="https://www.instagram.com" className="fab fa-instagram icon"> </a>
            <a href="https://www.twitter.com" className="fab fa-twitter icon"> </a>
            <a href="https://www.youtube.com" className="fab fa-youtube icon"> </a>
            
          </div>
        </div>
      </section>
    </>
  )
}
export default Head