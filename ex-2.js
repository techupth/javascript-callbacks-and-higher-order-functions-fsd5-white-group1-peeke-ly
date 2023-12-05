//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  if (operation(array) >= 5) {
    return true;
  } else {
    return false;
  }
}

function counter(array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 70) {
      counter++;
    }
  }
  return counter;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, counter);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, counter);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, counter);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
