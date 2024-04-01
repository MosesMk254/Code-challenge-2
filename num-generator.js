// A JS function that accepts two numbers and generates an array btwn them

// defining the function and assigning the two numbers a its parameter
function numGenerator(num1, num2) {
  let array = []; //assigning an empty array that will take the generated nums and place them inside the array

  // getting the smaller number and the larger number that will define which goes first intp the array and which goes last
  let small = Math.min(num1, num2);
  let large = Math.max(num1, num2);

  // a loop that will geenate the array and push values into it
  for (let i = small + 1; i < large; i++) {
    array.push(i);
  }
  return array; //returning the final generated array
}
