import { useEffect } from 'react'
import Header from '../components/Header'
import Showcase from '../components/Showcase'
import Partners from '../components/Partners'
import Features from '../components/Features'
import About from '../components/About'
import Ourservices from '../components/Ourservices'
import Whychoose from '../components/Whychoose'
import Project from '../components/Project'
import Meetourteam from '../components/Meetourteam'
import Testimonial from '../components/Testimonial'
import News from '../components/News'
import Signup from '../components/Signup'
import Footer from '../components/Footer'


const Home = () => {
    useEffect(() => {
      document.title = "Home - Crito";
    }, [])
  return (
    <>
        <Header />
        <Showcase />
        <Partners />
        <Features />
        <About />
        <Ourservices />
        <Whychoose />
        <Project />
        <Meetourteam />
        <Testimonial />
        <News />
        <Signup />
        <Footer />

    </>
  )
}

export default Home