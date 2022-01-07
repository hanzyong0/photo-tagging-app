import React from 'react';
import level1 from '../assets/level-1.jpg';

function Test() {
  function showCoords(event) {
    var x = event.pageX;
    var y = event.pageY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    console.log(coords);
  }
  return (
    <div>
      <img src={level1} alt='level-1' useMap='#level1' onClick={showCoords}></img>
      <map name='level1'>
        <area shape='rect' coords='528, 353, 555, 385' alt='waldo' href="#" />
        <area shape='rect' coords='240, 361, 260, 385' alt='odlaw' href="#" />
        <area shape='rect' coords='630, 354, 653, 383' alt='wizard' href="#" />
      </map>
    </div>
  )
}

export default Test
