// A javascript function that takes in a string and changes the cases of the string and returns the modified string

// the function that takes in the string as its parameter and checks it through the conditions and modifies it according to the conditions.
function caseChanger(string) {
  let changer = string.split(" "); // assigning a variable that splits the string into individual character

  // a loop that iterates through the string to check if it has lower case or upper case
  for (let i = 0; i < changer.length; i++) {
    let changed = changer[i];

    if (changed === changed.toUpperCase()) {
      changer[i] = changed.toLowerCase();
    } else if (changed === changed.toLowerCase()) {
      changer[i] = changed.toUpperCase();
    }
  }
  let newString = changer.join(" "); //a variable that joins the characters of the string to one string
  return newString; // returning the modified string depending on the condition it matches
}
console.log(caseChanger("my name is moses"));
