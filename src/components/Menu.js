import React, { useState, useEffect } from 'react'

function Menu(props) {
  const { setClicked, puzzle, coord, menuCoord, found, setFound } = props;

  // Temporarily store character's coordinates in here
  const [temp, setTemp] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });

  const handleBtnClick = (key, value) => {
    setTemp({ name: key, x1: value.x1, y1: value.y1, x2: value.x2, y2: value.y2 });
    setTimeout(() => {
      setClicked(false);
    }, 1);
  };

  // Validate whether coordinates is within character's coordinate and append to found array
  useEffect(() => {
    const validateCoord = () => {
      if ((coord.x > temp.x1 && coord.x < temp.x2) && (coord.y > temp.y1 && coord.y < temp.y2)) {
        setFound([...found, temp.name])
      }
    }
    validateCoord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [temp])

  return (
    <div
      className='dropdown'
      style={{
        position: 'absolute',
        left: menuCoord.menuX,
        top: menuCoord.menuY
      }}>
      {Object.entries(puzzle.characters).map(([key, value]) => (
        <button
          className='dropdown-btn'
          key={key}
          value={value}
          onClick={() => { handleBtnClick(key, value); }}
        >
          <img
            className='dropdown-img'
            src={value.img}
            alt={key}
          />
          <div className='dropdown-text'>
            {key}
          </div>
        </button>
      ))}
    </div >
  )
}

export default Menu
