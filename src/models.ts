export class Robot {
  color: string;
  description: string;
  label: string; 
}

export class Case {
  top: boolean;
  left: boolean;
  right: boolean;
  bottom: boolean;
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
