function capitalize(a) {
  let splitWord = a.split("")
  let firstCap = splitWord[0].toUpperCase();
  let sliceW = splitWord.slice(1,)
  let joinW = sliceW.join("")
  let concatW = firstCap.concat(joinW)
  return concatW
  }

  module.exports = capitalize;
