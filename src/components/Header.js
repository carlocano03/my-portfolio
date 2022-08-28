import React from "react"
import "./css/Header.css"
import Typed from "react-typed"
import { BsBoxArrowInRight } from "react-icons/bs"

const Header = () => {
  return (
    <div name="home" className="header-wraper">
      <div className="main-info">
        <div className="container">
          <p>Hi, my name is</p>
          <Typed
            className="typed-text"
            strings={["Carlo Cano"]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
          <h1>I'm a Full Stack Developer.</h1>
          <p className="details">
            I'm a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently,
            I'm focused on building responsive full-stack web applications.
          </p>
          <button className="btn-view" type="button">View Work<BsBoxArrowInRight size={30} className="ms-2"/></button>
        </div>
      </div>
    </div>
  )
}

export default Header