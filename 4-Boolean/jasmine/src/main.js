//State Variables
let knightIsAwake = true;
let archerIsAwake = false;
let prisonerIsAwake = true;
let petDogIsPresent = true;

//Fast Attack
let canExecuteFastAttack = !knightIsAwake;
console.log(canExecuteFastAttack);

//Spy
let canSpy = knightIsAwake || archerIsAwake || prisonerIsAwake;
console.log(canSpy);

//Signal Prisoner
let canSignalPrisoner = prisonerIsAwake && !archerIsAwake;
console.log(canSignalPrisoner);

//Free Prisoner
let canFreePrisoner = (petDogIsPresent && !archerIsAwake) || (!petDogIsPresent && prisonerIsAwake && !(knightIsAwake || archerIsAwake)); 
console.log(canFreePrisoner);


//no test case??
