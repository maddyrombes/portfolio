import React from 'react'
import me from '../images/me.jpg'

const About = () => {
  return (      
    <div className="about" id="about">
      <h3 className="about_header">ABOUT</h3>
      
      <div className="photo_section_container">
        <img className="me_img" src={me} alt="maddy" />

        <div className="about_description-container">
          <p className="about_description">I am a full stack developer with a passion for beautiful & powerful products. My editorial background gives me an astute eye for details and I view everything through an empathic lens.</p>
          <p className="about_description">Most importantly, I’m always learning.</p>
          <p className="about_description">Interested in working together? Shoot me an <a className="email-link" href="mailto:madelinerombes@gmail.com">email</a>.</p>
        </div>
      </div>
    </div>
  )
}

export default About