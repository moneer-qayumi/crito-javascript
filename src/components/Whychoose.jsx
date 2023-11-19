import React from 'react'

import img_whychoose from '../assets/Images/whychoose.png'

const Whychoose = () => {
  return (
    // <!-- Why Choose us -->
    <section className="why-choose-us">
        <div className="box"></div>
        <div className="why-choose-us-container">

            <div className="why-choose-us-header">
                <h6>Why Choose Us</h6>
                <h2>Why We Are The Best Business Consulting Agency</h2>
                <div className="why-choose-us-grid">
                    <div className="why-choose-us-header-container">
                            <div className="icon">
                                <i className="fa-light fa-thumbs-up"></i>
                            </div>
                            <div className="text">
                                <h4>Process Excellence</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                        <div className="why-choose-us-header-container">
                            <div className="icon">
                                <i className="fa-light fa-hexagon"></i>
                            </div>
                            <div className="text">
                                <h4>Strategic Planning</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                        <div className="why-choose-us-header-container">
                            <div className="icon">
                                <i className="fa-light fa-pen-nib"></i>
                            </div>
                            <div className="text">
                                <h4>Experience Design</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                        <div className="why-choose-us-header-container">
                            <div className="icon">
                                <i className="fa-light fa-head-side-gear"></i>
                            </div>
                            <div className="text">
                                <h4>Artificial Intelligence</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                </div>
            </div>
            <img src={img_whychoose} alt="talking two women" />
        </div>
        
    </section>
  )
}

export default Whychoose