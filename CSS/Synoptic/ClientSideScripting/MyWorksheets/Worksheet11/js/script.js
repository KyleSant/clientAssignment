var el = document.getElementById('block');

function changeBlockName(){
    document.getElementById('changeText').innerHTML = "Click me!";
}

function changeSecondBlock(color){
    document.getElementById('block').style.background = color;
}

function changeThirdBlock(){
    document.getElementById('changeText').innerHTML = "My Block";
}

function changeFourthBlock(color){
    document.getElementById('block').style.background = color;
}

el.addEventListener('mouseover', changeBlockName);
el.addEventListener('click',function(){changeSecondBlock('red');});
el.addEventListener('mouseout',changeThirdBlock);
el.addEventListener('dblclick',function(){changeFourthBlock('lightblue');});