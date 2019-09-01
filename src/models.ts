
export enum Direction {
  TOP,
  BOTTOM,
  LEFT,
  RIGHT
}

export class Robot {
  color: string;
  description: string;
  label: string;
  line: number;
  column: number;
}

export class Case {
  _top: boolean;
  _left: boolean;
  _right: boolean;
  _bottom: boolean;
}

export class Target {
  color: string;
  label: string;
  line: number;
  column: number;
}

export class Game {
  grid: Case[][];
  robots: Robot[];
  target: Target;
}


export class Move {
  robotIndex: number;
  direction: Direction
}