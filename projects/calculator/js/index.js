var operands = []; 
var operators = [];
var regNum = /\d|./;
var regOps = /[+|x|\-|\/|=]/;
var reset = true;
$('.button').on('click',function(){
  var x = $(this).text();//get the input
  var disp = $('.display');//get the displayed info
  //reset the display for operators
  if (regOps.test(disp.text())){
    disp.text("");
  }
  //add the input numbers to display
  if (regNum.test(x)){
    //reset the display if starting on a new operation
    if (reset){
      disp.text(x);
      reset = false;
    }
    else{
    disp.text(disp.text() + x);
    }
  }
  if (regOps.test(x)){
    operands.push(disp.text());
    operators.push(x);
    disp.text(x);
        console.log(operands + "\n" + operators +" " + answer);

  }
  if (x === "CLEAR"){
    operators = [];
    operands = [];
    disp.html("<br>");
  }
  if (x == "="){
    var answer = Number.parseFloat(operands.splice(0,1));
    
    for (var i = 0; i < operands.length; i++){
      var operand = Number.parseFloat(operands[i]);
      if (operators[i] === "+"){
        answer += operand;
      }
      if (operators[i] === "\/"){
        answer /= operand;
      }
      if (operators[i] === "x"){
        answer *= operand;
      }
      if (operators[i] === "-"){
        answer -= operand;
      }
      operators = [];
      operands = [];
    }
    disp.text(answer);//display needs to account for too many digits
    reset=true;
  }
});