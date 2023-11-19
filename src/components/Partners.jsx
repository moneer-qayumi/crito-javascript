import React from 'react'

import img_paperz from '../assets/Images/paperz.svg'
import img_dorfus from '../assets/Images/dorfus.svg'
import img_martino from '../assets/Images/martino.svg'
import img_square from '../assets/Images/square.svg'
import img_gobona from '../assets/Images/gobona.svg'

const Partners = () => {
  return (
    // <!-- partners section -->
    <section className="logo-section">
        <div className="logo-container">
            <img src={img_paperz} alt="paperz logo"/>
            <img src={img_dorfus} alt="dorfus logo"/>
            <img src={img_martino} alt="martino logo"/>
            <img src={img_square} alt="square logo"/>
            <img src={img_gobona} alt="gobona logo"/>
        </div>
    </section>
  )
}

export default Partners