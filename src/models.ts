
export enum Direction {
  TOP,
  BOTTOM,
  LEFT,
  RIGHT
}

export class Robot {
  color: string ="red";
  description: string =" ";
  label: string;
  row: number;
  column: number;
  
  // constructor(x:number, y:number, color:string, label:string, desc:string){
		// this.row=x;
		// this.column=y;
		// this.color=color;
		// this.label=label;
		// this.description=desc;
	// }
	
	// constructor(){
		
	// }
}

export class Case {
  _top: boolean;
  _left: boolean;
  _right: boolean;
  _bottom: boolean;
  
  row : number;
  column: number;	
}

export class Target {
  color: string;
  label: string;
  row: number;
  column: number;
}

export class Game {
  grid: Case[][];
  robots: Robot[];
  target: Target;

  clone(): Game {
    let g = new Game();
    g.grid = Object.assign([], this.grid);
    g.robots = [];
    this.robots.forEach(r => g.robots.push(Object.assign({}, r)));
    g.target = Object.assign({}, this.target);
    return g;
  }
}


export class Move {
  robotIndex: number;
  direction: Direction
}