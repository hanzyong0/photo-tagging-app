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
        x1: 185,
        y1: 1368,
        x2: 215,
        y2: 1406
      }
    },
  },
  {
    id: 2,
    img: level2,
    characters: {
      waldo: {
        img: waldo,
        x1: 1005,
        y1: 239,
        x2: 1026,
        y2: 266,
      }
    },
  },
  {
    id: 3,
    img: level3,
    characters: {
      waldo: {
        img: waldo,
        x1: 951,
        y1: 58,
        x2: 974,
        y2: 85,
      },
      odlaw: {
        img: odlaw,
        x1: 43,
        y1: 537,
        x2: 71,
        y2: 580,
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
        x1: 698,
        y1: 162,
        x2: 720,
        y2: 187,
      },
      odlaw: {
        img: odlaw,
        x1: 365,
        y1: 1034,
        x2: 389,
        y2: 1066,
      },
      wizard: {
        img: wizard,
        x1: 873,
        y1: 1404,
        x2: 899,
        y2: 1442,
      },
      wenda: {
        img: wenda,
        x1: 335,
        y1: 1540,
        x2: 365,
        y2: 1571,
      },
    },
  },
  {
    id: 6,
    img: level6,
    characters: {
      waldo: {
        img: waldo,
        x1: 1145,
        y1: 34,
        x2: 1159,
        y2: 56,
      },
      odlaw: {
        img: odlaw,
        x1: 1095,
        y1: 429,
        x2: 1112,
        y2: 447,
      },
      wizard: {
        img: wizard,
        x1: 340,
        y1: 292,
        x2: 361,
        y2: 316,
      },
      wenda: {
        img: wenda,
        x1: 332,
        y1: 499,
        x2: 346,
        y2: 518,
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