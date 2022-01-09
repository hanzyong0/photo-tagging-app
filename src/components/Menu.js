import React from 'react'

function Menu(props) {
  const { puzzle, coord, menuCoord } = props;

  return (
    <div
      className='dropdown'
      style={{
        position: 'absolute',
        left: menuCoord.menuX,
        top: menuCoord.menuY
      }}>
      {/* <div className='dropdown'> */}
      {Object.entries(puzzle.characters).map(([key, value]) => (
        <div
          className='dropdown-btn'
          key={key}
        >
          <img
            className='dropdown-img'
            src={value.img}
            alt={key}
          />
          <div className='dropdown-text'>
            {key}
          </div>
        </div>
      ))}
      {/* </div> */}
    </div >
  )
}

export default Menu
