import React from 'react'
import slideOne from './../../Module/images/sec-1-slide-1.webp'
import slideTow from './../../Module/images/sec-1-slide-2.webp'
import slideThree from './../../Module/images/sec-1-slide-3.webp'
import './SliderStyle.css'
const Slider = () => {
  return (
    <div className="hero">
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slideOne} alt="..." />
                    <div className="text-slider ">
                        <p className="text-slider-parag">ZAINA BLACK EDITION</p>
                        <h1 className="text-slider-head">CURVY BEVEL</h1>
                        <h1 className="text-slider-head">DUAL AUDIO</h1>
                        <button className="btn btn-outline-light">SHOP NOW</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slideTow}  alt="..." />
                    <div className="text-slider-2 ">
                        <p className="text-slider-parag">ZAINA BLACK EDITION</p>
                        <h1 className="text-slider-head">CURVY BEVEL</h1>
                        <h1 className="text-slider-head">DUAL AUDIO</h1>
                        <button className="btn btn-outline-dark">SHOP NOW</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slideThree} alt="..."/>
                    <div className="text-slider ">
                        <p className="text-slider-parag">ZAINA BLACK EDITION</p>
                        <h1 className="text-slider-head">CURVY BEVEL</h1>
                        <h1 className="text-slider-head">DUAL AUDIO</h1>
                        <button className="btn btn-outline-light">SHOP NOW</button>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Slider