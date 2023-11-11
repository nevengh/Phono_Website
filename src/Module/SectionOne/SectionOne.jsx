import React from 'react'
import './SectionOneStyle.css'
const SectionOne = () => {
  return (
    <section className="section-2 bg-light">
        <div className="container ">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 m-auto">
                    <div className="row mt-3">
                        <div className="col-2">
                            <i className="fa-solid fa-truck-fast fast-truck"></i>
                        </div>
                        <div className="col-6">
                            <h5>FREE SHIPPING</h5>
                            <p>For Order Over $50</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 m-auto">
                    <div className="row mt-3">
                        <div className="col-2">
                            <i className="fa-regular fa-hand-scissors fast-truck"></i>
                        </div>
                        <div className="col-6">
                            <h5>OFFICIAL DISCOUNT</h5>
                            <p>Save Big next product</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 m-auto">
                    <div className="row mt-3">
                        <div className="col-2">
                            <i className="fa-solid fa-headphones-simple fast-truck"></i>
                        </div>
                        <div className="col-6">
                            <h5>24/7 HELPING</h5>
                            <p>Care till the end</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default SectionOne