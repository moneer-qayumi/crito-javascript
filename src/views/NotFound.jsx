import React from 'react'
import '../components/CSS-SCSS/_NotFound.scss'
import Footer from '../components/Footer'
import img_notfound from '../assets/Images/no-found.png'
import Button from '../components/Generics/Button'

const NotFound = () => {
  return (
    <>
    <section className="not-found-section">
      <img className="NotFound" src={img_notfound} alt="NotFound" />
      <h1>Page Not Found</h1>
      <p>Unable to find the page that you are looking for.</p>
      <Button  type="yellow" text="Go Back to the Begining" url="/" />
        {/* <h1>
         <span>404</span><span>Page Not Found</span>
        </h1> */}
    </section>
    <Footer />
    </>
  )
}

export default NotFound