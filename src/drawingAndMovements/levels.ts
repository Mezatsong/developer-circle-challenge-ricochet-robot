import { Case } from "../models";
import { h, w, c} from "./drawing-tools";

export let numberOfLevels : number = 2;

 
function level1(caseTab : Case[][] ) : Case[][] {
	caseTab[0][4]._right=true;
	caseTab[0][8]._right=true;
		
		
	caseTab[1][2]._left=true;
	caseTab[1][2]._top=true;
	caseTab[1][12]._right=true;
	caseTab[1][12]._bottom=true;
		
	caseTab[2][10]._left=true;  
	caseTab[2][10]._bottom=true; 
		
	caseTab[3][6]._left=true;
	caseTab[3][6]._bottom=true; 
	caseTab[3][15]._bottom=true;
		
	caseTab[5][0]._top=true; 
	caseTab[5][4]._top=true; 
	caseTab[5][4]._right=true; 
	caseTab[5][11]._top=true; 
	caseTab[5][11]._right=true;
		
	caseTab[6][1]._right=true; 
	caseTab[6][1]._bottom=true;
	caseTab[6][14]._left=true;  
	caseTab[6][14]._top=true; 

	caseTab[7][10]._bottom=true; 
	caseTab[7][10]._left=true;
		
	caseTab[8][5]._right=true;
	caseTab[8][5]._bottom=true;
		
	caseTab[9][12]._right=true;
	caseTab[9][15]._bottom=true;
		
	caseTab[10][2]._top=true;
	caseTab[10][2]._right=true;
		
	caseTab[12][0]._top=true;
	caseTab[12][9]._top=true;
	caseTab[12][9]._left=true;
		
	caseTab[13][4]._left=true;
	caseTab[13][4]._top=true;
	caseTab[13][14]._left=true;
	caseTab[13][14]._bottom=true;
		
	caseTab[14][6]._left=true;
	caseTab[14][6]._bottom=true;
	caseTab[14][11]._bottom=true;
	caseTab[14][11]._right=true;
		
	caseTab[15][4]._right=true;
	caseTab[15][13]._right=true;
		 
	//middle zone obstacles
	caseTab[7][7]._left=true;
	caseTab[7][7]._top=true;
	caseTab[7][8]._top=true;
	caseTab[7][8]._right=true
	caseTab[8][7]._bottom=true;
	caseTab[8][7]._left=true;
	caseTab[8][8]._right=true;
	caseTab[8][8]._bottom=true;
		
	//caseTab[5][0]._left=true;
	// consider all the grid perimeter as obstacles
	for (var x=0; x < caseTab.length ; x++){
		caseTab[x][0]._left=true;				
		caseTab[x][15]._right=true;				
	}
				
	for (var col=0; col < caseTab.length ; col++){
		caseTab[0][col]._top=true;				
		caseTab[15][col]._bottom=true;
	}
	
	return caseTab;
}


function level2(caseTab : Case[][] ) : Case[][] {
	caseTab[0][4]._right=true;
	caseTab[0][8]._right=true;
		
		
	caseTab[1][2]._left=true;
	caseTab[1][2]._top=true;
	caseTab[1][12]._right=true;
	caseTab[1][12]._bottom=true;
		
	caseTab[2][10]._left=true;  
	caseTab[2][10]._bottom=true; 
		
	caseTab[3][6]._left=true;
	caseTab[3][6]._bottom=true; 
	caseTab[3][15]._bottom=true;
		
	caseTab[5][0]._top=true; 
	caseTab[5][4]._top=true; 
	caseTab[5][4]._right=true; 
	caseTab[5][11]._top=true; 
	caseTab[5][11]._right=true;
		
	caseTab[6][1]._right=true; 
	caseTab[6][1]._bottom=true;
	caseTab[6][14]._left=true;  
	caseTab[6][14]._top=true; 

	caseTab[7][10]._bottom=true; 
	caseTab[7][10]._left=true;
		
	caseTab[8][5]._right=true;
	caseTab[8][5]._bottom=true;
		
	caseTab[9][12]._right=true;
	caseTab[9][15]._bottom=true;
		
	caseTab[10][2]._top=true;
	caseTab[10][2]._right=true;
		
	caseTab[12][0]._top=true;
	caseTab[12][9]._top=true;
	caseTab[12][9]._left=true;
		
	caseTab[13][4]._left=true;
	caseTab[13][4]._top=true;
	caseTab[13][14]._left=true;
	caseTab[13][14]._bottom=true;
		
	caseTab[14][6]._left=true;
	caseTab[14][6]._bottom=true;
	caseTab[14][11]._bottom=true;
	caseTab[14][11]._right=true;
		
	caseTab[15][4]._right=true;
	caseTab[15][13]._right=true;
		
	//middle zone obstacles
	caseTab[7][7]._left=true;
	caseTab[7][7]._top=true;
	caseTab[7][8]._top=true;
	caseTab[7][8]._right=true
	caseTab[8][7]._bottom=true;
	caseTab[8][7]._left=true;
	caseTab[8][8]._right=true;
	caseTab[8][8]._bottom=true;
		
	//caseTab[5][0]._left=true;
	// consider all the grid perimeter as obstacles
	for (var x=0; x < caseTab.length ; x++){
		caseTab[x][0]._left=true;				
		caseTab[x][15]._right=true;				
	}
				
	for (var col=0; col < caseTab.length ; col++){
		caseTab[0][col]._top=true;				
		caseTab[15][col]._bottom=true;
	}
	
	return caseTab;
}


	
export function level(choice: number ) : Case[][]{
	
	let caseTab= new Array(h/c);  
	for(var i=0; i<w/c ;i++){ caseTab[i]=new Array(h/c); }
	for(var i=0; i<w/c ;i++){
		for(var j=0; j<h/c ;j++){
			caseTab[i][j]=new Case();
		}
	}
	
	switch (choice){
		case 1: caseTab=level1(caseTab);  break; 
		case 2: caseTab=level2(caseTab); break; 
		default :caseTab=level1(caseTab); break
	}
	
	return caseTab;
}

