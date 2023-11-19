import React from 'react'

const SubmitButton = ({className, text}) => {
  return (
    <button type="submit" className={`login-button${className ? (" " + className) : ("")}`}>{text}<i className="fa-solid fa-arrow-up-right"></i></button>
  )
}

export default SubmitButton