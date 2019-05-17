import React from 'react'
import butterfly from '../images/butterfly.JPG'


const Contact = () => {
    return (      
        <div className="contact" id="contact">
            <h3 className="contact_header">CONTACT</h3>

            <img className="butterfly" src={butterfly} />

            <form className="contact-form">
                <input className="name-input" type="text" placeholder="Name"/>
                <input className="email-input" type="text" placeholder="Email"/>
                <input className="message-input" type="text" placeholder="Your message" />
                <button className="contact-submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact