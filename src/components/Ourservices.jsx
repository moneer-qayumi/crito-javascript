import React from 'react'
import Button from './Generics/Button'

const Ourservices = () => {
  return (
    // <!-- Our Services -->
    <section className="our-services">
        
        <div className="services-container">
            <h6>Our Services</h6>
            <h2>We Provide The Best Service For Consulting</h2>
            <div className="services-grid">
                <div className="services-grid-container">
                    <h4>Business Advice</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div>
                        <a href="#"><i className="fa-light fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="services-grid-container startup">
                    <h4>Startup Business</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div>
                        <a href="#"><i className="fa-light fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="services-grid-container">
                    <h4>Financial Advice</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div>
                        <a href="#"><i className="fa-light fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="services-grid-container">
                    <h4>Risk Management</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div>
                        <a href="#"><i className="fa-light fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="center-content">
                <Button  type="btn-transparent" text="Browse Services" url="/services/get-consulting" />
                {/* <a className="btn-transparent" href="services.html">Browse Services <i className="fa-solid fa-arrow-up-right"></i></a> */}
            </div>
        </div>
    </section>
  )
}

export default Ourservices