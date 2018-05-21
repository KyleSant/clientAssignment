var sum = 1+2+3+4+5+6+7+8+9+10;
parseInt(sum);
var multiply = 1*2*3*4*5*6*7*8*9*10;
parseInt(multiply);
var vnumber = typeof 36.5;
var vdog = typeof "dog";
var vtrue = typeof true;



function Sum(){
    alert("The sum of the first numbers is " +sum);
}

function Multiplication(){
    alert("The multiplication of the first numbers is " +multiply);
}

function tNumber(){
    alert("The type of 36.5 is " + vnumber);
}

function tDog(){
    alert("The type of Dog is " + vdog);
}

function tTrue(){
    alert("The type of true is " + vtrue);
}
