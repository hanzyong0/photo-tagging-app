import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPuzzle } from '../data';
import Menu from './Menu';

function Puzzle() {
  const { id } = useParams();

  const puzzle = getPuzzle(parseInt(id, 10));

  // Coordinates onclick
  const [coord, setCoord] = useState({ x: 0, y: 0 });

  // Coordinates for menu dropdown
  const [menuCoord, setMenuCoord] = useState({ menuX: 0, menuY: 0 });

  const getCoord = (e) => {
    // Coordinates for characters
    const image = document.querySelector('.image');
    const imagex = image.getBoundingClientRect().left;
    const imagey = image.getBoundingClientRect().top;
    const x = e.clientX - imagex;
    const y = e.clientY - imagey;
    setCoord({ x: x, y: y });

    // Coordinates for menu dropdown
    const menuX = e.pageX;
    const menuY = e.pageY;
    setMenuCoord({ menuX: menuX, menuY: menuY })
  }

  // Trigger menu dropdown when clicked
  const [clicked, setClicked] = useState(false);

  const showMenu = () => {
    setClicked(!clicked);
    // setClicked(true)
  }

  return (
    <div className='puzzle'>
      <header>
        <Link to='/'>
          <div className='return-btn'>
            Return
          </div>
        </Link>
        <div className='puzzle-chars'>
          {Object.entries(puzzle.characters).map(([key, value], index) => (
            <img
              src={value.img}
              alt={key}
              key={index}
            />
          ))}
        </div>
      </header>
      <main>
        <div className='container'>
          <img
            src={puzzle.img}
            alt={puzzle.id}
            onClick={(e) => { getCoord(e); showMenu(); }}
            className='image'
          // useMap='#map'
          >
          </img>
          {clicked && <Menu puzzle={puzzle} coord={coord} menuCoord={menuCoord} />}
          {/* <map name='map'>
            {Object.entries(puzzle.characters).map(([key, value]) => (
              <area
                shape='rect'
                coords={`${value.x1}, ${value.y1}, ${value.x2}, ${value.y2}`}
                alt={key}
                key={key}
                href='#'
              />
            ))}
          </map> */}
        </div>
      </main>
    </div>
  )
}

export default Puzzle
