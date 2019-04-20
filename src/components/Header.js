import React from 'react'

const Header = () => {
    return (      
        <div className="header_container">

          <div className="header">
            <h1>MADDY ROMBES</h1>
          </div>

          <ul className="mainnav_list">
              <li className="mainnav_listitem"><a>ABOUT</a></li>
              <li className="mainnav_listitem"><a>PORTFOLIO</a></li>
              <li className="mainnav_listitem"><a>WRITING</a></li>
              <li className="mainnav_listitem"><a>CONTACT</a></li>
          </ul>

        </div>
    )
}

export default Header