import React from 'react'
import './SectionSixStyle.css'
import mobcamera from './../images/camera.webp'
const SectionSix = () => {
  return (
    <section class="sec-7 ">
        <div class="container">
            <div class="row mt-5">
                <div class="col-12">
                    <h4 class="text-center sec-3-head">RAISE YOUR EXPECTATIONS</h4>
                    <p class="space-letter text-center mt-3">REFINED VIEWING EXPERIENCE</p>
                </div>
            </div>

            <div class="row mt-5 ">
                <div class="col-lg-4 col-md-12 col-sm-12 m-auto">
                    <h3>42 FRONT CAMERA FOR PERFECT SHOT</h3>
                    <p class="mt-4">
                        Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.
                        Diam vulputate ut pharetra sit. Elit ut aliquam purus sit amet luctus venenatis lectus. Lorem dolor sed viverra ipsum nunc aliquet. Ut consequat semper viverra nam libero. Velit ut tortor aremn
                    </p>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <img class="sec-7-img" src={mobcamera} alt="" />
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default SectionSix