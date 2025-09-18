//Task 1
let kind;
if (kind == "car" || kind == "truck"){
    let needsLicenseResult = true;
}
else{
    let needsLicenseResult = false;
}

//Task 2
let option1 = "Toyota";
let option2 = "Honda";
let options = [option1,option2];
options.sort();
if (option1 == options[0]){
    let chooseVehicleResult = option1 + " is clearly the better choice.";
}
else{
    let chooseVehicleResult = option2 + " is clearly the better choice.";
}

//Task 3
let originalPrice;
let age;
if (age < 3){
    calculateResellPriceResult = originalPrice * .8;
}
else if(age > 10){
    calculateResellPriceResult = originalPrice * .5;
}
else{
    calculateResellPriceResult = originalPrice * .7;
}