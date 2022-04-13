//1
function feetToMile(giveFeet){
    if(giveFeet < 0){
        return ('WARNING! Feet minus value are not allow');
    }

    else{
    var mile = giveFeet*0.000189394;
    mile=mile.toFixed(6);
    return mile;
    }
}
var result = feetToMile(-20) ;
console.log(result);


//2
function woodCalculator(chair,table,bed){
    if(chair < 1){
        return ("Your chair value is incorrect");
    }
    else if(table < 1){
        return ("Your table value is incorrect");
    }
    else if(bed < 1){
        return ("Your bed value is incorrect");
    }
   else{
    var totalResult = chair*1+table*3+bed*5;
    return totalResult; 
   } 
    
}
var result=woodCalculator(10,12,2);
console.log("Total Quibiq Wood = ",result);



//3
function brickCalculator(floor){
    var sum;
    if (floor < 1){
        return ("Your value is incorrect. try another one!");
    }
    else if(floor >= 1 && floor <= 10){
        sum = (floor*15*1000);
        return sum;
    }
    else if (floor >= 11 && floor <=20){
        floor = floor-10;
        sum = (10*15*1000);
        sum = sum + (floor*12*1000);
        return sum;
    }
    else if(floor > 20){
        sum = (10*15*1000);
        sum = sum + (10*12*1000);
        sum = sum + (floor*10*1000);
        return sum;
    }
    
}
var result = brickCalculator(25);
console.log("Total Number of Brick = ",result);



//4
function tinyFriend(friendName){
    var smallName = friendName[0];
    for(var i=0; i<friendName.length; i++){
        if(smallName.length > friendName[i].length){
        smallName = friendName[i];
        }
    }
    return smallName;
}
var name = tinyFriend(['purnima','purno','debraj','borsha','nopor']);
console.log('My friend name is = ',name);