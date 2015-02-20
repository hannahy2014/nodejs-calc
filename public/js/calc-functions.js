

//************add********************  

function add() {

  var number1A = document.getElementById("number1A").value;
  var number2A = document.getElementById("number2A").value;
//feeding in the variable (number1A) then turning into a integer (parseInt), variable again then base 10 (radix value. 
  number1A = parseInt(number1A, 10);
  number2A = parseInt(number2A, 10);
//adding the two variables can then be executed as they are forced to be an integer.
  document.getElementById("resultA").innerHTML = number1A + number2A;

  }

//************subtract***************

  function subtract() {
    var number1S = document.getElementById("number1S").value;
    var number2S = document.getElementById("number2S").value;

    document.getElementById("resultS").innerHTML = number1S -number2S;
  }

//************multiply***************

function multiply() {
  var number1M = document.getElementById("number1M").value;
  var number2M = document.getElementById("number2M").value;

  document.getElementById("resultM").innerHTML = number1M *number2M;
}

//************divide***************

function divide() {
  var number1D = document.getElementById("number1D").value;
  var number2D = document.getElementById("number2D").value;

  document.getElementById("resultD").innerHTML = number1D /number2D;
}




