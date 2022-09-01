import React from "react"
import "./css/Footer.css"
import { FaFacebook, FaGithub } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill  } from "react-icons/bs"

const Footer = () => {
  return (
    <div className="footer">
       <p>Alright Reserved 2022.</p>
       <span>Developed By: Carlo Cano</span>
       <nav className="footer-links">
        <ul className="links">
            <li><a href="/"><FaFacebook size={30} className="icon"/></a></li>
            <li><a href="/"><FaGithub size={30} className="icon"/></a></li>
            <li><a href="/"><HiOutlineMail size={30} className="icon"/></a></li>
            <li><a href="/"><BsFillPersonLinesFill size={30} className="icon"/></a></li>
        </ul>
       </nav>
    </div>
  )
}

export default Footer