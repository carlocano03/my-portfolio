import React from "react"
import Logo from "../pfLogo.png"
import "./css/Navbar.css"
import { AiOutlineMenu } from "react-icons/ai"
import { Link } from "react-scroll"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="https://carlocano03.github.io/my-portfolio/"><img src={Logo} className="navbar-logo me-3" alt="Logo..." />my-Portfolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon"></span> */}
                        <AiOutlineMenu className="text-white" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="home" smooth={true} duration={500}>Home <span className="visually-hidden">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about" smooth={true} duration={500}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="skills" smooth={true} duration={500}>Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/#" smooth={true} duration={500}>Work</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/#" smooth={true} duration={500}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar