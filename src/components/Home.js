import React from 'react';
import { Link } from 'react-router-dom';

import db from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react'


function Home() {
  const colRef = collection(db, 'puzzles')

  const [puzzles, setPuzzles] = useState([]);

  useEffect(() => {
    const getPuzzles = async () => {
      const data = await getDocs(colRef);
      setPuzzles(data.docs.map(doc => ({ ...doc.data() })))
    }
    getPuzzles()
  }, [])

  return (
    <div className='home'>
      <div>
        <div className='container'>
          {puzzles.map(puzzle => (
            <Link
              to={`/game/${puzzle.id}`}
              key={puzzle.id}
            >
              <div className='cell'>
                <img
                  src={puzzle.img}
                  alt={`level-${puzzle.id}`}
                />
                <div className='cell-desc'>
                  <div>
                    {`Level ${puzzle.id}`}
                  </div>
                  <div className='cell-desc-img'>
                    {Object.entries(puzzle.characters).map(([key, value]) => (
                      <img
                        src={value.img}
                        alt={key}
                        key={key}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='home-leaderboard'>
        <div className='home-leaderboard-desc'>
          Think You Are Fast?
        </div>
        <Link
          to='/leaderboard'
          className='home-leaderboard-btn'
        >
          View Leaderboard
        </Link>
      </div>
    </div>
  )
}

export default Home
