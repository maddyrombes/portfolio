import React from 'react'

export default function Footer() {
  return (
    <div className="footer-outer" id="contact">
      <hr width="100%" />
      <div className="footer-inner">
        <div>
          <p className="footer-label">&#169; 2019</p>
          <a  className="footer-link" href="http://maddyrombes.com">Maddy Rombes</a>
        </div>
        <div>
          <p className="footer-label">CONTACT</p>
          <a className="footer-link" href="mailto:madelinerombes@gmail.com" target="blank">madelinerombes@gmail.com</a>
        </div>
        <div>
          <p className="footer-label">SOCIAL</p>
          <a className="footer-link" href="https://www.linkedin.com/in/maddyrombes/" target="blank">LinkedIn </a>/
          <a className="footer-link" href="https://github.com/maddyrombes" target="blank">  GitHub </a>/
          <a className="footer-link" href="https://twitter.com/romebees" target="blank"> Twitter</a>
        </div>
      </div>
    </div>
  )
}
