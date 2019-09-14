import { Case, Game, Robot, Direction, Target } from "../models";
import { randomInt, slideRobot } from "./helpers";

import solve from './breadth-first-search';
import { numberOfLevels } from "../drawingAndMovements/levels";

export const initialize = (grid: Case[][]) => {
  let game = new Game();
  game.grid = grid;
  const colors = [
    'red',
    'green',
    'blue',
    'yellow'
  ];

  const allDirections: Direction[] = [
    Direction.TOP,
    Direction.BOTTOM,
    Direction.LEFT,
    Direction.RIGHT,
  ];

  //Robot placement
  const exclusions = [
    grid.length/2 - 1,
    grid.length/2,
  ];
  
  const robotsLength = 4;
  game.robots = [];
  let posArray: {row:number, column:number}[] = [];

  for (let i = 0; i < robotsLength; i++) {
    let robot = new Robot();
    robot.color = colors[i];
    robot.label = robot.color + ' robot';
    robot.description = 'I am the '+ robot.color +' robot';

    do {
      robot.row = randomInt(0, grid.length - 1, exclusions);
      robot.column = randomInt(0, grid.length - 1, exclusions);
    } while(posArray.includes(robot))

    posArray.push(robot);
    game.robots.push(robot);
  }

  for (let i = 0; i < robotsLength; i++) {
    let dirIndex = randomInt(0, allDirections.length - 1);
    game = slideRobot({
      robotIndex: i,
      direction: allDirections[dirIndex],
    }, game);
  }

  //Target placement (we use a tmp robot and slideRobot function to place it somewhere
  let robot = new Robot();
  robot.color = colors[randomInt(0, colors.length - 1)];
  robot.label = 'Target '+robot.color;

  do {
    robot.row = randomInt(0, grid.length - 1, exclusions);
    robot.column = randomInt(0, grid.length - 1, exclusions);
  } while (posArray.includes(robot))

  game.robots.push(robot);
  game = slideRobot({
    robotIndex: robotsLength,
    direction: allDirections[randomInt(0, allDirections.length - 1)],
  }, game);

  let target = new Target();
  target.color = robot.color;
  target.label = robot.label;
  target.row = robot.row;
  target.column = robot.column;

  //delete tmp robot used to compute targer placement
  game.robots.splice(robotsLength,1);
  game.target = target;

  return game;
}


export function solvableInitialize(grid: Case[][]){
  //return initialize(grid);
  let game : Game = initialize(grid);
  let moves = null;
  
  while (moves == null) {
    game = initialize(grid);
    moves = solve(game.clone());
	}
	alert(moves.length);
	return game;
}
