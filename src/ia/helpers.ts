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
export const randomInt = (min: number, max: number, excludes: number[] = []) => {
  let n = parseInt((min + Math.random() * (max + 1 - min)) + '');
  while (excludes.includes(n)) n = parseInt((min + Math.random() * (max + 1 - min)) + '');
  return n;
}


const thereIsRobotAt = (game: Game, row: number, column: number): boolean => {
  for(let i=0, t = game.robots.length; i < t; ++i) {
    if(game.robots[i].row == row && game.robots[i].column == column) {
      return true;
    }
  }
  return false;
}



/**
 * Check if given game is solved
 * @param game 
 */
export const isSolved = (game: Game): boolean => {

  const targetRow = game.target.row;
  const targetColumn = game.target.column;
  const targetColor = game.target.color;

  for (let i = 0, l = game.robots.length; i < l; i++) {
    let { row, column, color } = game.robots[i];
    if (row == targetRow && column == targetColumn && color == targetColor) {
      return true;
    }
  }

  return false;
}







/**
 * Execute the move and return the resulted game
 * @param move 
 */
export const slideRobot = (move: Move, game: Game): Game => {
  let r = game.robots[move.robotIndex].row,
    c = game.robots[move.robotIndex].column;

  if (move.direction == Direction.RIGHT) {
    //when you goto right, 'c' increase while 'r' stay unchanged
    while (c + 1 < game.grid[r].length && !game.grid[r][c]._right && !game.grid[r][c + 1]._left && !thereIsRobotAt(game, r, c + 1)) {
      c++;
    }
  }

  if (move.direction == Direction.LEFT) {
    //when you goto left, 'c' decrease while 'r' stay unchanged
    while (c - 1 >= 0 && !game.grid[r][c]._left && !game.grid[r][c - 1]._right && !thereIsRobotAt(game, r, c - 1)) {
      c--;
    }
  }

  if (move.direction == Direction.BOTTOM) {
    //when you goto top, 'c' stay unchanged while 'r' increase
    while (r + 1 < game.grid.length && !game.grid[r][c]._bottom && !game.grid[r + 1][c]._top && !thereIsRobotAt(game, r + 1, c)) {
      r++;
    }
  }

  if (move.direction == Direction.TOP) {
    //when you goto top, 'c' stay unchanged while 'r' decrease
    while (r - 1 >= 0 && !game.grid[r][c]._top && !game.grid[r - 1][c]._bottom && !thereIsRobotAt(game, r - 1, c)) {
      r--;
    }
  }

  game.robots[move.robotIndex].row = r;
  game.robots[move.robotIndex].column = c;
  return game;
}