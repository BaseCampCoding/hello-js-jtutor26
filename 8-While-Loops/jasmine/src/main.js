let juiceName = "Energizer";
let timeToMixJuiceResult;

if (juiceName === "Pure Strawberry Joy") {
  timeToMixJuiceResult = 0.5;
} else if (juiceName === "Energizer" || juiceName === "Green Garden") {
  timeToMixJuiceResult = 1.5;
} else if (juiceName === "Tropical Island") {
  timeToMixJuiceResult = 3;
} else if (juiceName === "All or Nothing") {
  timeToMixJuiceResult = 5;
} else {
  timeToMixJuiceResult = 2.5;
}

// console.log(timeToMixJuiceResult);

//Task 2
let wedgesNeeded = 100;
let limes = ["small", "large", "medium", "large", "small"];
let wedgesCut = 0;
let limesCut = 0;

        //limesCut is the index bc it would store the same value as the index anyways
while (wedgesCut < wedgesNeeded && limesCut < limes.length) {
  if (limes[limesCut] == "small") {
    wedgesCut += 6;
  } else if (limes[limesCut] == "medium") {
    wedgesCut += 8;
  } else if (limes[limesCut] == "large") {
    wedgesCut += 10;
  }
  limesCut++;
}
// console.log(limesCut);
// console.log(wedgesCut);

//Task 3
let timeLeft = 10;
let orders = ["Pure Strawberry Joy", "Energizer", "Tropical Island", "All or Nothing", "Green Garden"];
let totalTime = 0;
let orderTrack = [];
let index=0;
for (let i = 0; i < orders.length; i++) {
    if (orders[i] === "Pure Strawberry Joy") {
    timeToMixJuiceResult = 0.5;
    } else if (orders[i] === "Energizer" || orders[i] === "Green Garden") {
    timeToMixJuiceResult = 1.5;
    } else if (orders[i] === "Tropical Island") {
    timeToMixJuiceResult = 3;
    } else if (orders[i] === "All or Nothing") {
    timeToMixJuiceResult = 5;
    } else {
    timeToMixJuiceResult = 2.5;
    }
    totalTime += timeToMixJuiceResult;
    orderTrack.push(orders[i]);
}
console.log(totalTime);

while (totalTime < timeLeft && index > 0) {
    
}
