import { Game, Direction, Move } from "../models";

/**
 * Generate random number between min and max
 * @param min 
 * @param max 
 */
export const randomNumber = (min: number, max: number) => {
  return min + Math.random() * (max + 1 - min);
}


/**
 * Generate random integer number between min and max
 * @param min 
 * @param max 
 */
export const randomInt = (min: number, max: number) => {
  return parseInt((min + Math.random() * (max + 1 - min)) + '');
}



/**
 * Execute the move and return the resulted game
 * @param move 
 */
export const slideRobot = (move: Move, game: Game): Game => {

  let x = game.robots[move.robotIndex].line,
    y = game.robots[move.robotIndex].column;

  if (move.direction == Direction.TOP) {
    //when you goto top, 'y' increase while 'x' stay unchanged
    while ((game.grid[x].length > y + 1) && !game.grid[x][y]._top && !game.grid[x][y + 1]._bottom) {
      y++;
    }
  }

  if (move.direction == Direction.BOTTOM) {
    //when you goto top, 'y' decrease while 'x' stay unchanged
    while (y > 1 && !game.grid[x][y]._bottom && !game.grid[x][y - 1]._top) {
      y--;
    }
  }

  if (move.direction == Direction.RIGHT) {
    //when you goto top, 'y' stay unchanged while 'x' increase
    while ((game.grid.length > x + 1) && !game.grid[x][y]._right && !game.grid[x + 1][y]._left) {
      x++;
    }
  }

  if (move.direction == Direction.LEFT) {
    //when you goto top, 'y' stay unchanged while 'x' decrease
    while (x > 1 && !game.grid[x][y]._left && !game.grid[x - 1][y]._right) {
      x--;
    }
  }

  game.robots[move.robotIndex].line = x;
  game.robots[move.robotIndex].column = y;
  return game;
}