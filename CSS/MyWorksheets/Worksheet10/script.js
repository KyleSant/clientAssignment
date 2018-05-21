var typelist = prompt("Enter 1 alphabetical order, and -1 for reverse order", 1);

var mylist = ['Banana','Cereal','Eggs','Milk','Potatoes'];



if (typelist == -1){
    document.getElementById("showlist").innerHTML = mylist.reverse().join(' <br> ');
}
else if(typelist == 1){
    document.getElementById("showlist").innerHTML = mylist.sort().join(' <br> ');
  
}
else
    {
          document.getElementById("showlist").innerHTML = "Error, invalid input";
    }


function search(){
    var entry = document.getElementById("element").value;
    for (var counter = 0; counter < mylist.length; counter++){
        mylist[counter] = mylist[counter].toLowerCase();
    }
    entry = entry.toLowerCase();
    var index = mylist.indexOf(entry);
    document.getElementById("indexEntry").innerHTML = entry + " " + "was found at index" + " " +  index;
    if(index == -1){
        document.getElementById("indexEntry").innerHTML = "The word you are searching for was not found in the list!";
    }
}



function clickSplit(){
    var entryValues = document.getElementById("values").value;
    splitAndReverse(entryValues);
}


function splitAndReverse(splitEntry){
    var finalSplit = splitEntry.split(',');
    finalSplit.reverse();
    alert(finalSplit.join());
    
    for (var counter = 0; counter < finalSplit.length; counter++){
        document.getElementById("reverseWords").innerHTML +=  "<br>" + finalSplit[counter]; 
    }
    
}

function clickMultiple(){
    
    for (var i = 0; i < 9; i++){
        var nineMultiple = i * 9;
        document.getElementById("multiples").innerHTML += "Multiple" + " " +i + ":" + " " + nineMultiple;
    }
}