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
test("Multiply two numbers", ()=>{
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
// For floating point equality, use toBeCloseTo instead of toEqual,
// because
// you don't want a test to depend on a tiny rounding error.
test("dividing two numbers", () => {
  expect(divide(3,2)).toBeCloseTo(1.5)
});
