import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPuzzle } from '../data';

function Puzzle() {
  const { id } = useParams();

  const puzzle = getPuzzle(parseInt(id, 10));

  const getCoord = (e) => {
    const image = document.querySelector('.image');
    const imagex = image.getBoundingClientRect().left;
    const imagey = image.getBoundingClientRect().top;
    const x = e.clientX - imagex;
    const y = e.clientY - imagey;
    console.log(`X = ${x}, y = ${y}`)
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
            onClick={getCoord}
            useMap='#map'
            className='image'
          >
          </img>
          <map name='map'>
            {Object.entries(puzzle.characters).map(([key, value], index) => (
              <area
                shape='rect'
                coords={`${value.x1}, ${value.y1}, ${value.x2}, ${value.y2}`}
                alt={key}
                key={key}
              />
            ))}
          </map>
        </div>
      </main>
    </div>
  )
}

export default Puzzle
