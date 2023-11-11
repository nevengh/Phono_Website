import React from 'react'
import BG1 from './../images/bg-1.webp'
import './SectionElevenStyle.css'
const SectionEleven = () => {
  return (
    <section className='sec-11'>
        <div className="container">
            <div class="row mt-5">
                <div class="col-12">
                    <h4 class="text-center sec-3-head text-white mt-5">SEE WHY CUSTOMERS LOVE THE OUR MOBILES</h4>
                    <p class="space-letter text-center mt-3 text-white">DESIGNED TO PERFECTION</p>
                </div>
            </div>
            <div className="row mt-5">
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <img src={BG1} alt="" className='BG1-photo'/>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                <div class=" boxx">
                    <div class="accordion" id="mainAccordion">
                        <div class="accordion-item mb-5">
                            <div class="accordion-header">
                                <button class="accordion-button collapsed" data-bs-target="#q1" data-bs-toggle="collapse">
                                    <span>New Gradiat Color Finishes</span>
                                </button>
                            </div>

                                        <div class="collapse" id="q1" data-bs-parent="#mainAccordion">
                                            <div class="accordion-body">
                                                <p>
                                                    Rierem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item mb-5">
                                        <div class="accordion-header">
                                            <button class="accordion-button" data-bs-target="#q2" data-bs-toggle="collapse">
                                                <span>Four-Sided Curved Ceramic Body</span>
                                            </button>
                                        </div>
                                        <div class="collapse" id="q2" data-bs-parent="#mainAccordion">
                                            <div class="accordion-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item mb-5">
                                        <div class="accordion-header">
                                            <button class="accordion-button" data-bs-target="#q3" data-bs-toggle="collapse">
                                                <span>4000AH HIGH-CAPACITY BATTERY</span>
                                            </button>
                                        </div>
                                        <div class="collapse" id="q3" data-bs-parent="#mainAccordion">
                                            <div class="accordion-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item mb-5">
                                        <div class="accordion-header">
                                            <button class="accordion-button" data-bs-target="#q4" data-bs-toggle="collapse">
                                                <span>Four-Sided Curved Ceramic Body</span>
                                            </button>
                                        </div>
                                        <div class="collapse" id="q4" data-bs-parent="#mainAccordion">
                                            <div class="accordion-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default SectionEleven