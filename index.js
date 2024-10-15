// The user is prompted to enter their scoops.
const promptInput =  prompt(`please enter the scoops of froyo you want seperated by commas`, `vanilla,vanilla,vanilla,strawberry,coffee,coffee`);

// The user's input is split into individual scoops and stored in an array,
const splitScoops = promptInput.split(`,`);

// An empty object is created to store the froyo order

const froyoOrder = {};

// The flavors are classfied and the keys inside the froyoOrder object are set to equal flavor names.

flavorOne = splitScoops.shift();
froyoOrder[flavorOne] = 0;
for (let i = 0; i < splitScoops.length; i++) {
  if (flavorOne === splitScoops[0]) {
    splitScoops.shift();
  }
}

flavorTwo = splitScoops.shift();
froyoOrder[flavorTwo] = 0;
for (let i = 0; i < splitScoops.length; i++) {
  if (flavorTwo === splitScoops[0]) {
    splitScoops.shift();
  }
}

flavorThree = splitScoops.shift();
froyoOrder[flavorThree] =0;
for (let i = 0; i < splitScoops.length; i++) {
  if (flavorThree === splitScoops[0]) {
    splitScoops.shift();
  }
}

console.log(froyoOrder);