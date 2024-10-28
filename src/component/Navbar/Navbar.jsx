import React from 'react'
import styles from './Navbar.module.css';


function Navbar() {
  return (
    <nav className='container'>
        <div className="log">
            <img src="/images/logo.png" alt="logo" />
        </div>
        <ul>
        <li>HOME </li>
        <li>ABOUT</li>
        <li>CONTACT</li>
        
      </ul>
    </nav>
  )
}

export default Navbar