// // The user is prompted to enter their scoops.
// const promptInput =  prompt(`please enter the scoops of froyo you want seperated by commas`, `vanilla,vanilla,vanilla,strawberry,coffee,coffee`);

// // The user's input is split into individual scoops and stored in an array,
// const splitScoops = promptInput.split(`,`);

// //An object is created to store the froyo order

// // const froyoOrder = {
// //  flavorOne: ``,
// //  flavorOneCount: 0,                                  //FAILURE
// //  flavorTwo: ``,
// //  flavorTwoCount: 0,
// //  flavorThree: ``,
// //  flavorThreeCount: 0
// // }

// // A loop iterates through the scoop array and pushes the indidual scoops to the object.

// // for (let i = 0; i < splitScoops.length; i++) {
// //  if (i = `vanilla`) {
// //   froyoOrder.flavorOne = i;
// //  }
// //  if (i = `strawberry`) {                              //FAILURE
// //   froyoOrder.flavorTwo = i;
// //  }
// //  if (i = `coffee`) {
// //   froyoOrder.flavorThree = i;
// //  }
// // }

// const froyoOrder = {
//  flavorOne: 0,
//  flavorTwo: 0,
//  flavorThree: 0
// }

// // scoopClassifier = () => {
// //   let flavorOne = '';
// //   for (let i =0; i<splitScoops.length; i++) 
// //   if (i) {
//     froyoOrder.flavorOne = splitScoops.shift();
// //   }
// //   return flavorOne;
// // }

// // scoopClassifier();
// // console.log(scoopClassifier());
// // console.log(splitScoops);

// The user is prompted to enter their scoops.
const promptInput =  prompt(`please enter the scoops of froyo you want seperated by commas`, `vanilla,vanilla,vanilla,strawberry,coffee,coffee`);

// The user's input is split into individual scoops and stored in an array,
const splitScoops = promptInput.split(`,`);

// An empty object is created to store the froyo order

const froyoOrder = {};

// The flavors are classfied and the flavor names are assigned to keys in the froyoOrder object. Simultainiusly,
// the count for each flavor is tallied.

const flavorClassify = () => {
  let flavorOne = splitScoops.shift();
  let flavorTwo = '';
  let flavorThree = '';
  froyoOrder[flavorOne] = 1;
  for (let i =0; i < splitScoops.length; i++) {
     if (i !== flavorOne) {
       i = flavorTwo; 
       froyoOrder[flavorTwo] = 1; }
     if (i !== flavorOne || flavorTwo) {
          i = flavorThree;
        froyoOrder[flavorThree] = 1;
      }
  }
  return froyoOrder;
}

flavorClassify();

console.log(froyoOrder);