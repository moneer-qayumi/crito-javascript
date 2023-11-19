import React from 'react'
import { Link } from 'react-router-dom'
// import backggroundLines from '../assets/Images/background-lines.svg'


const Top = ({url, urlTitle, here, header}) => {
  return (
    <section className="top">
    {/* <img className="element" src={backggroundLines} alt="Decorative lines" /> */}
    <div className="breadcrumb">
        <Link to={url}>{urlTitle}</Link>
        <a href="#">{here}</a>
    </div>
    <h1>
        {header}
    </h1>
</section>
  )
}

export default Top