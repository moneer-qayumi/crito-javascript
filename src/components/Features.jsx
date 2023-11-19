import React from 'react'
import Button from './Generics/Button'

const Features = () => {
  return (
    // <!-- features section -->
    <section className="features-section">
        <div className="features-header">
            <div className="features-header-container">
                <h6>Features</h6>
                <h2>Our Accounting is trusted by thousands of companies</h2>
                <Button  type="yellow" text="Learn More" url="/services/get-consulting" />
                {/* <a className="btn-yellow" href="consulting.html">Learn More <i className="fa-solid fa-arrow-up-right"></i></a> */}
            </div>
        </div>

        <div className="features-grid">
            <div className="features-grid-container">
                <i className="fa-regular fa-handshake"></i>
                <h3>Business Advice</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="features-grid-container">
                <i className="fa-regular fa-lightbulb-on"></i>
                <h3>Startup Business</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="features-grid-container">
                <i className="fa-regular fa-money-bill-trend-up"></i>
                <h3>Financial Advice</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="features-grid-container">
                <i className="fa-regular fa-handshake"></i>
                <h3>Risk Management</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
        </div>
    </section>
  )
}

export default Features