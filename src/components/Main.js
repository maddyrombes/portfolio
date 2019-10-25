import React from 'react'
import laptop from '../images/laptop.JPG'
import Header from './Header'

const Main = () => {
    return (
      <div>
        <img className="main_background" alt="bridge" src={laptop} />
        <Header />
      </div>
    )
}

export default Main