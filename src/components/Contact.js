import React from 'react'


const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h3 className="contact_header">CONTACT</h3>

      {/* <img className="butterfly" src={butterfly} /> */}

      <form className="contact-form">
        <input className="name-input" type="text" name="name" placeholder="Name" required />
        <input className="email-input" type="text" name="email" placeholder="Email" required />
        <input className="message-input" type="text" name="message" placeholder="Your message" required />
        <input type="submit" className="contact-submit" value="Submit" />
      </form>
    </div>
  )
}

export default Contact