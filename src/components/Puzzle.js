import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Menu from './Menu';

import db from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import Popup from './Popup';


function Puzzle() {
  const { id } = useParams();


  // get data from firestore and setstate
  const [puzzle, setPuzzle] = useState({});

  useEffect(() => {
    const docRef = doc(db, 'puzzles', id);
    const getPuzzle = async () => {
      const results = await getDoc(docRef);
      setPuzzle(results.data());

      // Populate puzzle's all characters array 
      setAllChars(Object.keys(results.data().characters));
    };
    getPuzzle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // Coordinates onclick
  const [coord, setCoord] = useState({ x: 0, y: 0 });

  // Coordinates for menu dropdown
  const [menuCoord, setMenuCoord] = useState({ menuX: 0, menuY: 0 });

  const getCoord = (e) => {
    // Coordinates for characters
    const image = document.querySelector('.image');
    const imagex = image.getBoundingClientRect().left;
    const imagey = image.getBoundingClientRect().top;
    const x = e.clientX - imagex;
    const y = e.clientY - imagey;
    setCoord({ x: x, y: y });

    // Coordinates for menu dropdown
    const menuX = e.pageX;
    const menuY = e.pageY;
    setMenuCoord({ menuX: menuX, menuY: menuY })
  }


  // Trigger menu dropdown when clicked
  const [clicked, setClicked] = useState(false);

  const showMenu = () => {
    setClicked(!clicked);
  }


  // State to keep track of found characters
  const [found, setFound] = useState([]);

  // All characters present in this puzzle
  const [allChars, setAllChars] = useState([]);

  // Add found classname by looping over found array
  useEffect(() => {
    // compare found to all characters present in this puzzle
    if (allChars.length === 0) {
      return;
    } else {
      if (allChars.every(element => found.includes(element))) {
        setOpaque(true);
        // return <Popup />
      };
      // set found class to found array
      found.forEach(element => {
        document.querySelector(`[name='${element}']`).classList.add('found');
      })
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [found])


  // blur background when form popup
  const [opaque, setOpaque] = useState(false);

  return (
    <div className='puzzle'>
      <header>
        <Link
          to='/'
          className='return-btn'
        >
          Return
        </Link>
        <div className='puzzle-chars'>
          {puzzle.characters && Object.entries(puzzle.characters).map(([key, value]) => (
            <img
              src={value.img}
              alt={key}
              key={key}
              name={key}
            />
          ))}
        </div>
      </header>
      <main>
        <div className={`container ${opaque ? 'hello' : null}`}>
          <img
            src={puzzle.img}
            alt={puzzle.id}
            onClick={(e) => {
              getCoord(e);
              showMenu();
            }}
            className='image'
          >
          </img>
          {clicked && <Menu
            setClicked={setClicked}
            puzzle={puzzle}
            coord={coord}
            menuCoord={menuCoord}
            found={found}
            setFound={setFound}
          />}
        </div>
      </main>
      {opaque && <Popup setOpaque={setOpaque} />}
    </div>
  )
}

export default Puzzle
