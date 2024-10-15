// The user is prompted to enter their scoops.
const promptInput =  prompt(`please enter the scoops of froyo you want seperated by commas`, `vanilla,vanilla,vanilla,strawberry,coffee,coffee`);

// The user's input is split into individual scoops and stored in an array,
const splitScoops = promptInput.split(`,`);

// An empty object is created to store the froyo order

const froyoOrder = {}

// The flavors are classfied and the keys inside the froyoOrder object are set to equal flavor names.

froyoOrder[0] = splitScoops.shift();

for (let i = 0; i < splitScoops.length; i++){
  if (froyoOrder[0] === splitScoops[0]) {
    splitScoops.shift();
  }
}

froyoOrder[1] = splitScoops.shift();

for (let i = 0; i< splitScoops.length; i++) {
  if (froyoOrder[1] === splitScoops[0]) {
    splitScoops.shift();
  }
}

froyoOrder[2] = splitScoops.shift();

for (let i = 0; i < splitScoops.length; i++) {
  if (froyoOrder[2] === splitScoops[0]) {
    splitScoops.shift();
  }
}

console.log(froyoOrder);