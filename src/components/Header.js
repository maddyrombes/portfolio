import React from 'react'
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (      
        <div className="header_container">

          <div className="header">
            <h1>MADDY ROMBES</h1>
          </div>

          <ul className="mainnav_list">
              <li>
                <HashLink className="mainnav_listitem" to="/#about">ABOUT
                </HashLink>
              </li>
              <li>
                <HashLink className="mainnav_listitem" to="/#portfolio">PORTFOLIO
                </HashLink>
              </li>
              <li>
                <HashLink className="mainnav_listitem" to="/#writing">WRITING
                </HashLink>
              </li>
              <li>
                <HashLink className="mainnav_listitem" to="/#contact">CONTACT
                </HashLink>
              </li>
          </ul>

        </div>
    )
}

export default Header