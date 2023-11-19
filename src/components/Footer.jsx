import React from 'react'

import img_logotypewite from '../assets/Images/logotype-white.svg'

const Footer = () => {
  return (
    // <!-- footer -->
   
    <footer>
     <div className="footer-nav">
     
         <div className="footer-nav-2">
             <div className="footer-about">
                 <img src={img_logotypewite} alt=""/>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
             </div>
             <nav>
                 <div>
                     <h4>Company</h4>
                     <a href="#">About</a>
                     <a href="#">Features</a>
                     <a href="#">Works</a>
                     <a href="#">Career</a>
                 </div>
                 <div>
                     <h4>Help</h4>
                     <a href="#">Customer Support</a>
                     <a href="#">Delivery Details</a>
                     <a href="#">Terms & Conditions</a>
                     <a href="#">Privacy Policy</a>
                 </div>
                 <div>
                     <h4>Resources</h4>
                     <a href="#">Free eBooks</a>
                     <a href="#">Development Tutorial</a>
                     <a href="#">How To - Blog</a>
                     <a href="#">Youtube Playlist</a>
                 </div>
                 <div>
                     <h4>Links</h4>
                     <a href="#">Free eBooks</a>
                     <a href="#">Development Tutorial</a>
                     <a href="#">How To - Blog</a>
                     <a href="#">Youtube Playlist</a>
                 </div>
             </nav>
 
         </div>
 
     </div>
     <div className="footer-bottom">
         <div className="footer-bottom-container">
             <div className="mobile">
                 <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                 <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                 <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                 <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
             </div>
             <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
             <div className="social">
                 <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                 <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                 <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                 <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
             </div>
 
         </div>
 
     </div>
    </footer>
  )
}

export default Footer