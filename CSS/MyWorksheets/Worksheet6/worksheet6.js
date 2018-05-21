
var num1;
var num2;

function promptFunction(){
    num1 = parseInt(prompt("Enter a number"));
    num2 = parseInt(prompt("Enter a second number"));
}

function onCalc(){
    var finalAnswer = num1 + num2;
    document.getElementById("ans1").innerHTML = finalAnswer;
}

function onSub(){
    var finalAnswer = num1 - num2;
    document.getElementById("ans1").innerHTML = finalAnswer;
}

function onMultiply(){
    var finalAnswer = num1 * num2;
    document.getElementById("ans1").innerHTML = finalAnswer;
}


function onDivision(){
    var finalAnswer = num1 / num2;
     document.getElementById("ans1").innerHTML = finalAnswer;
}


