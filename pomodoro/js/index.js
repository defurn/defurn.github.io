var timeLimit = 25;//default time
var timeLimitSeconds = 0;
var breakLimit = 5;
var setLimit;//remember the new timeLimit setting
var ID;//keep track of setInterval ID to reset it when pause/resetTimer called
var breaktimer = false;//to switch between break and timer
$('.startButton').click(setTimer);
$('.stopButton').click(pauseTimer);
$('.resetButton').click(resetTimer);
 
//change so there is one button for start/pause, and the display changes once timer starts so you can't change the timer settings until it's paused, ... make the timer display the input for setting the time... display choesen break timer setting... 



function setTimer(){ 
  //stop timer if running already  
  clearInterval(ID);
  timeLimit = ($('.time').val() == "" ? timeLimit : $('.time').val());
  setLimit = timeLimit;
  breakLimit = ($('.break').val() == "" ? breakLimit : $('.break').val());
  $('.time').val("");
  $('.break').val("");
  
  $('.display').html("<h1>" + pad(timeLimit) + ":" + pad(timeLimitSeconds) + "</h1>");

  
  //get the setInterval ID to stop it later
  ID = setInterval(goTimer,1000);
  
}


function goTimer(){ 

  if (timeLimit > 0){
    if (timeLimitSeconds > 0){
      timeLimitSeconds--;
    }
    else {
      timeLimit--;
      timeLimitSeconds = 59;
    }
  }
  else if (timeLimit == 0){
    if (timeLimitSeconds > 0){
      timeLimitSeconds--;
    }
    else if (timeLimitSeconds == 0){
      breaktimer = !breaktimer;
            $('.display').toggleClass("breaktimer");

      if(breaktimer){
      timeLimit = breakLimit;
        
      }
      else{
        timeLimit = setLimit;
      }
     setTime();

      
      
    }
  }
  $('.display').html("<h1>" + pad(timeLimit) + ":" + pad(timeLimitSeconds) + "</h1>");

}

function pauseTimer(){
  clearInterval(ID);
}

function resetTimer(){
  clearInterval(ID);
  timeLimit = setLimit; 
  timeLimitSeconds = 0;
  $('.display').html("<h1>" + pad(timeLimit) + ":" + pad(timeLimitSeconds) + "</h1>");
  breaktimer = false;
  $('.display').removeClass("breaktimer");

  
}

function pad(n){
  if (n < 10){
    return "0" + n;
  }
  else{
    return n
  }
}