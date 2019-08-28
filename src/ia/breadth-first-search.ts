import { Game, Direction, Move } from "../models";

/**
 * Node of BFS algorithm tree
 */
interface BFSItem {
  parent: BFSItem,
  game: Game,
  previous: Move
}

/**
 * A constant variable to hold all direction, so it will be easy to loop on all direction
 */
const allDirections: Direction[] = [
  Direction.TOP,
  Direction.BOTTOM,
  Direction.LEFT,
  Direction.RIGHT,
];

/**
 * Max depth to find solution
 */
const MAX_DEPTH = 12;

/**
 * Execute the move and return the resulted game
 * @param move 
 */
const slideRobot = (move: Move): Game => {
  return null;
}

/**
 * Check if given game is solved
 * @param game 
 */
const isSolved = (game: Game): boolean => {

  const targetPosX = game.target.posX;
  const targetPosY = game.target.posY;

  for (let i = 0, l = game.robots.length; i < l; i++) {
    let { posX, posY } = game.robots[i];
    if (posX == targetPosX && posY == targetPosY) {
      return true;
    }
  }

  return false;
}


/**
 * Return the oppposite direction of given direction
 * @param dir the current direction
 */
const oppositeDirection = (dir: Direction): Direction => {
  switch (dir) {
    case Direction.TOP:
      return Direction.BOTTOM;

    case Direction.BOTTOM:
      return Direction.TOP;

    case Direction.LEFT:
      return Direction.RIGHT;

    case Direction.RIGHT:
      return Direction.LEFT;
  }
}


/**
 * Solve the game using breadth-first search algorith
 */
const solve = (game: Game, maxDepth: number = MAX_DEPTH): Move[] => {
  const queue: BFSItem[] = [];

  queue.push({ game, previous: null, parent: null });

  let winnerItem: BFSItem = null;   //the item where the game is solved

  while (queue.length > 0 && --maxDepth > 0) {
    let item = queue.pop();
    let { game, previous } = item;

    //traitement
    if (isSolved(game)) {
      winnerItem = item;
      break;
    }

    //let's find child move and insert to queue
    for (let i = 0, l = game.robots.length; i < l; i++) {
      for (let j = 0, t = allDirections.length; j < t; j++) {
        if (previous && previous.robotIndex == i && previous.direction == allDirections[j]) {
          continue;
        }

        queue.push({
          parent: item,
          game: slideRobot({
            robotIndex: i,
            direction: allDirections[j]
          }),
          previous: {
            robotIndex: i,
            direction: oppositeDirection(allDirections[j])  //to avoid backward move
          }
        });
      }
    }

  }

  if (!winnerItem) {
    return null;  //no solution with MAX_DEPTH moves
  }

  //from last game, let's build the solution
  let solution: Move[] = [];
  while (winnerItem) {
    if (winnerItem.previous) { //the solution in the top have a null previous
      solution.push({
        robotIndex: winnerItem.previous.robotIndex,
        direction: oppositeDirection(winnerItem.previous.direction) //stored move was the opposite  
      });
    }
    winnerItem = winnerItem.parent;
  }

  return solution.reverse();
}


export default solve;