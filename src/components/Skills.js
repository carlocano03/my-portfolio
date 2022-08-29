import React from "react"
import "./css/Skills.css"
import HTML from '../images/html.png'
import CSS from '../images/css.png'
import JS from '../images/javascript.png'
import REACTJS from '../images/react.png'
import NODE from '../images/node.png'
import CI from '../images/codeigniter.png'
import MYSQL from '../images/mysql.png'
import Py from '../images/python.png'
import GIT from '../images/github.png'
import BS from '../images/bs.png'
import TCSS from '../images/tailwind.png'
import PS from '../images/ps.png'


const Skills = () => {
  return (
    <>
    <div name="skills" className="skills-wraper">
      <div className="container mt-5 skills-info">
        <h1>Skills</h1>
        <p>These are the technologies I've worked with</p>
        <div className="row">
          <div className="col-lg-3 col-4 pb-4 text-center">
            <div className="img-wraper p-3 pb-0">
              <img src={HTML} alt="HTML Logo"/>
              <p className="pt-3">HTML</p>
            </div>
          </div>
          <div className="col-lg-3 col-4 pb-4 text-center">
            <div className="img-wraper p-3 pb-0">
              <img src={CSS} alt="CSS Logo"/>
              <p className="pt-3">CSS</p>
            </div>
          </div>
          <div className="col-lg-3 col-4 pb-4 text-center">
            <div className="img-wraper p-3 pb-0">
              <img src={JS} alt="JS Logo"/>
              <p className="pt-3">Javascript</p>
            </div>
          </div>
          <div className="col-lg-3 col-4 pb-4 text-center">
            <div className="img-wraper p-3 pb-0">
              <img src={REACTJS} alt="REACTJS Logo"/>
              <p className="pt-3">ReactJs</p>
            </div>
          </div>
          <div className="col-lg-3 col-4 pb-4 text-center">
            <div className="img-wraper p-3 pb-0">
              <img src={NODE} alt="NODE Logo"/>
              <p className="pt-3">NodeJs</p>
            </div>
          </div>
          <div className="col-lg-3 col-4 pb-4 text-center">
            <div className="img-wraper p-3 pb-0">
              <img src={CI} alt="CODEIGNITER Logo"/>
              <p className="pt-3">Codeigniter</p>
            </div>
          </div>
          <div className="col-lg-3 col-4 pb-4 text-center">
            <div className="img-wraper p-3 pb-0">
              <img src={MYSQL} alt="MYSQL Logo"/>
              <p className="pt-3">MySQL</p>
            </div>
          </div>
          <div className="col-lg-3 col-4 pb-4 text-center">
            <div className="img-wraper p-3 pb-0">
              <img src={Py} alt="PYTHON Logo"/>
              <p className="pt-3">Python</p>
            </div>
          </div>
          <div className="col-lg-3 col-4 pb-4 text-center">
            <div className="img-wraper p-3 pb-0">
              <img src={GIT} alt="GIT Logo"/>
              <p className="pt-3">Github</p>
            </div>
          </div>
          <div className="col-lg-3 col-4 pb-4 text-center">
            <div className="img-wraper p-3 pb-0">
              <img src={BS} alt="BOOTSTRAP Logo"/>
              <p className="pt-3">Bootstrap</p>
            </div>
          </div>
          <div className="col-lg-3 col-4 pb-4 text-center">
            <div className="img-wraper p-3 pb-0">
              <img src={TCSS} alt="TAILWIND Logo"/>
              <p className="pt-3">Tailwind CSS</p>
            </div>
          </div>
          <div className="col-lg-3 col-4 pb-4 text-center">
            <div className="img-wraper p-3 pb-0">
              <img src={PS} alt="PS Logo"/>
              <p className="pt-3">Photoshop</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Skills