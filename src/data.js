import level1 from './assets/level-1.jpg';
import level2 from './assets/level-2.jpg';
import level3 from './assets/level-3.jpg';
import level4 from './assets/level-4.jpg';
import level5 from './assets/level-5.jpg';
import level6 from './assets/level-6.jpg';
import waldo from './assets/waldo.jpg';
import odlaw from './assets/odlaw.jpg';
import wenda from './assets/wenda.jpg';
import wizard from './assets/wizard.jpg';

const puzzles = [
  {
    id: 1,
    img: level1,
    characters: [
      waldo
    ],
  },
  {
    id: 2,
    img: level2,
    characters: [
      waldo
    ],
  },
  {
    id: 3,
    img: level3,
    characters: [
      waldo,
      odlaw
    ],
  },
  {
    id: 4,
    img: level4,
    characters: [
      waldo,
      odlaw,
      wizard
    ],
  },
  {
    id: 5,
    img: level5,
    characters: [
      waldo,
      odlaw,
      wenda,
      wizard
    ],
  },
  {
    id: 6,
    img: level6,
    characters: [
      waldo,
      odlaw,
      wenda,
      wizard
    ],
  },
];

const getPuzzles = () => {
  return puzzles;
};

const getPuzzle = (id) => {
  return puzzles.find(
    puzzle => puzzle.id === id
  );
};

export { getPuzzles, getPuzzle }