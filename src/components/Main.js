import React from 'react'
import bridge from '../images/bridge.jpg'
import Header from './Header'

const Main = () => {
    return (
      <div>
        <img className="main_background" alt="bridge" src={bridge} />
        <Header />
      </div>
    )
}

export default Main