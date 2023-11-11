import React from 'react'
import './NavBarStyle.css'
import { Link } from 'react-router-dom'
import bg1 from './../images/bg-1 (1).webp'
import logo from './../images/logo.webp'

import { useState,useEffect } from 'react'
import axios from 'axios'

const NavBar = () => {
    
    const [select , setSelect] = useState([])
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
        .then((response) =>{
            setSelect(response.data)
        })
    },[]);




    


  return (
<>
<nav className="navbar navbar-expand-lg bg-body-light">
  <div className="container">
    <div className="navbar-brand"><img src={logo}  alt="" /></div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <a class="" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <span class="navbar-toggler-icon"></span>
            </a>
        </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link to="/" className='nav-link active text-danger nav-active'>Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className='nav-link'>About</Link>
            </li>
            <li className="nav-item">
                <Link to="/login" className='nav-link'>LogIn</Link>
            </li>
            <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Collection
            </Link>
            <ul className="dropdown-menu">
                <div className="row">
                    <div className="col-2">
                        <h5 className='text-center'>SSD CARD</h5>
                        <hr />
                        <ul className='text-center'>
                            <li>Infinity M20</li>
                            <li>Anfinity p40 pro</li>
                            <li>po v40 thinQ</li>
                            <li>Techno 703</li>
                            <li>Techno 8.1</li>
                            <li>Nexian</li>
                            <li>fix A phone</li>
                            <li>Hisense</li>
                            <li>Force cell</li>
                        </ul>
                    </div>
                    <div className="col-2">
                    <h5 className='text-center'>POWER BANKS</h5>
                    <hr />
                    <ul className='text-center'>
                        <li>Infinity M20</li>
                        <li>Anfinity p40 pro</li>
                        <li>po v40 thinQ</li>
                        <li>Techno 703</li>
                        <li>Techno 8.1</li>
                        <li>Nexian</li>
                        <li>fix A phone</li>
                        <li>Hisense</li>
                        <li>Force cell</li>
                    </ul>
                    </div>
                    <div className="col-2 ">
                    <h5 className='text-center'>POWER BANKS</h5>
                    <hr />
                    <ul className='text-center'>
                        <li>Infinity M20</li>
                        <li>Anfinity p40 pro</li>
                        <li>po v40 thinQ</li>
                        <li>Techno 703</li>
                        <li>Techno 8.1</li>
                        <li>Nexian</li>
                        <li>fix A phone</li>
                        <li>Hisense</li>
                        <li>Force cell</li>
                    </ul>
                    </div>
                    <div className="col-2 ">
                    <h5 className='text-center'>POWER BANKS</h5>
                    <hr />
                    <ul className='text-center'>
                        <li>Infinity M20</li>
                        <li>Anfinity p40 pro</li>
                        <li>po v40 thinQ</li>
                        <li>Techno 703</li>
                        <li>Techno 8.1</li>
                        <li>Nexian</li>
                        <li>fix A phone</li>
                        <li>Hisense</li>
                        <li>Force cell</li>
                    </ul>
                    </div>
                    <div className="col-4">
                        <img src={bg1} alt="" className='bg1'/>
                    </div>
                </div>
            </ul>
            </li>
            <li className="nav-item">
                <Link className='nav-link'>Shop</Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link'>Android</Link>
            </li>
        </ul>
    </div>
    <div className="icons">
            <Link to='/login'><i className="fa-solid fa-user Log-in"></i></Link>
            <Link><i className="fa-solid fa-cart-plus"></i></Link>
            <Link><i className="fa-solid fa-search"></i></Link>
    </div>
    {/* Flags */}
    <select className='ms-2 select-menu'>
        {
            select.map((select) =>{
                return(
                    <option>
                        {select.name.common}
                    </option>
                )
            })
        }
    </select>
    </div>
    
</nav>
<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
            <h5 h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <ul className="list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                
            </ul>
        </div>
</div>
    
</>
)
}


export default NavBar