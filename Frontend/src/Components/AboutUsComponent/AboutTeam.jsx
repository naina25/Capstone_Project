import React from 'react'
import './AboutTeam.css'
  
function AboutTeam(props) {
  return (
    <div className="about-us">
        <div className='aboutus-image'>
            <img src={props.imageurl} alt="" />
        </div>
        <div className='aboutus-content'>
                <h1>{props.text}</h1>
                <h3>{props.text2}</h3>
            </div>
        </div>    
  )
}

export default AboutTeam
