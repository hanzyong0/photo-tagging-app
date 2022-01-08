import React from 'react';
import { Link } from 'react-router-dom';
import waldoTitle from '../assets/waldo-title.jpg';

import level1 from '../assets/level-1.jpg';
import level2 from '../assets/level-2.jpg';
import level3 from '../assets/level-3.jpg';
import level4 from '../assets/level-4.jpg';
import level5 from '../assets/level-5.jpg';
import level6 from '../assets/level-6.jpg';
import waldo from '../assets/waldo.jpg';
import odlaw from '../assets/odlaw.jpg';
import wenda from '../assets/wenda.jpeg';
import wizard from '../assets/wizard.jpeg';

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
          <Link to='/game/1'>
            <div className='cell'>
              <img src={level1} alt='level-1'></img>
              <div className='cell-desc'>
                <div>
                  Level 1
                </div>
                <div className='cell-desc-img'>
                  <img src={waldo} alt='waldo'></img>
                </div>
              </div>
            </div>
          </Link>
          <Link to='/game/2'>
            <div className='cell'>
              <img src={level2} alt='level-2'></img>
              <div className='cell-desc'>
                <div>
                  Level 2
                </div>
                <div className='cell-desc-img'>
                  <img src={waldo} alt='waldo'></img>
                </div>
              </div>
            </div>
          </Link>
          <Link to=''>
            <div className='cell'>
              <img src={level3} alt='level-3'></img>
              <div className='cell-desc'>
                <div>
                  Level 3
                </div>
                <div className='cell-desc-img'>
                  <img src={waldo} alt='waldo'></img>
                  <img src={odlaw} alt='odlaw'></img>
                </div>
              </div>
            </div>
          </Link>
          <Link to=''>
            <div className='cell'>
              <img src={level4} alt='level-4'></img>
              <div className='cell-desc'>
                <div>
                  Level 4
                </div>
                <div className='cell-desc-img'>
                  <img src={waldo} alt='waldo'></img>
                  <img src={odlaw} alt='odlaw'></img>
                  <img src={wizard} alt='wizard'></img>
                </div>
              </div>
            </div>
          </Link>
          <Link to=''>
            <div className='cell'>
              <img src={level5} alt='level-5'></img>
              <div className='cell-desc'>
                <div>
                  Level 5
                </div>
                <div className='cell-desc-img'>
                  <img src={waldo} alt='waldo'></img>
                  <img src={odlaw} alt='odlaw'></img>
                  <img src={wizard} alt='wizard'></img>
                  <img src={wenda} alt='wenda'></img>
                </div>
              </div>
            </div>
          </Link>
          <Link to=''>
            <div className='cell'>
              <img src={level6} alt='level-6'></img>
              <div className='cell-desc'>
                <div>
                  Level 6
                </div>
                <div className='cell-desc-img'>
                  <img src={waldo} alt='waldo'></img>
                  <img src={odlaw} alt='odlaw'></img>
                  <img src={wizard} alt='wizard'></img>
                  <img src={wenda} alt='wenda'></img>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
