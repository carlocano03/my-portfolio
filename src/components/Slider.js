import React from "react"
import "./css/Slider.css"
import Slide from "react-slick"
import "slick-carousel/slick/slick.css"
import NEQAS from '../images/projects/neqas.PNG'
import INV from '../images/projects/inv.PNG'
import LEVELUP from '../images/projects/level_up.PNG'
import EP from '../images/projects/EP.PNG'
import ORFC from '../images/projects/ORFC.png'

export const projectDeveloped = [
    {
        id: 1,
        title: "NEQAS Online Registration",
        techStack: "HTML / CSS / JQuery / JavaScript / AJAX / Bootstrap / MySQL",
        category: "NEQAS evaluates the performance of participating laboratories by assessing the integrity of the entire testing from sample receipt to releasing of test results.",
        url: NEQAS
    },
    {
        id: 2,
        title: "Inventory Management System",
        techStack: "HTML / CSS / JQuery / JavaScript / AJAX / Bootstrap / HighCharts / MySQL",
        category: "A detailed, itemized list, report, or record of things in one's possession, especially a periodic survey of all goods and materials in stock.",
        url: INV
    },
    {
        id: 3,
        title: "LevelUp Online Tutorials",
        techStack: "HTML / CSS / JQuery / JavaScript / AJAX / Bootstrap / HighCharts / MySQL",
        category: "Official website of LevelUp Online Tutorials and with scheduling of program offered. Including the payment history, monitoring of ongoing classes and etc.",
        url: LEVELUP
    },
    {
        id: 4,
        title: "Excelsis Pharma Website",
        techStack: "HTML / CSS / Bootstrap / JavaScript",
        category: "Official website of Excelsis Pharma Inc. Including the chat support directed to the administrator of the website and viewing all the needed information of this company.",
        url: EP
    },
    {
        id: 5,
        title: "Loan Management System",
        techStack: "VB.Net / Metro UI / Bunifu / ReportViewer / MySQL",
        category: "Automate every step of loan servicing to cut costs. Digital statements to replace high cost paper statements and push account alerts and payment reminders.",
        url: ORFC
    },

];

const Slider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-wraper">
            <div className="container slider-info">
                <h1 className="text-center">Some of my Projects</h1>
                <Slide {...settings}>
                    {projectDeveloped.map(item => (
                        <div className="card">
                            <div className="card-top">
                                <img src={item.url} alt={item.title} />
                                <h1 className="p-2">{item.title}</h1>
                            </div>
                            <div className="card-bottom p-1">
                                <p>{item.category}</p>
                                <p>
                                    <small>Tech Stacks Used</small><br/>
                                    <i>{item.techStack}</i>
                                </p>
                                
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
    )
}

export default Slider