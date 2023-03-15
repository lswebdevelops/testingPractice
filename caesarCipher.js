const caesar = function(string, step) {
    if(step < 0){
        return caesar(string, step + 26)
    }
    //output variable
    let output = "";
    //go tru character
    for(let i = 0; i < string.length; i++){
        //get the character we will be pushing()
        let char = string[i];
    // if it's a letter from a to z
    if(char.match(/[a-z]/i)){
        let code = string.charCodeAt(i);
        // if uppercase
        if(code >= 65 && code <=90){
            char= String.fromCharCode(((code - 65 + step) % 26) + 65);
        }
        // lowercase
        else if(code >= 97 && code <= 122){
            char = String.fromCharCode(((code - 97 + step) % 26) + 97);
        }
    }
    // pushing
    output += char;
    }
return output;
};
console.log(caesar('Hello, World!', -29))
console.log(caesar("Ebiil, Tloia!", +29));
module.exports = caesar;