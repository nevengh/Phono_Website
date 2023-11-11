import React from 'react'
import './Footer.css'
import visa from './../images/visa.png'
import paypal from './../images/paypal.png'
import amex from './../images/amex.png'
import mastercard from './../images/mastercard.png'
const Footer = () => {
  return (
    <section className='footer mt-5 bg-dark'>
        <div className="container">
        <div className="row">
                <div className="col-lg-6 col-md-12">
                    <p className='text-white '>&copy; 2023, Phono (password: buddha) Design Themes</p>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="images-footer">
                        <img src={visa} alt="" />
                        <img src={paypal} alt="" />
                        <img src={amex} alt="" />
                        <img src={mastercard} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer