import React from 'react'
import Button from './Generics/Button'
import img_backgroundwavylines from '../assets/Images/background-wavy-lines.svg'

const Signup = () => {
  return (
    // <!-- signup -->
    <section className="signup">
     <img src={img_backgroundwavylines} alt=""/>
     <div className="signup-container">
         <h2>Get News Updates By Signup</h2>
         <form>
             <input type="email" id="email" name="email" title="Email" placeholder="username@domain.com"/>
             <Button  type="yellow" text="Subscribe " url="/services/get-consulting" />
             {/* <a className="btn-yellow" href="consulting.html">Subscribe <i className="fa-solid fa-arrow-up-right"></i></a> */}
         </form>
     </div>
    </section>
  )
}

export default Signup