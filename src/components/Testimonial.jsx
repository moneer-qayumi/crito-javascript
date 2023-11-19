import React from 'react'
import Button from './Generics/Button'
import img_Ellipse1 from '../assets/Images/Ellipse1.png'
import img_Ellipse2 from '../assets/Images/Ellipse2.png'
import img_Ellipse3 from '../assets/Images/Ellipse3.png'

const Testimonial = () => {
  return (
    // <!-- testimonial -->
    <section className="testimonial">
     <div className="testimonial-container">
         <h6>Testimonial</h6>
         <h2>What Our Client Says</h2>
 
         <div className="testimonial-grid">
             <div className="testimonial-grid-container">
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <p> "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                 <div className="name">
                     <img src={img_Ellipse1} alt=""/>
                     <div>
                         <h4>Cassandra Warren</h4>
                         <p>Business Manager, Dorfus</p>
                     </div>
                 </div>
             </div>
             <div className="testimonial-grid-container">
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <p> "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                 <div className="name">
                     <img src={img_Ellipse2} alt=""/>
                     <div>
                         <h4>Amanda Tulling</h4>
                         <p>Senior Developer, Square</p>
                     </div>
                 </div>
             </div>
             <div className="testimonial-grid-container">
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <p> "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                 <div className="name">
                     <img src={img_Ellipse3} alt=""/>
                     <div>
                         <h4>Jack McDogglas</h4>
                         <p>Key Account Manager, Gobona</p>
                     </div>
                 </div>
             </div>
         </div>
        <div className="center-content">
         <Button  type="dark" text="All Reviews" url="/services/get-consulting" />
         {/* <a className="btn-transparent" href="#">All Reviews<i className="fa-solid fa-arrow-up-right"></i></a> */}
        </div>
     </div>
    </section>
  )
}

export default Testimonial