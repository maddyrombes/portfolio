import React from 'react'
import laptop from '../images/laptop.png'

const Contact = () => {
    return (      
        <div className="contact" id="contact">
            <h3 className="contact_header">CONTACT</h3>
            <p className="contact_description">Get in touch!</p>
            <a className="contact_link" href="mailto:madelinerombes@gmail.com" target="blank">EMAIL ME</a>
            <a className="contact_link" href="https://www.linkedin.com/in/maddyrombes/" target="blank">LINKEDIN</a>
            <img className="contact_img" src={laptop} alt="laptop" />
        </div>
    )
}

export default Contact