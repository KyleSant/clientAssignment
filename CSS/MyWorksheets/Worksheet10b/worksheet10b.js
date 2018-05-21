function Car(make, model, year, colour){
    this.make = make;
    this.model = model;
    this.year = year;
    this.colour = colour;
    this.started = false;
    
    this.Start = function(){
        this.started = true;
        
        if(this.started = true){
            alert("Car is on");
        }
        else{
            alert("You need start the car first");
        }
        
    };
    
    this.Drive() = function(){
        
    };
    
    this.Brake() = function(){
        
    };
    
    this.Stop() = function(){
        this.started = false;
        
        if(this.started = false){
            
        }
    };
}

var newCar = new Car('Nissan3K','Nissan',1990,'Red');

document.getElementById("Make").innerHTML = "newCar";