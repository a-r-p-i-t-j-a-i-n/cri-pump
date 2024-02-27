import React from 'react'
import logo from '../Netart-Test/asserts/logo.png'
import '../components/Logo.css'
const Logo = () => {
  return (
    <div className="logo-container">
    <img className="logo-image" src={logo} alt="Company Logo" />
  </div>
  )
}

export default Logo