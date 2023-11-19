import React from 'react'
import Button from './Generics/Button'
import img_news1 from '../assets/Images/new-1.png'
import img_news2 from '../assets/Images/news-2.png'
import img_news3 from '../assets/Images/news-3.png'

const News = () => {
  return (
    // <!-- News -->
    <section className="news">
     <div className="news-container">
         <div className="news-header">
             <div className="news-header-container">
                 <h6>Articles & News</h6>
                 <h2>Get Every Single Article & News</h2>
             </div>
             <Button  type="btn-transparent" text="Browse Articles" url="/services/get-consulting" />
             {/* <a className="btn-transparent" href="#">Browse Articles<i className="fa-solid fa-arrow-up-right"></i></a> */}
         </div>
         <div className="news-grid">
             <a className="news-grid-container" href="#">
                 <div className="date">
                     <h4>25 <span>Mar</span></h4>
                 </div>
                 <img src={img_news1} alt="woman have break and have caffee"/>
                 <p>Business</p>
                 <h4>How To Use Digitalization In The Classroom</h4>
                 <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
             </a>
             <a className="news-grid-container" href="#">
                 <div className="date">
                     <h4>25 <span>Mar</span></h4>
                 </div>
                 <img src={img_news2} alt="a foto of chat GPT news"/>
                 <p>Business</p>
                 <h4>How To Implement Chat GPT In Your Projects</h4>
                 <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
             </a>
             <a className="news-grid-container" href="#">
                 <div className="date">
                     <h4>25 <span>Mar</span></h4>
                 </div>
                 <img src={img_news3} alt=" a foto of two books"/>
                 <p>Business</p>
                 <h4>The Guide To Support Modern CSS Design</h4>
                 <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
             </a>
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

export default News