// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  operation(array);
  newEmployeeSalaries.push(array);
}
function add5000(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + 5000;
  }
  return array;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

const newEmployeeSalaries = [];

// Using `forEach` function here
let a = forEach(employeeSalaries, add5000);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
