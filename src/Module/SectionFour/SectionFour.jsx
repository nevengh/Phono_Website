import React from 'react'
import htospot from './../images/hotspot_2934b3a5-cd7e-49be-b709-8269a17f7390.webp'
import Chipone from './../images/ic7.webp'
import simdual from './../images/dual sim.webp'
import batteryy from './../images/battery.png'
import camera from './../images/48mp camera.webp'
import './SectionFourStyle.css'
const SectionFour = () => {

    
  return (
    <section className="sec-5">
        <div className="container">
            <div className="row mt-5">
                <div className="col-12">
                    <h4 className="text-center sec-3-head">POSSIBILITIES. PERFORMANCE. POWER.</h4>
                    <p className="space-letter text-center mt-3">FASTER PROCESSING WITH LESS POWER</p>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-lg-6 m-auto">
                    <div className="line-abs">
                        <img className="sec-5-phone" src={htospot} alt="" />
                        <div className="circle">
                            <span className="span"></span>
                            <div className="boox">
                                <img src={Chipone} alt=""/>
                                <h6>SCORPION PROCESSOR</h6>
                                <p> et malesuada fames ac turpis</p>
                            </div>
                        </div>
                        <div className="circle-1">
                            <span></span>
                            <div className="boox-1">
                                <img src={simdual} alt=""/>
                                <h6>SCORPION PROCESSOR</h6>
                                <p> et malesuada fames ac turpis</p>
                            </div>
                        </div>
                        <div className="circle-2">
                            <span></span>
                            <div className="boox-2">
                                <img src={camera} alt=""/>
                                <h6>SCORPION PROCESSOR</h6>
                                <p> et malesuada fames ac turpis</p>
                            </div>
                        </div>
                        <div className="circle-3">
                            <span></span>
                            <div className="boox-3">
                                <img src={batteryy} alt=""/>
                                <h6>SCORPION PROCESSOR</h6>
                                <p> et malesuada fames ac turpis</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionFour