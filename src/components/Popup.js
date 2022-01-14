import { addDoc, collection } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'
import db from '../firebase';

function Popup(props) {
  const { setOpaque, startTime, endTime, id } = props;

  // form close when Cancel button clicked
  const closeForm = () => {
    document.querySelector('.form-popup').style.display = 'none';
    setOpaque(false);
  };


  // calculate total time taken 
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    const number = (endTime - startTime) / 1000;
    setTotalTime(Math.round(number * 10) / 10);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // handle submit and addDoc
  const handleSubmit = async (e) => {
    e.preventDefault();
    const colRef = collection(db, id)
    await addDoc((colRef), {
      name: e.target.name.value,
      time: totalTime
    });
  };

  return (
    <div className='form-popup' onSubmit={(e) => { handleSubmit(e); closeForm(); }}>
      <form className='form-container'>
        <div className='top'>You finished in {totalTime} seconds</div>
        <div className='mid'>
          <p>Enter your name to save your score on the leaderboard</p>
          <label htmlFor='name'></label>
          <input id='name' type='text' placeholder='Enter Name Here'></input>
        </div>
        <div className='bottom'>
          <button type='button' onClick={closeForm}>Cancel</button>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Popup
