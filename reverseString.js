function reverseString (string){
    let splitString = string.split("");
    // console.log(splitString);
    let reverseString = splitString.reverse();
    // console.log(reverseString);
    let joinString = reverseString.join("");
    // console.log(joinString);
    return joinString;
  }
  module.exports = reverseString;

//   console.log(reverseString('test'));