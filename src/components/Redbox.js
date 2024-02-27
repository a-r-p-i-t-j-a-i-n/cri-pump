import React from 'react'
import './last.css'
import logo1 from '../Netart-Test/asserts/red-phone.jpg'
import logo2 from '../Netart-Test/asserts/face.png'
import logo3 from '../Netart-Test/asserts/web.jpg'

const Redbox = () => {
  return (
    <>
    <div >
     <div className='bg-red'>
     <a href='www.google.com'>  
     <img className='logoset' src={logo1} alt="" />
     <p className='first-p'>Toll free 1800 200 1234</p>
     </a>  
  </div>
  <div className='second'>
  <a href='www.google.com'>
  <img className='Logoset' src={logo2} alt=''/>
     <p className='second-p'>www.facebook.com/cripumps</p>
     </a>  
  </div>
  <div className='third'>
  <a href='www.google.com'>  
  <img className='logoSet' src={logo3} alt=''/>
     <p className='second-p'>www.crigroups.com</p>
     </a>  
  </div>
  <br />
  <div>
  
    <br />
  </div>
  </div>
    </>
  )
}

export default Redbox