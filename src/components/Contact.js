import React from 'react'


class Contact extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      message: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    window.open(`mailto:madelinerombes@gmail.com?subject="Greetings from ${this.state.name}"&body=${this.state.message}`);
  }

  render() {
    return (
      <div className="contact" id="contact" >
        <h3 className="contact_header">CONTACT</h3>
        <form className="contact-form" onSubmit={this.handleSubmit} >
          <input onChange={this.handleChange} className="name-input" type="text" name="name" placeholder="Name" required />
          <input onChange={this.handleChange} className="message-input" type="text" name="message" placeholder="Your message" required />
          <input type="submit" className="contact-submit" value="Submit" />
        </form>
      </div >
    )
  }
}

export default Contact