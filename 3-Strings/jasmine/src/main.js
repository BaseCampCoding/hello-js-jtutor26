// //Gets Front Door Password
// const LINES=["Stands so high","Huge hooves too","Impatiently waits for","Reins and harness","Eager to leave "];
// let frontDoorPassword=""
// for (let i=0;i<LINES.length; i++){
//     let frontDoorLetter = LINES[i].charAt(0);
//     frontDoorPassword += frontDoorLetter
// }
// frontDoorPassword = frontDoorPassword.toLowerCase()
// frontDoorPassword = frontDoorPassword.charAt(0).toUpperCase() + frontDoorPassword.slice(1)
// console.log(frontDoorPassword) //returns "Shire"

//I was overcomplicating it, i can just create a variable with "SHIRE" :/   mine still works tho

let line ="Stands so high";
let frontDoorLetter = line[0];

let frontDoorWord = "SHIRE";
let frontDoorPassword=frontDoorWord[0].toUpperCase()+frontDoorWord.slice(1,5).toLowerCase();
console.log(frontDoorPassword);

let lineWithWhiteSpace="Reins and harness";
let removeWhiteSpace=lineWithWhiteSpace.trim();
let backDoorLetter = removeWhiteSpace[removeWhiteSpace.length-1];
let backDoorWord = "Horse"
backDoorPassword =backDoorWord + ", please"