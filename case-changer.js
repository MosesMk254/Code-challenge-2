function caseChanger(string) {
  let changer = string.split(" ");

  for (let i = 0; i < changer.length; i++) {
    let changed = changer[i];

    if (changed === changed.toUpperCase()) {
      changer[i] = changed.toLowerCase();
    } else if (changed === changed.toLowerCase()) {
      changer[i] = changed.toUpperCase();
    } else {
      ("Not a valid answer");
    }
  }
  let newString = changer.join(" ");
  return newString;
}
console.log(caseChanger("My Name Is Moses"));
