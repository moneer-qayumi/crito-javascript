import React from 'react'
import Button from './Generics/Button'
import img_global from '../assets/Images/global-1.png'
import img_global2 from '../assets/Images/global-2.png'
import img_global3 from '../assets/Images/global-3.png'
import img_global4 from '../assets/Images/global-4.png'

const Project = () => {
  return (
    // <!-- Project & case studies section -->
    <section className="project-and-case">
        <div className="container">
            <div className="section-title">
                <p>Project & Case Studies</p>
                <h2>Let's Look At Our Global Projects</h2>
            </div>
            <div className="project-and-cases">
                <a className="project" href="#">
                    <img src={img_global} alt="A mans hands reading a business paper"/>
                    <h3>Grow your business</h3>
                    <div className="readmore">Read More <i className="fa-solid fa-arrow-up-right"></i></div>
                </a>
                <a className="project" href="#">
                    <img src={img_global2} alt="Pink Apple products on a disk"/>
                    <h3>Why your client needs a responsive website</h3>
                    <div className="readmore">Read More <i className="fa-solid fa-arrow-up-right"></i></div>
                </a>
                <a className="project" href="#">
                    <img src={img_global3} alt="Desk with office supplies"/>
                    <h3>Educate your employees to get better results</h3>
                    <div className="readmore">Read More <i className="fa-solid fa-arrow-up-right"></i></div>
                </a>
                <a className="project" href="#">
                    <img src={img_global4} alt="Laptop with business intelligene insights"/>
                    <h3>Business Insights is an important piece of your business</h3>
                    <div className="readmore">Read More <i className="fa-solid fa-arrow-up-right"></i></div>
                </a>
            </div>
            <div className="center-content">
                <Button  type="dark" text="Get Consulting" url="/services/get-consulting" />
                {/* <a className="btn-black" href="projects.html">Get Consulting <i className="fa-solid fa-arrow-up-right"></i></a> */}
            </div>

        </div>
    </section>
  )
}

export default Project