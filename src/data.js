import level1 from '../assets/level-1.jpg';
import level2 from '../assets/level-2.jpg';
import level3 from '../assets/level-3.jpg';
import level4 from '../assets/level-4.jpg';
import level5 from '../assets/level-5.jpg';
import level6 from '../assets/level-6.jpg';

const puzzles = [
  {
    id: 1,
    img: { level1 },
  },
  {
    id: 2,
    img: { level2 },
  },
  {
    id: 3,
    img: { level3 },
  },
  {
    id: 4,
    img: { level4 },
  },
  {
    id: 5,
    img: { level5 },
  },
  {
    id: 6,
    img: { level6 },
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