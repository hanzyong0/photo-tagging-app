import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPuzzle } from '../data';

function Puzzle() {
  const { id } = useParams();

  const puzzle = getPuzzle(parseInt(id, 10));

  return (
    <div className='puzzle'>
      <header>
        <Link to='/'>
          <div className='return-btn'>
            Return
          </div>
        </Link>
        <div className='puzzle-chars'>
          {puzzle.characters.map(character => (
            <img
              src={character}
              alt={puzzle.id}
              key={puzzle.id}
            />
          ))}
        </div>
      </header>
      <main>
        <div className='container'>
          <img src={puzzle.img} alt={puzzle.id}></img>
        </div>
      </main>
    </div>
  )
}

export default Puzzle
