import { Case, Game, Robot, Direction, Target } from "../models";
import { randomInt, slideRobot } from "./helpers";

const initialize = (grid: Case[][]) => {
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
  const robotsLength = 4;
  game.robots = [];

  for (let i = 0; i < robotsLength; i++) {
    let robot = new Robot();
    robot.color = colors[i];
    robot.label = robot.color + ' robot';
    robot.description = '';
    robot.line = randomInt(0, grid.length - 1);
    robot.column = randomInt(0, grid.length - 1);
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
  robot.line = randomInt(0, grid.length - 1);
  robot.column = randomInt(0, grid.length - 1);
  game.robots.push(robot);
  game = slideRobot({
    robotIndex: robotsLength,
    direction: allDirections[randomInt(0, allDirections.length - 1)],
  }, game);

  let target = new Target();
  target.color = robot.color;
  target.label = robot.label;
  target.line = robot.line;
  target.column = robot.column;

  //delete tmp robot used to compute targer placement
  game.robots.splice(robotsLength,1);
  game.target = target;

  return game;
}

export default initialize;