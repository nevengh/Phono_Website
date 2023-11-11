import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import './LoginStyle.css'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
const LogIn = () => {
  return (
    <>
    <NavBar/>
    <div className="heroo">
        <div className="form">
            <h5>Login</h5>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='password'/>
            <button type="button" class="btn btn-dark">Sign in</button>
            <hr className='line'/>
            <div className="links">
                <Link>Forgot Your Password ?</Link>
                <Link>Create Account</Link>
            </div>

        </div>
    </div>
    <Footer/>
    </>
  )
}

export default LogIn