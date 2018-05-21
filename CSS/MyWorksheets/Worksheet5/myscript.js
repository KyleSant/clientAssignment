function convertToFahr(){
    var ansDegrees = document.getElementById("dEntry").value;
    alert(ansDegrees * 9/5 + 32);
}

function convertToDeg(){
    var ansFahrenheit = document.getElementById("fEntry").value;
    alert((ansFahrenheit-32) * 5/9);
}


var vString1 = "99 bottles of beer on the wall, 99 bottles of beer";
document.getElementById("text1").innerHTML += vString1;

var vString2 = "There are many people who are taking the bottles of the wall";
document.getElementById("text2").innerHTML += vString2;

var vString3 = "3.50 Eur is the price of each beer";
document.getElementById("text3").innerHTML += vString3;

var vString4 = "There are 26 bottles left on the wall. These bottles are from 3 different types of brands";
document.getElementById("text4").innerHTML += vString4;

function String1(){
    var p1 = parseInt(vString1);
    document.getElementById("parse1").innerHTML = p1;
}

function String2(){
    var p2 = parseInt(vString2);
    document.getElementById("parse2").innerHTML = p2;
}

function String3(){
    var p3 = parseInt(vString3);
    document.getElementById("parse3").innerHTML = p3;
}

function String3F(){
    var p3F = parseFloat(vString3);
    document.getElementById("parse3F").innerHTML = p3F;
}

function String4(){
    var p4 = parseInt(vString4);
    document.getElementById("parse4").innerHTML = p4;
}

window.onload = function startUp(){ 
   var name = prompt("Please enter your name: ");
   var ID = prompt("Please enter your ID: ");
   document.getElementById("WelcomeMessage").innerHTML += (" " + name + " " + "(" + ID + ")");
}

