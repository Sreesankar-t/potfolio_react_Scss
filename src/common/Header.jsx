import React, { useState } from "react"
import { Link } from "react-router-dom"

import { RiMenu3Line, RiUserLine } from "react-icons/ri"
import { AiOutlineClose, AiOutlineHome } from "react-icons/ai"

export const Header = () => {
  const [mobile, setMobile] = useState(false)
  const handleActive = () => {}
  return (
    <>
      <header>
        <ul className={`${mobile ? "mobile-nav" : "menu"}`}>
         
            <li >
              <Link to="/" onClick={handleActive} className='link'>
               Home
              </Link>
              <span><AiOutlineHome /></span>
            </li>
            <li >
              <Link to="/resume" onClick={handleActive} className='link'>
               Resume
              </Link>
              <span><RiUserLine/></span>
            </li>
         
        </ul>
        <div className='icons'>
          <button onClick={() => setMobile(!mobile)}>{mobile ? <AiOutlineClose /> : <RiMenu3Line />}</button>
        </div>
      </header>
    </>
  )
}
