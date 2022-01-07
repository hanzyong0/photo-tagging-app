import React from 'react';
import { Link } from 'react-router-dom';
import waldoTitle from '../assets/waldo-title.jpg';

function Home() {
  return (
    <div className='home'>
      <header>
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
      <div className='main'>
        <div className='container'>
          <Link to=''>
            <div className='cell'>
              1
            </div>
          </Link>
          <div className='cell'>
            1
          </div>
          <div className='cell'>
            1
          </div>
          <div className='cell'>
            1
          </div>
          <div className='cell'>
            1
          </div>
          <div className='cell'>
            1
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
