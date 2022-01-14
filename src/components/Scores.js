import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import db from '../firebase';

function Scores() {
  const { id } = useParams();

  // get player scores from firestore
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const colRef = collection(db, id);
    const unsub = onSnapshot(colRef, (snapshot) => {
      setScores(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    });
    return () => {
      unsub();
    };
  });

  return (
    <div className='scores'>
      <div className='scores-header'>
        <p className='left'>NAME</p>
        <p className='right'>TIME (SECONDS)</p>
      </div>
      {scores.map(score => (
        <div className='players' key={score.id}>
          <p className='left'>{score.name}</p>
          <p className='right'>{score.time}</p>
        </div>
      ))}
    </div>
  )
}

export default Scores
