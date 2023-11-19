import { useState, useEffect } from 'react'
import Top from '../components/Top';
import News from '../components/News';
import Signup from '../components/Signup';

function News() {
    useEffect(() => {
      document.title = "News - Crito";
    }, [])
  
    return (
      <>
        <Top url="/" urlTitle="Home" here="News" header="News & Articles" />
        <OurNews />
        <Signup />
      </>
  )
}

export default News