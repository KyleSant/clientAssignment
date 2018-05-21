var el = document.getElementById('input1');
var el2 = document.getElementById('input2');
var el3 = document.getElementById('input3');
var el4 = document.getElementById('input4');
var username = document.getElementById('username');
var password = document.getElementById('password');
var confirmPass = document.getElementById('confirmPass');

function alertUser(){
    alert("Click Event");
}

function enterText(){
    document.getElementById('input1').value = "mouse is moving!";
    document.getElementById('input1').style.color = 'pink';
}

function enterSecondText(){
    document.getElementById('input2').value = "mouse is over the text box!";
    document.getElementById('input2').style.color = "blue";
}

function clearTexts(input){
   document.getElementById(input).value = ""; 
   document.getElementById(input).value = "testing";
   document.getElementById(input).style.color = 'black';      
}

function thirdField(){
    document.getElementById('input3').value = "this is focused";
}

function clearFocus(){
    document.getElementById('input3').value = "";
}

function fourthField(){
    alert("Similiar to click event");
}

function checkUsername(){
    var username = document.getElementById('username').value;
    
    if(username == ""){
        document.getElementById('message').innerHTML = "Please fill in your username";
        document.getElementById('message').style.color = 'red';
    }
    else if(username.length < 5){
        document.getElementById('message').innerHTML = "Your username needs to be made up of at least 5 characters!";
        document.getElementById('message').style.color = 'red';
    }
}

var pattern = /[0-9!@#$%&*()_+]/;

function checkPassword(){
    var password = document.getElementById('password').value;
    
    if(password == ""){
        document.getElementById('messageTwo').innerHTML = "Please fill in the password";
        document.getElementById('messageTwo').style.color = 'red';
    }
    else if(password.length < 6){
        document.getElementById('messageTwo').innerHTML = "Your password needs to be made up of at least 6 characters";
        document.getElementById('messageTwo').style.color = 'red';
    }
    
    else if(!pattern.test(password)){
        document.getElementById('messageTwo').innerHTML = "Your password needs to be made up of at least one special character or digit!";
       document.getElementById('messageTwo').style.color = 'red';
    }
    else{
        document.getElementById('messageTwo').innerHTML = "";
    }
    
    //Regex with match
    //else if(password.match(pattern)){
    //    document.getElementById('messageTwo').innerHTML = "";
    //} 
   // else
    //{
       // document.getElementById('messageTwo').innerHTML = "Your password needs to be made up of at least one special character or digit!";
       // document.getElementById('messageTwo').style.color = 'red';
    //}

}

function clear(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
   document.getElementById('message').innerHTML = "";
   document.getElementById('messageTwo').innerHTML = "";
}

function checkConfirmPass(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confPass = document.getElementById('confirmPass').value;
    
    if(password == confPass){
        document.getElementById('messageThree').innerHTML = "";
    }
    else{
        document.getElementById('messageThree').innerHTML = "Password don't match!"
        document.getElementById('messageThree').style.color = 'red';
    }
}

el.addEventListener('click',alertUser);
el.addEventListener('mouseover',enterText);
el2.addEventListener('mouseover', enterSecondText);
el.addEventListener('mouseout',function(){clearTexts('input1');});
el2.addEventListener('mouseout',function(){clearTexts('input2');});
el3.addEventListener('focusin',thirdField);
el3.addEventListener('blur',clearFocus);
el4.addEventListener('mousedown', fourthField);
username.addEventListener('blur',checkUsername);
password.addEventListener('blur',checkPassword);
username.addEventListener('focusin',clear);
password.addEventListener('focusin',clear);
confirmPass.addEventListener('blur',checkConfirmPass);