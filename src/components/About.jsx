import React from 'react'
import Button from './Generics/Button'

import img_woman from '../assets/Images/Image.png'
import img_element from '../assets/Images/EWlement.svg'


const About = () => {
  return (
    // <!-- about company -->
    <section className="about-company">
        <div className="woman-container">
            <img className="woman" src={img_woman} alt="A womman have laptop in hand and walking" />
            <img className="element" alt="decorative lines" src={img_element} />
            <div className="founder">
                <h4>Samantha Brown, <span>Founder</span></h4>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
            </div>
        </div>
        <div className="about-container">
            <h6>About Company</h6>
            <h2>We Are Business Consulting & Credit Repair Experts</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos. <br></br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
            <div className="about-buttons">
                <Button  type="dark" text="Learn More" url="/services/get-consulting" />
                {/* <a className="btn-black" href="#">Learn More<i className="fa-solid fa-arrow-up-right"></i></a> */}
                <button type="button"><i className="fa-solid fa-play"></i></button>
                <p>Intro Video</p>
            </div>
        </div>
    </section>
  )
}

export default About