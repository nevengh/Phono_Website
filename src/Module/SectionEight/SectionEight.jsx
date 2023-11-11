import React from 'react'
import './SectionEightStyle.css'
import ic5 from './../images/ic5.png'
import ic6 from './../images/ic6.webp'
import ic3 from './../images/ic3.webp'
import ic2 from './../images/ic2.png'
import ic4 from './../images/ic4 (1).webp'
import centerimg from './../images/center-img_eb064c43-efaf-4d56-90df-f89acfdf85fe.webp'
const SectionEight = () => {
  return (
    <section class="sec-9">
        <div class="container">
            <div class="row mt-5">
                <div class="col-12">
                    <h4 class="text-center sec-3-head">INNOVATIVE QUALITIES & FEATURES</h4>
                    <p class="space-letter text-center mt-3">SHOW YOURS TO THE WORLD</p>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="row">
                        <div class="col-8">
                            <h5>INTELLIGENT PROCESSOR</h5>
                            <p>Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri</p>
                        </div>
                        <div class="col-4">
                            <img class="sec-9-img-hover" src={ic5} alt=""/>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-8">
                            <h5>HD SURROUND AUDIO</h5>
                            <p>Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri</p>
                        </div>
                        <div class="col-4">
                            <img class="sec-9-img-hover" src={ic6} alt=""/>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-8">
                            <h5>STYLISH BEVEL EDGES</h5>
                            <p>Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri</p>
                        </div>
                        <div class="col-4">
                            <img class="sec-9-img-hover" src={ic3} alt=""/>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <img class="sec-9-middle-image" src={centerimg} alt=""/>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="row">
                        <div class="col-4">
                            <img class="sec-9-img-hover" src={ic5} alt=""/>
                        </div>
                        <div class="col-8">
                            <h5>INTELLIGENT PROCESSOR</h5>
                            <p>Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri</p>
                        </div>
                        
                    </div>
                    <div class="row mt-5">
                        <div class="col-4">
                            <img class="sec-9-img-hover" src={ic4} alt=""/>
                        </div>
                        <div class="col-8">
                            <h5>HD SURROUND AUDIO</h5>
                            <p>Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri</p>
                        </div>
                        
                    </div>
                    <div class="row mt-5">
                        <div class="col-4">
                            <img class="sec-9-img-hover" src={ic2} alt=""/>
                        </div>
                        <div class="col-8">
                            <h5>STYLISH BEVEL EDGES</h5>
                            <p>Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionEight