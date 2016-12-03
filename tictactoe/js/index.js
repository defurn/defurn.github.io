//document.addEventListener('click', function(e) {alert(e.target.id);});

$(document).on('click', '.startGame', startGame);
$('.box').click(place);
$(document).on('click', '#playerO', setPlayer);
$(document).on('click', '#playerX', setPlayer);
$(document).on('click', '.reset', clearBoard);



var board = ["#topLeft", "#topCenter", "#topRight", "#middleLeft", "#middleCenter", "#middleRight", "#bottomLeft", "#bottomCenter", "#bottomRight"];
//this seems pretty inefficient
var score = {"#topLeft":["top", "left", "topLeft"], 
             "#topCenter":["top","center", "topCenter"], 
             "#topRight":["top", "right", "topRight"], 
             "#middleLeft":["middle", "left", "middleLeft"], 
             "#middleCenter":["middle", "center", "middleCenter"], 
             "#middleRight":["middle", "right", "middleRight"], 
             "#bottomLeft":["bottom", "left", "bottomLeft"], 
             "#bottomCenter":["bottom", "center", "bottomCenter"], 
             "#bottomRight":["bottom", "right", "bottomRight"]};
var choices = 8;
var turn = true;
var started = false;
var square = "";
var piece = 0;
var turns = 0;
var xpieces = {top:0, middle:0, bottom:0, left:0, center:0, right:0, topLeft:0, topRight:0, middleCenter:0, bottomLeft:0, bottomRight:0, topCenter:0, middleLeft:0, middleRight:0, bottomCenter:0};
var opieces = {top:0, middle:0, bottom:0, left:0, center:0, right:0, topLeft:0, topRight:0, middleCenter:0, bottomLeft:0, bottomRight:0, topCenter:0, middleLeft:0, middleRight:0, bottomCenter:0};

var player = "";
var comp = "";

function setPlayer(){
  player = $(this).html();
  comp = player === "X"? "O":"X";
  $(this).addClass("player").blur();
  if (comp === "X"){$('#playerX').removeClass("player");}
  else {$('#playerO').removeClass("player");}
}

function startGame(){
  $('#startGameBtn').addClass("reset").removeClass("startGame").html("reset").blur();
  turn = player === "O"? false : true;
  started = true;
  place();
}

function choose(){
  //choose which square to place randomly!:(
  piece = Math.floor(Math.random() * choices);
  return board[piece];
}

function place(){
 if (started === true){//prevents clicking before game start
 if (turn === false){// computer's turn
    square = choose();
    //square = "#"+$(this).attr("id");

  }
  else if (turn === true){//player turn
    //square = choose();
    square = "#"+$(this).attr("id");
 }
   
  //actual turn action
 if (board.includes(square)){
  if (turn){
    $(square).html(player);}
   else{
     $(square).html(comp);}
  if (((turn) && (player == "X")) || (!(turn) && (comp == "X"))){
    xpieces[score[square][0]]++;
    xpieces[score[square][1]]++;
    xpieces[score[square][2]]++;
  }
  else if (((turn) && (player == "O")) || (!(turn) && (comp == "O"))){
    opieces[score[square][0]]++;
    opieces[score[square][1]]++;
    opieces[score[square][2]]++;
  }
   
  turn = !turn;
  board.splice(board.indexOf(square),1);
  choices--;
  setTimeout(checkWin, 500);

  //if (started === true){
    setTimeout(place, 500);//}//should stop it from placing another piece after winer determined
   }//end of play turn
  
 }//end of if started
}


function clearBoard(){
  $('.box').html("");
  $('.reset').addClass("startGame").removeClass("reset").html("start").blur();
  board = ["#topLeft", "#topCenter", "#topRight", "#middleLeft", "#middleCenter", "#middleRight", "#bottomLeft", "#bottomCenter", "#bottomRight"];
  choices = 8;
  turn = false;
  started = false;
  xpieces = {top:0, middle:0, bottom:0, left:0, center:0, right:0, topLeft:0, topRight:0, middleCenter:0, bottomLeft:0, bottomRight:0, topCenter:0, middleLeft:0, middleRight:0, bottomCenter:0};
  opieces = {top:0, middle:0, bottom:0, left:0, center:0, right:0, topLeft:0, topRight:0, middleCenter:0, bottomLeft:0, bottomRight:0, topCenter:0, middleLeft:0, middleRight:0, bottomCenter:0};
  $('#board').removeClass("win");
  $('#winmessage').addClass("win");
  
  
}

function checkWin(){
  //diagonal win (seems terribly long...)
  if ((xpieces.topLeft === 1 &&
       xpieces.middleCenter === 1 &&
       xpieces.bottomRight === 1) ||
      (xpieces.topRight === 1 &&
       xpieces.middleCenter === 1 &&
       xpieces.bottomLeft === 1)){
        console.log("X Wins!");
        started = false; 
        winnerDisplay("X");
  }
  else if ((opieces.topLeft === 1 &&
     opieces.middleCenter === 1 &&
     opieces.bottomRight === 1) ||
    (opieces.topRight === 1 &&
     opieces.middleCenter === 1 &&
     opieces.bottomLeft === 1)){
    console.log("O Wins!");
    started = false; 
    winnerDisplay("O");
    
  }
  //three in a row winners
 else {
   for (var i in xpieces){
    if (xpieces[i] === 3){
      console.log("X Wins!");
      started = false;
      winnerDisplay("X");
    }
  }
   for (var j in opieces){
    if (opieces[j] === 3){
      console.log("O Wins!");
      started = false;
      winnerDisplay("O");
    }
  }
  if (board.length === 0 && (started)){//or if choices =0?
    started = false;
    winnerDisplay("No one")
  }
 }
  console.log(board, board.length);
}

function winnerDisplay(winner){
  setTimeout(function(){
    console.log(winner + "wins", xpieces,opieces);
    $('#board').addClass("win");
    $('#winmessage').removeClass("win").html("<h1>" + winner + " WINS! </h1>");
    started = false;
  },
  800);
  
}