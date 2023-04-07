import React from 'react'
import { Menu } from '../../Components/Menu/Menu'
import './home.css'
import { Stories } from '../../Components/Stories/Stories'

export const Home = () => {
  return (
    <div className='homeContent'>
      <div className="leftMenu">
        <Menu />
      </div>
      <div className="mainContent">
        <Stories />
      </div>
      <div className="rightMenu">
        Right Side Menu
      </div>
    </div>
  )
}
