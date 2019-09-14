// here, we are doing all the needed imports, so as to call them easily from one place (this module) in the main script

import solve from './breadth-first-search';
import { solvableInitialize} from './initializer'; // fonction ajoutée pour faire une initizlisation avec solution

import { initialize } from './initializer';
import { level, numberOfLevels } from '../drawingAndMovements/levels';
import {drawGame, redrawGame} from '../drawingAndMovements/drawing-tools';
import {move, identifyClickedRobot, caseClikedPosition} from '../drawingAndMovements/mouvements';



export default { solve, initialize, solvableInitialize };
export {  level, numberOfLevels, drawGame, redrawGame, move, identifyClickedRobot, caseClikedPosition};