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
    characters: {
      waldo: {
        img: waldo,
        x1: 171,
        y1: 1262,
        x2: 201,
        y2: 1300
      }
    },
  },
  {
    id: 2,
    img: level2,
    characters: {
      waldo: {
        img: waldo,
        x1: 930,
        y1: 220,
        x2: 953,
        y2: 247,
      }
    },
  },
  {
    id: 3,
    img: level3,
    characters: {
      waldo: {
        img: waldo,
        x1: 881,
        y1: 55,
        x2: 903,
        y2: 80,
      },
      odlaw: {
        img: odlaw,
        x1: 40,
        y1: 505,
        x2: 68,
        y2: 546,
      }
    },
  },
  {
    id: 4,
    img: level4,
    characters: {
      waldo: {
        img: waldo,
        x1: 532,
        y1: 358,
        x2: 553,
        y2: 382,
      },
      odlaw: {
        img: odlaw,
        x1: 241,
        y1: 361,
        x2: 260,
        y2: 384,
      },
      wizard: {
        img: wizard,
        x1: 631,
        y1: 357,
        x2: 653,
        y2: 381,
      },
    },
  },
  {
    id: 5,
    img: level5,
    characters: {
      waldo: {
        img: waldo,
        x1: 647,
        y1: 151,
        x2: 666,
        y2: 174,
      },
      odlaw: {
        img: odlaw,
        x1: 339,
        y1: 957,
        x2: 360,
        y2: 985,
      },
      wizard: {
        img: wizard,
        x1: 807,
        y1: 1298,
        x2: 833,
        y2: 1333,
      },
      wenda: {
        img: wenda,
        x1: 311,
        y1: 1424,
        x2: 338,
        y2: 1453,
      },
    },
  },
  {
    id: 6,
    img: level6,
    characters: {
      waldo: {
        img: waldo,
        x1: 1060,
        y1: 31,
        x2: 1074,
        y2: 50,
      },
      odlaw: {
        img: odlaw,
        x1: 1015,
        y1: 397,
        x2: 1031,
        y2: 413,
      },
      wizard: {
        img: wizard,
        x1: 316,
        y1: 270,
        x2: 335,
        y2: 291,
      },
      wenda: {
        img: wenda,
        x1: 306,
        y1: 462,
        x2: 321,
        y2: 479,
      },
    },
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