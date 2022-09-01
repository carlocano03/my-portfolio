import React, { useEffect } from "react"
import "./css/About.css"
import avatar from '../images/avatar.jpg'
import arrow from '../images/fast-forward.gif'
import Aos from "aos"
import "aos/dist/aos.css"

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div name="about" className="about-wrapper" data-aos="fade-in">
      <div className="container">
        <div className="about-info mt-5 pt-3 pb-5">
          <h1>About</h1>
          <div className="row g-0">
            <div className="col-md-6" data-aos="fade-right">

              <p className="learn-more">LEARN MORE ABOUT ME</p>
              <img src={avatar} className="img-fluid" alt="..."></img>
            </div>

            <div className="col-md-6" data-aos="fade-left">
              <div className="more-details">
                <h1>Full Stack Developer</h1>
                <p className="text-secondary">
                  Seeking a challenging career with a progressive organization that provides
                  an opportunity to capitalize my technical skills and abilities in the field of Information Technology.
                </p>
                <div className="text-secondary">
                  <div className="text_underline mb-2">
                    <img src={arrow} alt="..." style={{ width: 20, marginTop: -5, marginRight: 5 }}></img><b>Birthday: </b>January 3, 1994
                  </div>
                  <div className="text_underline mb-2">
                    <img src={arrow} alt="..." style={{ width: 20, marginTop: -5, marginRight: 5 }}></img><b>Address: </b>#334 Bangkal Papaya, San Antonio, Nueva Ecija
                  </div>
                  <div className="text_underline mb-2">
                    <img src={arrow} alt="..." style={{ width: 20, marginTop: -5, marginRight: 5 }}></img><b>Mobile No.: </b>+63 906 1798 559
                  </div>
                  <div className="text_underline mb-2">
                    <img src={arrow} alt="..." style={{ width: 20, marginTop: -5, marginRight: 5 }}></img><b>Email: </b>carlocano03@gmail.com
                  </div>
                  <div className="text_underline mb-2">
                    <img src={arrow} alt="..." style={{ width: 20, marginTop: -5, marginRight: 5 }}></img><b>Degree: </b>BS Information Technology | Major: Programming
                  </div>
                </div>
                <p className="text-secondary mt-2">
                  Specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming tools including
                  HTML, PHP OOP, JavaScript, JQuery, AJAX, ReactJS, NodeJS, Python, MySQL, Codeigniter Framework, CSS, Bootstrap, Tailwind CSS and VB.Net.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About