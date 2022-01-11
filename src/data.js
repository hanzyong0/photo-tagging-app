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
        x1: 183,
        y1: 1344,
        x2: 216,
        y2: 1384
      }
    },
  },
  {
    id: 2,
    img: level2,
    characters: {
      waldo: {
        img: waldo,
        x1: 989,
        y1: 235,
        x2: 1014,
        y2: 264,
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
        x1: 687,
        y1: 160,
        x2: 707,
        y2: 185,
      },
      odlaw: {
        img: odlaw,
        x1: 359,
        y1: 1016,
        x2: 383,
        y2: 1047,
      },
      wizard: {
        img: wizard,
        x1: 860,
        y1: 1381,
        x2: 885,
        y2: 1418,
      },
      wenda: {
        img: wenda,
        x1: 331,
        y1: 1516,
        x2: 359,
        y2: 1544,
      },
    },
  },
  {
    id: 6,
    img: level6,
    characters: {
      waldo: {
        img: waldo,
        x1: 1127,
        y1: 33,
        x2: 1141,
        y2: 53,
      },
      odlaw: {
        img: odlaw,
        x1: 1079,
        y1: 421,
        x2: 1095,
        y2: 441,
      },
      wizard: {
        img: wizard,
        x1: 337,
        y1: 289,
        x2: 355,
        y2: 310,
      },
      wenda: {
        img: wenda,
        x1: 327,
        y1: 492,
        x2: 340,
        y2: 511,
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