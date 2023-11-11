import React from 'react'
import phone from './../images/phone-icn.webp'
import caht from './../images/chat-icn.png'
import './SectionTwelveStyle.css'
const SectionTwelve = () => {
  return (
        <section className='sec-12'>
            <div className="container">
                <div class="row mt-5">
                    <div class="col-12">
                        <h4 class="text-center sec-3-head">WELCOME TO PHONO SUPPORT. WE'RE HERE TO HELP.</h4>
                        <p class="space-letter text-center mt-3">ALWAYS ON YOUR SIDE WHEN YOU NEED HELP</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 ml-1">
                        <div className="sec-12-box mt-5">
                            <div className="content">
                                <img src={phone} alt="" />
                                <div className="content-text">
                                    <h6>HAVE ANY DOUBTS?</h6>
                                    <h4>CALL US NOW</h4>
                                    <p>This Number is Toll Free
                                        0000 - 123 - 456789</p>
                                </div>
                            </div>
                            <button className='btn btn-dark sec-12-btn'>View More</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 ml-1">
                        <div className="sec-12-box mt-5">
                            <div className="content">
                                <img src={phone} alt="" />
                                <div className="content-text">
                                    <h6>HAVE ANY DOUBTS?</h6>
                                    <h4>CALL US NOW</h4>
                                    <p>This Number is Toll Free
                                        0000 - 123 - 456789</p>
                                </div>
                            </div>
                            <button className='btn btn-dark sec-12-btn'>View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

  )
}

export default SectionTwelve