import React from 'react'
import laptopContact from '../images/laptop-contact.JPG'

const Contact = () => {
    return (      
        <div className="contact" id="contact">
            <h3 className="contact_header">CONTACT</h3>
            <a className="contact_link" href="mailto:madelinerombes@gmail.com" target="blank">EMAIL ME</a>
            <a className="contact_link" href="https://www.linkedin.com/in/maddyrombes/" target="blank">LINKEDIN</a>
            <img className="contact_laptop" alt="laptop" src={laptopContact} />
        </div>
    )
}

export default Contact