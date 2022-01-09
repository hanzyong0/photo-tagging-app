import React from 'react'

function Menu(props) {
  const { menuCoord } = props;

  return (
    <div className='menu' style={{
      position: 'absolute',
      left: menuCoord.menuX,
      top: menuCoord.menuY
    }} >
      <button>{menuCoord.menuX}</button>
      <button>{menuCoord.menuY}</button>
    </div>
  )
}

export default Menu
