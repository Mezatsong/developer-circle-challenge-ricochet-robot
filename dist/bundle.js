!function(t){var o={};function e(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}e.m=t,e.c=o,e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)e.d(r,n,function(o){return t[o]}.bind(null,n));return r},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=0)}([function(t,o,e){"use strict";var r;e.r(o),function(t){t[t.TOP=0]="TOP",t[t.BOTTOM=1]="BOTTOM",t[t.LEFT=2]="LEFT",t[t.RIGHT=3]="RIGHT"}(r||(r={}));var n=function(){this.color="red",this.description=" "},l=function(){},i=function(){},c=function(){function t(){}return t.prototype.clone=function(){var o=new t;return o.grid=Object.assign([],this.grid),o.robots=[],this.robots.forEach(function(t){return o.robots.push(Object.assign({},t))}),o.target=Object.assign({},this.target),o},t}(),u=function(t,o,e){void 0===e&&(e=[]);for(var r=parseInt(t+Math.random()*(o+1-t)+"");e.includes(r);)r=parseInt(t+Math.random()*(o+1-t)+"");return r},a=function(t,o,e){for(var r=0,n=t.robots.length;r<n;++r)if(t.robots[r].row==o&&t.robots[r].column==e)return!0;return!1},f=function(t){for(var o=t.target.row,e=t.target.column,r=t.target.color,n=0,l=t.robots.length;n<l;n++){var i=t.robots[n],c=i.row,u=i.column,a=i.color;if(c==o&&u==e&&a==r)return!0}return!1},s=function(t,o){var e=o.robots[t.robotIndex].row,n=o.robots[t.robotIndex].column;if(t.direction==r.RIGHT)for(;n+1<o.grid[e].length&&!o.grid[e][n]._right&&!o.grid[e][n+1]._left&&!a(o,e,n+1);)n++;if(t.direction==r.LEFT)for(;n-1>=0&&!o.grid[e][n]._left&&!o.grid[e][n-1]._right&&!a(o,e,n-1);)n--;if(t.direction==r.BOTTOM)for(;e+1<o.grid.length&&!o.grid[e][n]._bottom&&!o.grid[e+1][n]._top&&!a(o,e+1,n);)e++;if(t.direction==r.TOP)for(;e-1>=0&&!o.grid[e][n]._top&&!o.grid[e-1][n]._bottom&&!a(o,e-1,n);)e--;return o.robots[t.robotIndex].row=e,o.robots[t.robotIndex].column=n,o},b=[r.TOP,r.BOTTOM,r.LEFT,r.RIGHT],g=function(t){switch(t){case r.TOP:return r.BOTTOM;case r.BOTTOM:return r.TOP;case r.LEFT:return r.RIGHT;case r.RIGHT:return r.LEFT}},_=function(t,o){void 0===o&&(o=5e3);var e=t.clone(),r=[];r.push({game:e,previous:null,parent:null});for(var n=null;r.length>0&&--o>0;){var l=r.splice(0,1)[0],i=l.game,c=l.previous;if(f(i)){n=l;break}for(var u=0,a=i.robots.length;u<a;u++)for(var _=0,d=b.length;_<d;_++)if(!c||c.robotIndex!=u||c.direction!=b[_]){var m=i.clone();m=s({robotIndex:u,direction:b[_]},m),i.robots[u].row==m.robots[u].row&&i.robots[u].column==m.robots[u].column||r.push({parent:l,game:m,previous:{robotIndex:u,direction:g(b[_])}})}}if(!n)return null;for(var h=[];n;)n.previous&&h.push({robotIndex:n.previous.robotIndex,direction:g(n.previous.direction)}),n=n.parent;return h.reverse()},d=function(t){var o=new c;o.grid=t;var e=["red","green","blue","yellow"],l=[r.TOP,r.BOTTOM,r.LEFT,r.RIGHT],a=[t.length/2-1,t.length/2];o.robots=[];for(var f=[],b=0;b<4;b++){var g=new n;g.color=e[b],g.label=g.color+" robot",g.description="I am the "+g.color+" robot";do{g.row=u(0,t.length-1,a),g.column=u(0,t.length-1,a)}while(f.includes(g));f.push(g),o.robots.push(g)}for(b=0;b<4;b++){var _=u(0,l.length-1);o=s({robotIndex:b,direction:l[_]},o)}var d=new n;d.color=e[u(0,e.length-1)],d.label="Target "+d.color;do{d.row=u(0,t.length-1,a),d.column=u(0,t.length-1,a)}while(f.includes(d));o.robots.push(d),o=s({robotIndex:4,direction:l[u(0,l.length-1)]},o);var m=new i;return m.color=d.color,m.label=d.label,m.row=d.row,m.column=d.column,o.robots.splice(4,1),o.target=m,o};for(var m=560,h=560,v=35,p=5,T=new Array(h/v),w=0;w<h/v;w++)T[w]=new Array(m/v);for(w=0;w<h/v;w++)for(var y=0;y<m/v;y++)T[w][y]=new l;function I(t){for(var o=7*v;o<9*v;o++)t.beginPath(),t.strokeStyle="rgb(190,190,190)",t.lineWidth=2,t.moveTo(o,7*v),t.lineTo(o,9*v),t.stroke();t.beginPath(),t.strokeStyle="rgb(0,0,0)",t.fillStyle="rgb(0,0,0)",t.arc(m/2,h/2,12,0,2*Math.PI),t.fill(),t.beginPath(),t.fillStyle="brown",t.arc(m/2,h/2,10,0,2*Math.PI),t.fill()}function O(t,o){!function(t){for(var o=0;o<m/v;o++)for(var e=0;e<m/v;e++)t[o][e]._bottom&&o+1<m/v&&(t[o+1][e]._top=!0),t[o][e]._top&&o-1>0&&(t[o-1][e]._bottom=!0),t[o][e]._left&&e-1>0&&(t[o][e-1]._right=!0),t[o][e]._right&&e+1<h/v&&(t[o][e+1]._left=!0)}(t);for(var e=1;e<=t.length;e++)for(var r=1;r<=t[0].length;r++)o.beginPath(),o.strokeStyle="rgb(0,0,0)",o.lineWidth=1,o.moveTo((e-1)*v,(r-1)*v),o.lineTo(e*v,(r-1)*v),o.moveTo((e-1)*v,(r-1)*v),o.lineTo((e-1)*v,r*v),o.moveTo(e*v,r*v),o.lineTo(e*v,(r-1)*v),o.moveTo(e*v,r*v),o.lineTo((e-1)*v,r*v),o.stroke(),t[e-1][r-1].row=e-1,t[e-1][r-1].column=r-1,I(o),1==t[e-1][r-1]._top&&k(e-1,r-1,"top",o),1==t[e-1][r-1]._bottom&&k(e-1,r-1,"bottom",o),1==t[e-1][r-1]._left&&k(e-1,r-1,"left",o),1==t[e-1][r-1]._right&&k(e-1,r-1,"right",o)}function k(t,o,e,r){var n=p,l=v*t,i=v*o;switch(r.beginPath(),r.strokeStyle="black",r.lineWidth=n,e){case"left":r.moveTo(i,l),r.lineTo(i,l+v),r.stroke();break;case"right":r.moveTo(i+v,l),r.lineTo(i+v,l+v),r.stroke();break;case"top":r.moveTo(i,l),r.lineTo(i+v,l),r.stroke();break;case"bottom":r.moveTo(i,l+v),r.lineTo(i+v,l+v),r.stroke();break;default:alert("You have enterred an incorrect obstacle position")}}function E(t,o){for(var e=0;e<t.length;e++)o.beginPath(),o.fillStyle=t[e].color,o.strokeStyle="black",o.lineWidth=3,o.arc((t[e].column+.5)*v,(t[e].row+.5)*v,v/3,0,2*Math.PI),o.fill(),o.stroke();o.stroke()}function P(t,o){o.beginPath(),o.lineWidth=2,o.strokeStyle="black",o.fillStyle=t.color,o.fillRect(t.column*v,t.row*v,v,v),o.clearRect(t.column*v,t.row*v,10,10),o.clearRect((t.column+1)*v,t.row*v,-10,10),o.clearRect(t.column*v,(t.row+1)*v,10,-10),o.clearRect((t.column+1)*v,(t.row+1)*v,-10,-10),o.stroke()}function B(t,o){!function(t){t.clearRect(0,0,h,m)}(o),O(t.grid,o),E(t.robots,o),P(t.target,o)}function x(t){t[0][4]._right=!0,t[0][8]._right=!0,t[1][2]._left=!0,t[1][2]._top=!0,t[1][12]._right=!0,t[1][12]._bottom=!0,t[2][10]._left=!0,t[2][10]._bottom=!0,t[3][6]._left=!0,t[3][6]._bottom=!0,t[3][15]._bottom=!0,t[5][0]._top=!0,t[5][4]._top=!0,t[5][4]._right=!0,t[5][11]._top=!0,t[5][11]._right=!0,t[6][1]._right=!0,t[6][1]._bottom=!0,t[6][14]._left=!0,t[6][14]._top=!0,t[7][10]._bottom=!0,t[7][10]._left=!0,t[8][5]._right=!0,t[8][5]._bottom=!0,t[9][12]._right=!0,t[9][15]._bottom=!0,t[10][2]._top=!0,t[10][2]._right=!0,t[12][0]._top=!0,t[12][9]._top=!0,t[12][9]._left=!0,t[13][4]._left=!0,t[13][4]._top=!0,t[13][14]._left=!0,t[13][14]._bottom=!0,t[14][6]._left=!0,t[14][6]._bottom=!0,t[14][11]._bottom=!0,t[14][11]._right=!0,t[15][4]._right=!0,t[15][13]._right=!0,t[7][7]._left=!0,t[7][7]._top=!0,t[7][8]._top=!0,t[7][8]._right=!0,t[8][7]._bottom=!0,t[8][7]._left=!0,t[8][8]._right=!0,t[8][8]._bottom=!0;for(var o=0;o<t.length;o++)t[o][0]._left=!0,t[o][15]._right=!0;for(var e=0;e<t.length;e++)t[0][e]._top=!0,t[15][e]._bottom=!0;return t}function M(t,o,e){!function(t){var o=new l;o.row=parseInt(document.getElementById("currentCaseRow").value,10),o.column=parseInt(document.getElementById("currentCaseColumn").value,10);for(var e=0;e<t.robots.length;e++)t.robots[e].column==o.column&&t.robots[e].row==o.row&&(t.robots[e],document.getElementById("currentRobot").value=""+e)}(t);var n=document.getElementById("currentRobot").value,i=null;switch(o){case"left":i=r.LEFT;break;case"right":i=r.RIGHT;break;case"up":i=r.TOP;break;case"down":i=r.BOTTOM;break;default:alert("Something went wrong !")}B(t=s({robotIndex:parseInt(n),direction:i},t),e),f(t)&&alert("You win !")}var R={solve:_,initialize:d,solvableInitialize:function(t){for(var o=d(t),e=null;null==e;)o=d(t),e=_(o.clone());return alert(e.length),o}};let S=document.createElement("canvas");S.setAttribute("width",560),S.setAttribute("height",560),S.setAttribute("style","border: 2px solid black; display:inline-block; float: left; margin-right: 2em; background: #fff"),S.setAttribute("id","myCanvas"),document.body.insertBefore(S,document.body.firstChild);let C=function(t){for(var o=new Array(m/v),e=0;e<h/v;e++)o[e]=new Array(m/v);for(e=0;e<h/v;e++)for(var r=0;r<m/v;r++)o[e][r]=new l;switch(t){case 1:o=x(o);break;case 2:o=function(t){t[0][4]._right=!0,t[0][8]._right=!0,t[1][2]._left=!0,t[1][2]._top=!0,t[1][12]._right=!0,t[1][12]._bottom=!0,t[2][10]._left=!0,t[2][10]._bottom=!0,t[3][6]._left=!0,t[3][6]._bottom=!0,t[3][15]._bottom=!0,t[5][0]._top=!0,t[5][4]._top=!0,t[5][4]._right=!0,t[5][11]._top=!0,t[5][11]._right=!0,t[6][1]._right=!0,t[6][1]._bottom=!0,t[6][14]._left=!0,t[6][14]._top=!0,t[7][10]._bottom=!0,t[7][10]._left=!0,t[8][5]._right=!0,t[8][5]._bottom=!0,t[9][12]._right=!0,t[9][15]._bottom=!0,t[10][2]._top=!0,t[10][2]._right=!0,t[12][0]._top=!0,t[12][9]._top=!0,t[12][9]._left=!0,t[13][4]._left=!0,t[13][4]._top=!0,t[13][14]._left=!0,t[13][14]._bottom=!0,t[14][6]._left=!0,t[14][6]._bottom=!0,t[14][11]._bottom=!0,t[14][11]._right=!0,t[15][4]._right=!0,t[15][13]._right=!0,t[7][7]._left=!0,t[7][7]._top=!0,t[7][8]._top=!0,t[7][8]._right=!0,t[8][7]._bottom=!0,t[8][7]._left=!0,t[8][8]._right=!0,t[8][8]._bottom=!0;for(var o=0;o<t.length;o++)t[o][0]._left=!0,t[o][15]._right=!0;for(var e=0;e<t.length;e++)t[0][e]._top=!0,t[15][e]._bottom=!0;return t}(o);break;default:o=x(o)}return o}(u(1,2)),L=R.solvableInitialize(C),j=L.clone(),A=document.getElementById("myCanvas"),F=A.getContext("2d");var G,H;H=F,O((G=L).grid,H),E(G.robots,H),P(G.target,H),A.addEventListener("click",function(t){var o=0,e=0;if(!t)window.event;t.pageX||t.pageY?(o=t.pageX,e=t.pageY):(t.clientX||t.clientY)&&(o=t.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,e=t.clientY+document.body.scrollTop+document.documentElement.scrollTop),o=Math.trunc((o-10)/v),e=Math.trunc((e-10)/v);var r=new l;r.row=e,r.column=o,document.getElementById("currentCaseRow").value=e+"",document.getElementById("currentCaseColumn").value=o+""}),document.getElementById("up_button").onmousedown=function(){M(L,"up",F)},document.getElementById("down_button").onmousedown=function(){M(L,"down",F)},document.getElementById("left_button").onmousedown=function(){M(L,"left",F)},document.getElementById("right_button").onmousedown=function(){M(L,"right",F)},document.getElementById("solve_button").onmousedown=function(){let t=R.solve(j);null==t?alert("Can't solve this !"):alert(t.length+" movements to do"),alert(JSON.stringify(t))}}]);