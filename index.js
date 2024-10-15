// The user is prompted to enter their scoops.
const promptInput =  prompt(`please enter the scoops of froyo you want seperated by commas`, `vanilla,vanilla,vanilla,strawberry,coffee,coffee`);

// The user's input is split into individual scoops and stored in an array,
const splitScoops = promptInput.split(`,`);

// An empty object is created to store the froyo order

const froyoOrder = {};

// The flavors are classfied and the flavor names are assigned to keys in the froyoOrder object. Simultainiusly,
// the count for each flavor is tallied.

//NOTE: Currently the code is not in a invokable function, and breaks if user input is switched up too much.
//      I will put the following code in an invokable function, and add functionality for over three flavors
//      and scrambled input when I get the time.

flavorOne = splitScoops.shift();
froyoOrder[flavorOne] = 1;
for (let i = 0; i < splitScoops.length; i++) {
  if (flavorOne === splitScoops[0]) {
    froyoOrder[flavorOne] = froyoOrder[flavorOne] +1;
    splitScoops.shift();

  }
}

flavorTwo = splitScoops.shift();
froyoOrder[flavorTwo] = 1;
for (let i = 0; i < splitScoops.length; i++) {
  if (flavorTwo === splitScoops[0]) {
    froyoOrder[flavorTwo] = froyoOrder[flavorTwo] + 1;
    splitScoops.shift();
  }
}

flavorThree = splitScoops.shift();
froyoOrder[flavorThree] = 1;
for (let i = 0; i < splitScoops.length; i++) {
  if (flavorThree === splitScoops[0]) {
    froyoOrder[flavorThree] = froyoOrder[flavorThree] + 1;
    splitScoops.shift();
  }
}

console.log(`You have ordered:`, froyoOrder);