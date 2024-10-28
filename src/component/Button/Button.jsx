import React from 'react';
import styles from './Button.module.css'; 


function Button({ text, icon }) {
  return (
    <button style={{ 
      width: '200px',
      height: '50px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      fontSize:'15px',
      cursor:'pointer',
      background:'black',
      color:'white',
      border:'none',
      borderRadius:'10px'
      }}> 
      {icon}
      {text}
    </button>
   
  );
}
export default Button;
