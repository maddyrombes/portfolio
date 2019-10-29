import React from 'react'
import laptop from '../images/laptop.png'
import Header from './Header'

const Main = () => {
    return (
      <div>
        <img className="main_background" alt="laptop on sill" src={laptop} />
        <Header />
      </div>
    )
}

export default Main