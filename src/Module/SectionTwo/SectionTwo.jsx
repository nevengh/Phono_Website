import React from 'react'
import './SectionTwoStyle.css'
import Chip from './../images/ic12.webp'
import IntelProcess from './../images/ic13.avif'
import Battery from './../images/ic11.webp'
const SectionTwo = () => {
  return (
    <section class="section-3 ">
        <div class="container">
            <div class="row mt-5">
                <div class="col-12">
                    <h4 class="text-center sec-3-head">WHAT MAKE THE ESSENTIAL DIFFERENT ?</h4>
                    <p class="space-letter text-center mt-3">EXPERIENCE HIGH PERFORMANCE AND SECURE</p>
                </div>
            </div>
            
            <div class="row text-center">
                <div class="col-lg-4 col-md-6 col-sm-12 m-auto">
                    <div class="row mt-5">
                        <div class="col-12">
                            <img src= {Chip} alt=""  class="sec-3-img-icon"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h6>PERFECT CUT</h6>
                            <h5>DUAL CAMERA</h5>
                            <p>Tristique senscuts et netus et mal</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 m-auto">
                    <div class="row mt-5">
                        <div class="col-12">
                            <img src= {IntelProcess} alt=""  class="sec-3-img-icon"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h6>PERFECT CUT</h6>
                            <h5>DUAL CAMERA</h5>
                            <p>Tristique senscuts et netus et mal</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 m-auto">
                    <div class="row mt-5">
                        <div class="col-12">
                            <img src= {Battery} alt=""  class="sec-3-img-icon"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h6>PERFECT CUT</h6>
                            <h5>DUAL CAMERA</h5>
                            <p>Tristique senscuts et netus et mal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </section>
  )
}

export default SectionTwo