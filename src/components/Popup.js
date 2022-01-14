import React from 'react'

function Popup(props) {
  const { setOpaque } = props;


  // form close when Cancel button clicked
  const closeForm = () => {
    document.querySelector('.form-popup').style.display = 'none';
    setOpaque(false);
  };


  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
  }

  return (
    <div className='form-popup' onSubmit={(e) => { handleSubmit(e); closeForm(); }}>
      <form className='form-container'>
        <div className='top'>You finished in seconds</div>
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
