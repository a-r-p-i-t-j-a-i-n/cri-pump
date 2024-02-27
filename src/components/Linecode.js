import React from 'react'
import './p3.css'
import logo from '../Netart-Test/asserts/3.png'

import Redbox from './Redbox'
export const Linecode = () => {
  return (
    <>
    <div className='bg-yellow'>
    <div className='bg-yellow'><p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p></div>
  <div>
<img className='container-p' src={logo} alt="tools" />
<p className='mid'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
 
  <hr className="custom-hr" />
  <p className='mid-1'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
  </div>
  <p>CHEMICALS <span>|</span> PROCESS POWER WATER <span>|</span>  WASTE WATER OILS <span>|</span>  GAS PHARMA SUGARS <span>|</span>  DISTILLERIES PAPER <span>|</span>  PULP MARINE <span>|</span>  DEFENCE METAL <span>|</span>  MINING FOOD <span>|</span>  BEVERAGE PETROCHEMICAL <span>|</span>  REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE <span>|</span>  RESIDENTIAL</p>
  <Redbox/>
  </div>
  
  </>
    )
}
