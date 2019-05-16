import React from 'react'

const Contact = () => {
    return (      
        <div className="contact" id="contact">
            <h3 className="contact_header">CONTACT</h3>

            <form>
                <label>Name</label>
                <input type="text"/>
                <label>Email</label>
                <input type="text"/>
                <label>Message</label>
                <input type="text"/>
                <button>Submit</button>
            </form>

            <a className="contact_link" href="mailto:madelinerombes@gmail.com" target="blank">EMAIL ME</a>
            <a className="contact_link" href="https://www.linkedin.com/in/maddyrombes/" target="blank">LINKEDIN</a>
        </div>
    )
}

export default Contact