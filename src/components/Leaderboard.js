import React, { useState, useEffect } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import db from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function Leaderboard() {
  // get puzzle imgs from firestore
  const [puzzles, setPuzzles] = useState([]);

  useEffect(() => {
    const colRef = collection(db, 'puzzles')
    const getPuzzles = async () => {
      const results = await getDocs(colRef);
      setPuzzles(results.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    getPuzzles()
  }, []);


  // Temporary id to link to puzzle
  const [temp, setTemp] = useState();
  const handleClick = (e) => {
    setTemp(e.currentTarget.id)
  };

  return (
    <div className='leaderboard'>
      <div className='leaderboard-container'>
        <p className='leaderboard-title'>Leaderboard</p>
        <div className='leaderboard-btns'>
          <Link
            to='/'
            className='return-btn'
          >
            Return
          </Link>
          <Link
            to={`/game/${temp}`}
            className='play-btn'
          >
            Play This Puzzle
          </Link>
        </div>
        <div className='leaderboard-puzzles'>
          {puzzles.map((puzzle) => (
            <NavLink
              to={`/leaderboard/${puzzle.id}`}
              key={puzzle.id}
              activeclassname='active'
              id={puzzle.id}
              onClick={handleClick}
            >
              <img
                src={puzzle.img}
                alt={puzzle.id}
              />
              <div className='leaderboard-level'>
                Level {puzzle.id}
              </div>
            </NavLink>
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Leaderboard
