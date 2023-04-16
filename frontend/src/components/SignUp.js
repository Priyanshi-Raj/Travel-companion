import React from 'react'
import "./SignUp.css"
import { Link } from 'react-router-dom'
import background from "./assets/images/back.jpg"

function SignUp() {
  return (
    <div style={{ backgroundImage: `url(${background})`}} className='wrapper' >
     <h1>How do You Want To Use Our Website?</h1>
     <p>We’ll personalize your setup experience accordingly.</p>
     <Link to="/" className='bt'>
       <div className='btcont'>
       I am a local
       </div>
     </Link>
     <Link  to="/" className='bt'>
       <div className='btcont'>
       I am a traveller
       </div>
     </Link>
    </div>
  )
}

export default SignUp
