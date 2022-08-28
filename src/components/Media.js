import React from "react"
import "./css/Media.css"
import { FaFacebook, FaGithub } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill  } from "react-icons/bs"

const Media = () => {
  return (
    <nav className="social-links">
      <ul>
        <li><a title="Facebook" href="https://www.facebook.com/profile.php?id=100006106069340" target="_blank" rel="noopener noreferrer"><span>Facebook</span><FaFacebook size={30} className="icon"/></a></li>
        <li><a title="Github" href="https://github.com/carlocano03" target="_blank" rel="noopener noreferrer"><span>Github</span><FaGithub size={30} className="icon"/></a></li>
        <li><a title="Email" href="carlocano03@gmail.com"><span>Email</span><HiOutlineMail size={30} className="icon"/></a></li>
        <li><a title="Resume/CV" href="/#"><span>Resume</span><BsFillPersonLinesFill size={30} className="icon"/></a></li>
      </ul>
    </nav>
  )
}

export default Media