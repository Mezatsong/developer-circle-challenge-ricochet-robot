/**
 * Check if given case if working space
 * @param {character} x
 *
function isWorkingSpace(x) {
	return parseInt(x) === 1;
}

/**
 * Check if item is in array
 * @param {character[]} array 
 * @param {{i:number, j:number}} item 
 *
function containt(array, item) {
	for (let i = 0; i < array.length; i++) {
		if (array[i].i == item.i && array[i].j == item.j)
			return true;
	}
	return false;
}

/**
 * @param {character[][]} grid
 * @return {number}
 *
function numIslands(grid) {
	let result = 0;
	//Put your code here.
	let g = Object.assign([], grid);
	
	for (let i = 0; i < g.length; i++) {
		for (let j = 0; j < g[i].length; j++) {
			if (isWorkingSpace(g[i][j])) {
				let visited = [];
				let queue = [{
					i: i,
					j: j
				}];
				while (queue.length > 0) {
					let item = queue.splice(0, 1)[0];
					
					//pass if already visited
					if (containt(visited, item))
						continue;

					let p;

					//up
					p = item.i - 1;
					while (p >= 0 && isWorkingSpace(g[p][item.j])) {
						queue.push({i: p, j: item.j});
						p--;
					}

					//down
					p = item.i + 1;
					while (p < g.length && isWorkingSpace(g[p][item.j])) {
						queue.push({i: p, j: item.j});
						p++;
					}

					//left
					p = item.j - 1;
					while (p >= 0 && isWorkingSpace(g[item.i][p])) {
						queue.push({i:item.i, j:p});
						p--;
					}

					//right
					p = item.j + 1;
					while (p < g[i].length && isWorkingSpace(g[item.i][p])) {
						queue.push({i: item.i, j: p});
						p++;
					}

					visited.push(item);
				}

				//now we have a working space in visited array, 
				//we turn it to wall and increase working space count
				visited.forEach(item => {
					g = Object.assign([], g, {
						[item.i]: Object.assign([], g[item.i], {
							[item.j]: '0'
						})
					});
				});
				
				
				result++;
			}
		}
	}
	return result;
};



grid = [
	'11111',
	'10001',
	'10100',
	'11001'
];

alert(numIslands(grid));
*/



import { Case, Robot, Game, Move } from './models';
import { numberOfLevels,level, drawGame, redrawGame, move, identifyClickedRobot, caseClikedPosition } from './ia/index';
import { randomInt} from "./ia/helpers";

import ia from'./ia/index';

//lets create our canvas
let canvasWidth=560;
let canvasHeight=560;
let canvasStyle='border: 2px solid black; display:inline-block; float: left; margin-right: 2em; background: #fff';

let canvas_C = document.createElement('canvas');
canvas_C.setAttribute('width', canvasWidth);
canvas_C.setAttribute('height', canvasHeight);
canvas_C.setAttribute('style', canvasStyle);
canvas_C.setAttribute('id','myCanvas' );

document.body.insertBefore(canvas_C, document.body.firstChild);

// I choose a ramdom level, then I construct a grid for that level
	let myLevel= randomInt(1, numberOfLevels); 
	let caseTab = level(myLevel);
	let game= ia.solvableInitialize(caseTab);
	let initialGame= game.clone();
	

//After creating the game object, we have to construct, then draw it on the canvas zone
	let canvas = document.getElementById("myCanvas");  
	let ctx = canvas.getContext('2d');
	drawGame(game,ctx);

//Here we assign events to all the buttons and to the canvas zone
	canvas.addEventListener("click", caseClikedPosition);
	


	document.getElementById("up_button").onmousedown=function(){ move (game, "up", ctx ); }; 
	document.getElementById("down_button").onmousedown=function(){ move (game, "down", ctx ); }; 
	document.getElementById("left_button").onmousedown=function(){ move (game, "left", ctx ); }; 
	document.getElementById("right_button").onmousedown=function(){ move (game, "right", ctx ); };
	
	document.getElementById("solve_button").onmousedown=function(){ 
		let moves = ia.solve (initialGame); 
		if(moves == null) {
			alert("Can't solve this !");
		}else
			alert (moves.length + " movements to do" ); 
			alert(JSON.stringify(moves));
	};  //Ne cpas encore considerer cette ligne car elle est inachevée.

// we solve the game obtained after initialization
	//let moves;
	
	
 //ia.initialize()
 //alert("Welcome");

