import React from 'react'
import Button from './Generics/Button'
import img_team1 from '../assets/Images/team-1.png'
import img_team2 from '../assets/Images/team-2.png'
import img_team3 from '../assets/Images/team-3.png'
import img_team4 from '../assets/Images/team-4.png'

const meetourteam = () => {
  return (
    // <!-- meet our team -->
    <section className="meet-our-team">
     <div className="team-container">
         <div className="team-header">
             <div className="team-header-container">
                 <h6>Meet Our Team</h6>
                 <h2>Experience Team Members</h2>
             </div>
             <Button  type="btn-transparent" text="Browse Team" url="/services/get-consulting" />
             {/* <a className="btn-transparent" href="#">Browse Team <i className="fa-solid fa-arrow-up-right"></i></a> */}
         </div>
         <div className="team-grid">
             <div className="team-grid-container">
                 <img src={img_team1} alt="Photo of Kristine Palmer"/>
                 <h4>Kristine Palmer</h4>
                 <p>Chief Operation Officer</p>
             </div>
             <div className="team-grid-container">
                 <img src={img_team2} alt="Photo of Mark Aubri"/>
                 <h4>Mark Aubri</h4>
                 <p>Senior Consultant</p>
             </div>
             <div className="team-grid-container">
                 <img src={img_team3} alt="Photo of Kimberly Hansen"/>
                 <h4>Kimberly Hansen</h4>
                 <p>Senior Consultant</p>
             </div>
             <div className="team-grid-container">
                 <img src={img_team4} alt="Photo of Justin Willoman"/>
                 <h4>Justin Willoman</h4>
                 <p>Senior Tech Consultant</p>
             </div>
         </div>
         <span>
             <span className="dot"></span>
             <span className="dot"></span>
             <span className="dot"></span>
             <span className="dot"></span>
             <span className="dot"></span>
         </span>
     </div>
    </section>
  )
}

export default meetourteam