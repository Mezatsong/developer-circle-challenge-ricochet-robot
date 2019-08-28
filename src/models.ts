export class Robot {
  color: string;
  description: string;
  label: string; 
}

export class Case {
  Top: boolean;
  Left: boolean;
  Right: boolean;
  Bottom: boolean;
}

export class Target {
  color: string;
  label: string;
  posX: number;
  posY: number;
}

export class Game {
  grid: Case[][];
  robots: Robot[][];
  target: Target;
}
