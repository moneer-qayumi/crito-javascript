import { useState, useEffect} from 'react'
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import ContactMap from '../components/ContactMap';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Top from '../components/Top';

const Contact = () => {
    useEffect(() => {
        document.title = "Contact - Crito";
      }, [])
  return (
    <>
      <Header />
       <Top url="/" urlTitle="Home" here="Contact" header="Let's Connect" />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <Footer />
    </>
  )
}

export default Contact