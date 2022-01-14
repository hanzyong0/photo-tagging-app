import React from 'react'

function Popup(props) {
  const { setOpaque } = props;

  const closeForm = () => {
    document.querySelector('.form-popup').style.display = 'none';
    setOpaque(false);
  };

  return (
    <div className='form-popup'>
      <form className='form-container'>
        <div className='top'>You finished in seconds</div>
        <div className='mid'>
          <p>Enter your name to save your score on the leaderboard</p>
          <label htmlFor='name'></label>
          <input id='name' type='text' placeholder='Enter Name Here'></input>
        </div>
        <div className='bottom'>
          <button type='button' onClick={closeForm}>Cancel</button>
          <button type='button'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Popup
