import React from 'react'

import Button from './Generics/Button'
import backggroundLines from '../assets/Images/background-lines.svg'
import showcaseImage from '../assets/Images/showcase-image.svg'

const Showcase = () => {
  return (
    // <!-- showcase section -->
    <section className="showcase">
        <img className="background-lines" src={backggroundLines} alt="background-lines" />
        <div className="container">
            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your visison and value proposition and turn them into testable prototpes.</p>
                <Button  type="yellow" text="Get Consulting" url="/services/get-consulting" />
                <Button text="Learn More" url="/services/get-consulting" />
            </div>
            <img src={showcaseImage} alt="image of a man in a suit with a tablet" />
        </div>
    </section>
  )
}

export default Showcase