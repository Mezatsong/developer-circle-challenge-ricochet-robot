import { Case, Robot, Game, Target } from "../models";
import { level, numberOfLevels } from "./levels";


// let canvas = document.getElementById("moncanvas") as HTMLCanvasElement;
	// let ctx = canvas.getContext('2d');
	export const h: number=560; //length of the canvas area
	export const w :number =560; //width of the canvas area
	export const c: number=35; //the length of a square's side in the 
	export const obstacleWidth: number=5;
	
	// let levelChoosed :number =1;
	
	
	// Let us create the game's grid ( a simple double entry table )
	var caseTab= new Array(w/c); 
	for(var i=0; i<w/c ;i++){ caseTab[i]=new Array(h/c); }
	
	for(var i=0; i<w/c ;i++){
		for(var j=0; j<h/c ;j++){
			caseTab[i][j]=new Case();
		}
	}
	
	// creation du tableau de robots
	// var robotTab=new Array (4);


export function drawCenter(ctx:CanvasRenderingContext2D){
	for(var x=c*7 ; x < 9*c ; x++ ){
		ctx.beginPath(); 
		ctx.strokeStyle = 'rgb(190,190,190)';
		ctx.lineWidth=2;
					
		//top
		ctx.moveTo(x,7*c);   
		ctx.lineTo(x,9*c);	
		ctx.stroke();
	}
		
	//Middle point
	ctx.beginPath();
	ctx.strokeStyle = 'rgb(0,0,0)';
	ctx.fillStyle="rgb(0,0,0)"; 
	ctx.arc(h/2, w/2, 12,0,2*Math.PI);
	ctx.fill();
		
	ctx.beginPath();
	ctx.fillStyle='brown' //"rgb(226,66,37)"; 
	ctx.arc(h/2, w/2, 10,0,2*Math.PI); 
	ctx.fill();
}


function uniformObstacle(caseTab : Case[][] ){
		
	for (var row=0; row < h/c; row++){
		for (var col=0; col < h/c; col++){
			
			if(caseTab[row][col]._bottom) {
				if(row+1 < h/c ) {caseTab[row+1][col]._top=true;}
			}
				
				
			if(caseTab[row][col]._top) {
				if(row-1 > 0) {caseTab[row-1][col]._bottom=true;}
			}
				
			if(caseTab[row][col]._left) {
				if(col-1 > 0) {caseTab[row][col-1]._right=true;}
			}
				
			if(caseTab[row][col]._right) {
				if(col+1 < w/c){caseTab[row][col+1]._left=true;}
			}
		}		
	}		
} 

export function drawGrid( caseTab:Case[][], ctx:CanvasRenderingContext2D){
	uniformObstacle(caseTab);
			
	for (var col=1; col <= caseTab.length ; col++){
		for (var row=1; row <= caseTab[0].length ; row++){
			ctx.beginPath(); 
			ctx.strokeStyle = 'rgb(0,0,0)';
			ctx.lineWidth=1;
				
			//top side 
			ctx.moveTo( (col-1)*c,(row-1)*c );   
			ctx.lineTo( col*c,(row-1)*c );
				
			//left side				
			ctx.moveTo( (col-1)*c,(row-1)*c );   
			ctx.lineTo((col-1)*c,row*c );
				
			//right side
			ctx.moveTo( col*c,row*c );   
			ctx.lineTo( col*c,(row-1)*c );

			//bottom side		
			ctx.moveTo( col*c,row*c );   
			ctx.lineTo( (col-1)*c,row*c );
				
			ctx.stroke();
				
			caseTab[col-1][row-1].row=col-1;
			caseTab[col-1][row-1].column=row-1;
				
			drawCenter(ctx);
				
			//gestion des obstacles
			if( caseTab[col-1][row-1]._top == true ){
				drawObstacle(col-1,row-1,"top",ctx);		
			}
				
			if( caseTab[col-1][row-1]._bottom == true ){
				drawObstacle(col-1,row-1,"bottom",ctx);		
			}
				
			if( caseTab[col-1][row-1]._left == true ){
				drawObstacle(col-1,row-1,"left",ctx);		
			}
				
			if( caseTab[col-1][row-1]._right == true ){
				drawObstacle(col-1,row-1,"right",ctx);		
			}
		}
	}
}

export function drawObstacle( col:number, row:number ,position:string, objCtx:CanvasRenderingContext2D){
				
	var lineWidth=obstacleWidth;
	var posCol=c*col;
	var posLig=c*row;
				
	objCtx.beginPath();     
	objCtx.strokeStyle = "black";
	objCtx.lineWidth=lineWidth;
				
	switch (position){
		case "left" : 								
			objCtx.moveTo(posLig,posCol);
			objCtx.lineTo(posLig,posCol+c);
			objCtx.stroke(); 
			break;	

		case "right" : 
			objCtx.moveTo(posLig+c,posCol);
			objCtx.lineTo(posLig+c,posCol+c);
			objCtx.stroke();
			break;
								
		case "top" : 
			objCtx.moveTo(posLig,posCol);
			objCtx.lineTo(posLig+c,posCol);
			objCtx.stroke();
			break;
						
		case "bottom" : 
			objCtx.moveTo(posLig,posCol+c);
			objCtx.lineTo(posLig+c,posCol+c);
			objCtx.stroke();
			break;
			
		default : alert("You have enterred an incorrect obstacle position")
						
	}
}

export function drawRobots(robotTab: Robot[], ctx:CanvasRenderingContext2D){
	
	for(let i=0; i<robotTab.length;i++){
		
		ctx.beginPath();
		ctx.fillStyle = robotTab[i].color; 
		ctx.strokeStyle = "black";
		ctx.lineWidth  = 3;

		ctx.arc( (robotTab[i].column + 1/2 )*c , (robotTab[i].row + 1/2)*c , c/3, 0, 2*Math.PI);
		ctx.fill();
		ctx.stroke();
	
	}	
		
	ctx.stroke();
}

export function drawTarget(target: Target, ctx:CanvasRenderingContext2D){
	ctx.beginPath();
	ctx.lineWidth  = 2;
	ctx.strokeStyle = "black";
    ctx.fillStyle = target.color;
	
	// the outer rectangle painted with the target's color
    ctx.fillRect( (target.column)*c, (target.row)*c, c, c);
	
	// 4 small inner rectangles
    ctx.clearRect((target.column)*c, (target.row)*c,10, 10);
	ctx.clearRect( (target.column+1)*c , (target.row)*c, -10, 10);
	ctx.clearRect( (target.column)*c , (target.row+1)*c, 10, -10);
	ctx.clearRect( (target.column+1)*c , (target.row+1)*c, -10, -10);
	
	ctx.stroke();
}

export function clearGame(ctx:CanvasRenderingContext2D){
	ctx.clearRect(0,0,w,h);
}
	
export function drawGame(game:Game, ctx:CanvasRenderingContext2D ){
	drawGrid(game.grid,ctx);
	drawRobots(game.robots, ctx);
	drawTarget(game.target, ctx);
}

export function redrawGame(game:Game, ctx:CanvasRenderingContext2D ){
		
	clearGame(ctx);
	drawGrid(game.grid,ctx);
	drawRobots(game.robots, ctx);
	drawTarget(game.target, ctx);
}