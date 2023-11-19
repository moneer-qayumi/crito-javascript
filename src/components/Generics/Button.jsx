import React from 'react'
import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';


const Button = ({type, text, url }) => {

    const getButtonClassName = () => {
        switch(type) {
            case 'yellow':
                return 'btn-yellow'
            case 'dark':
                return 'btn-black'
            default:
                return 'btn-transparent'
        }
    }



  return (
    <a className={getButtonClassName()} href={url}>
        {text} 
        <i className="fa-solid fa-arrow-up-right"></i>
    </a>
  )
}

export default Button