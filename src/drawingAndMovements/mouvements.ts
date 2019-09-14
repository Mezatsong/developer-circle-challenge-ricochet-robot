import { Game, Robot, Case, Direction} from "../models";
import { redrawGame, c } from "./drawing-tools";
import { slideRobot, isSolved } from "../ia/helpers";


 function checkStopPoint(game: Game, robot :Robot, direction:string) : Case{
	let col : number =robot.column;
	let row : number =robot.row;
	
	let next_case= new Case();
	//alert(col+" "+ row);
	
	switch (direction){
		case "left" :
			while(game.grid[row][col]._left != true) {col--;}
			if ( containRobot(game,row,col) ){col++;}
			//alert (row+" "+col);
			break;
			
		case "right" :
			while(!game.grid[row][col]._right) {col++;}
			if ( containRobot(game,row,col) ){col--;}
			break
				
		case "up" :
			while(!game.grid[row][col]._top) {row--;}
			if ( containRobot(game,row,col) ){row++;}
			break
				
		case "down" :
			while(!game.grid[row][col]._bottom) {row++;}
			if ( containRobot(game,row,col) ){row--;}
			break
	
		default : 
			alert("You have choosen a wrong side for the previous movement"); //imposible situation. Just to do tests
			break
			
	}
	
	next_case.row=row;
	next_case.column=col;
	
	return next_case;
}


function containRobot(game:Game, row:number, column:number): boolean{
	
	for(let i=0; i < game.robots.length; i++ ){
		if( ( game.robots[i].column == column) && (game.robots[i].row == row) ){
			return true;
		}
	}
	
	return false;
}

export function move(game:Game, direction : string, ctx:CanvasRenderingContext2D){
		
		identifyClickedRobot(game);
		
		//let robot: Robot;
		let  currentRobot: string = (<HTMLInputElement> document.getElementById("currentRobot") ).value;

		// const inputElement: HTMLInputElement = document.getElementById('greet') as HTMLInputElement
		// const inputValue: string = InputElement.value

		/*robot= game.robots[parseInt(currentRobot, 10)]
		
		let next_case : Case = checkStopPoint(game,robot,direction);
		

		game.robots[parseInt(currentRobot, 10)].row = next_case.row;
		game.robots[parseInt(currentRobot, 10)].column = next_case.column;*/

	let dir: Direction = null;

	switch (direction) {
		case "left":
			dir = Direction.LEFT;
			break;

		case "right":
			dir = Direction.RIGHT;
			break;

		case "up":
			dir = Direction.TOP;
			break;

		case "down":
			dir = Direction.BOTTOM;
			break;
		default:
			alert('Something went wrong !');
	}

		game = slideRobot({
			robotIndex: parseInt(currentRobot),
			direction: dir
		}, game);
		
		redrawGame(game,ctx);	
		
		if(isSolved(game)) {
			alert('You win !');
		}
} 


export function caseClikedPosition(e:MouseEvent){
	
	let posX : number =0;
	let posY : number =0;
	
	if(!e){
		let e =window.event;
	}
	
	if(e.pageX || e.pageY) {
		posX=e.pageX;
		posY=e.pageY;	
	} 
	else if(e.clientX || e.clientY) {
		posX=e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		posY=e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	
	// don't forget -10 because the screen scale is not thesame with the canva's owne.
	posX=Math.trunc((posX - 10) /c);
	posY=Math.trunc((posY - 10) /c);
	
	let point =new Case();
	point.row=posY;
	point.column=posX;
	
	(<HTMLInputElement> document.getElementById("currentCaseRow") ).value = posY+""; //we need to put a string
	(<HTMLInputElement> document.getElementById("currentCaseColumn") ).value= posX+"";
	
	// alert("posX=" + posX +" posY="+ posY);
}


export function identifyClickedRobot( game: Game ){
	
	let caseClicked = new Case();
	caseClicked.row = parseInt((<HTMLInputElement> document.getElementById("currentCaseRow") ).value, 10);
	caseClicked.column = parseInt((<HTMLInputElement> document.getElementById("currentCaseColumn") ).value, 10);

	let robot : Robot;
	
	for(let i=0; i< game.robots.length; i++){
		if( ( game.robots[i].column == caseClicked.column) && (game.robots[i].row == caseClicked.row) ){
			robot=game.robots[i];  
			(<HTMLInputElement> document.getElementById("currentRobot") ).value=""+i+"";
			// alert( (<HTMLInputElement> document.getElementById("currentRobot") ).value );
		}
	}		
} 