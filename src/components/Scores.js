import React from 'react';
import { useParams } from 'react-router-dom';
import { getPuzzle } from '../data';

function Scores() {
  const { id } = useParams();
  const puzzle = getPuzzle(parseInt(id, 10));

  return (
    <div className='scores'>
      <div className='scores-header'>
        <p className='left'>NAME</p>
        <p className='right'>TIME (SECONDS)</p>
      </div>
      <div className='players'>
        <p className='left'>{puzzle.id}</p>
        <p className='right'>1115</p>
      </div>
    </div>
  )
}

export default Scores
