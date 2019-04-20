import React from 'react'
import bridge from '../images/bridge.jpg'
import me from '../images/me.jpg'
import Header from './Header'

const Main = () => {
    return (
      <div>
        <img className="main_background" alt="bridge" src={bridge} />
        <Header />
        <img className="me_img" alt="me" src={me} />
      </div>
    )
}

export default Main