// capitalizing a string 


const capitalize = require('./capitalize');

test('Capitalizes words given', () => {
  expect(capitalize('test')).toBe("TEST");
});

// testing  printing a reverse string
const reverseString = require('./reverseString');

test("Reverse Strings: ", () =>{
  expect(reverseString('hanunah')).toBe("hanunah");
});

/* testing calculator
*/
const { multiply, add, subtract, divide } = require('./calculator');
// testing multiplication
test("Multiplying two numbers", ()=>{
  expect(multiply(2, 3)).toBe(6)
});

// testing addition

test("Adding two numbers", () => {
  expect(add(2,3)).toBe(5)
});

// testing subtraction 

test("subtracting two numbers", () => {
  expect(subtract(4,3)).toBe(1)
});

// testing division 
/*
For floating point equality, use toBeCloseTo instead of toEqual,
because you don't want a test to depend on a tiny rounding error.
*/
test("dividing two numbers", () => {
  expect(divide(10,3)).toBeCloseTo(3.33)
});


// Caesar Cipher

const caesarCipher  = require('./caesarCipher');
// Test case for Caesar Cipher function
// Input: "Hello, World!" with shift -29
// Expected output: "Ebiil, Tloia!"
// This test checks if the function correctly encrypts the input string using the Caesar Cipher algorithm with a shift of -29.

test("Caesar Ciphered: ",()=>{
  expect(caesarCipher ("Hello, World!", -29)).toBe("Ebiil, Tloia!")
});
// Test case for Caesar Decipher function
// Input: "Ebiil, Tloia!" with shift +29
// Expected output: "Hello, World!"
// This test checks if the function correctly decrypts the input string using the Caesar Cipher algorithm with a shift of +29.

test("Caesar Decoded: ", () => {
  expect(caesarCipher("Ebiil, Tloia!", +29)).toBe("Hello, World!")
});


// Analyzing an Array
const analyzeArray = require('./analyzeArray');
const arr = [1,8,3,4,2,6];

test("Analyzing an array: ", () => {
  expect(analyzeArray(arr)).toEqual({average: 4, max: 8, min: 1, length: 6});
});

test("Analyzing object:", () =>{
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, max: 8, min: 1, length: 6});
  });