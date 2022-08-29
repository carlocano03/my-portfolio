import React from "react"
import "./css/Slider.css"
import Slide from "react-slick"
import "slick-carousel/slick/slick.css"
import NEQAS from '../images/projects/neqas.PNG'
import INV from '../images/projects/inv.PNG'
import LEVELUP from '../images/projects/level_up.PNG'
import EP from '../images/projects/EP.PNG'
import ORFC from '../images/projects/ORFC.png'

export const dataDigitalBestSeller = [
    {
        id: 1,
        title: "NEQAS Online Registration",
        price: "1000",
        category: "TEst",
        url: NEQAS
    },
    {
        id: 2,
        title: "Inventory Management System",
        price: "1000",
        category: "TEst",
        url: INV
    },
    {
        id: 3,
        title: "LevelUp Online Tutorials",
        price: "1000",
        category: "TEst",
        url: LEVELUP
    },
    {
        id: 4,
        title: "Excelsis Pharma Website",
        price: "1000",
        category: "TEst",
        url: EP
    },
    {
        id: 5,
        title: "Loan Management System",
        price: "1000",
        category: "TEst",
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
                    {dataDigitalBestSeller.map(item => (
                        <div className="card">
                            <div className="card-top">
                                <img src={item.url} alt={item.title} />
                                <h1 className="p-2">{item.title}</h1>
                            </div>
                            <div className="card-bottom">
                                <h3>{item.category}</h3>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
    )
}

export default Slider