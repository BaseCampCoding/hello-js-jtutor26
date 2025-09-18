//Find card
let stack = [1,2,3,4,5,6,7,8,9,10];
let position;
let getItemResult = stack[position];

//Replace Card
let replacementCard;
stack[position] = replacementCard;

//Add Card to top
let newCardTop;
stack.unshift(newCardTop);

//Remove card
stack.splice(position);

//Remove top card
stack.shift();

//Add to bottom
let newCardBottom;
stack.push(newCardBottom,1);

//Remove from bottom
stack.pop();

//Stack Size
let stackSize = 10;
let checkSizeOfStackResult = stackSize == stack.length()


//no test case??