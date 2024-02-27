import React from 'react'
import logo from '../Netart-Test/asserts/1.png'
import '../components/Photo.css'
import logo1 from '../Netart-Test/asserts/2.png'
export const Photo1 = () => {
  return (
    <>
    
    <div className='flex-container'>
        <img className='container-photo' src={logo} alt='trophy' />
        <div className='other-content'>
          <p className='bold-text'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
          <ul className='bullet-list'>
            <li>
              <div>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</div>
              <div>C.R.I. is the highest contributor in the country for the projects of EESL Energy Efficiency Services Limited to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</div>
            </li>
          
          </ul>
          <img className='' src={logo1} alt=''/>
          <p >Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </div>

    
    </>
  )
}
