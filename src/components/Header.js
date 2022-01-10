import React from 'react'
import { Outlet } from 'react-router-dom';
import waldoTitle from '../assets/waldo-title.jpg';

function Header() {
  return (
    <div>
      <header className='home-header'>
        <div className='header'>
          <span>
            <img src={waldoTitle} alt='waldo'></img>
          </span>
          <span className='header-title'>
            <span className='header-title-left'>
              Where's
            </span>
            <span className='header-title-right'>
              Waldo?
            </span>
          </span>
        </div>
      </header>
      <Outlet />
    </div>
  )
}

export default Header
