//=======FEET TO MILE START=======
function feetToMile(feet) {
    var mile = feet / 5280;
    if (mile < 0) {
        mile = "Distance Cannot Be Negative Value.";
    }
    return mile;
}
var result = feetToMile(5280);
console.log(result);
//=======FEET TO MILE END=======



//=======WOOD CALCULATOR START=======
function woodCalculator(chair, table, bed) {
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    if (chairCount < 0 || tableCount < 0 || bedCount < 0) {
        totalWood = "Wood Items Cannot Be Negative Value.";
    }
    return totalWood;
}
var result = woodCalculator(10, 10, 10);
console.log(result);
//=======WOOD CALCULATOR END=======



//=======BRICK CALCULATOR START=======
function brickCalculator(n) {
    var floorConditionOne = 0;
    var floorConditionTwo = 0;
    var floorConditionThree = 0;
    for (var i = 1; i <= n; i++) {
        var currentFloor = i;
        if (currentFloor <= 10) {
            floorConditionOne = floorConditionOne + 15;
        } else if (currentFloor <= 20 && currentFloor > 10) {
            floorConditionTwo = floorConditionTwo + 12;
        } else {
            floorConditionThree = floorConditionThree + 10;
        }
        var totalFeets = floorConditionOne + floorConditionTwo + floorConditionThree;
        var totalBricks = totalFeets * 1000;
    }
    return totalBricks;
}
var yourBriks = brickCalculator(25);
console.log(yourBriks);
//=======BRICK CALCULATOR END=======



//=======TINY FRIEND START=======
function tinyFriend(names) {
    var tinyName = names[0];
    var tinyNameLength = tinyName.length;

    for (var i = 0; i < names.length; i++) {
        var currentName = names[i];
        var currentNameLength = currentName.length;

        if (currentNameLength < tinyNameLength) {
            tinyName = currentName;
        }
    }
    return tinyName;
}
var friendList = ["rafiq", "sofiqul", "rana", "ray", "george", "rathin", "jubayer"];
var result = tinyFriend(friendList);
console.log(result);
//=======TINY FRIEND END=======
