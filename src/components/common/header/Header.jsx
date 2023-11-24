import React, { useState } from "react"
import Head from "./Head"
import "./header.css"

// import { Login } from "@mui/icons-material"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="../../about">About</a>
            </li>
            <li>
              <a href="../../team">Team</a>
            </li>
            <li>
              <a href="../../pricing">Pricing</a>
            </li>
            <li>
              <a href="../../news">News</a>
            </li>
            <li>
              <a href="../../contact">Contact</a>
            </li>
            <li>
              <a href="../../faq">FAQ</a>
            </li>
            <li>
              <a href="../../LoginPage">Login</a>
            </li>
          </ul>
          <div className='start'>
            <div className='button'><li>
              <a href="../../TutorialVideo">Tutorial Video</a>
            </li></div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
