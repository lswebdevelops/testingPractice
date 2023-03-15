const capitalize = require('./capitalize');

test('Capitalizes words given', () => {
  expect(capitalize('test')).toBe("TEST");
});

const reverseString = require('./reverseString')
test("Reverse Strings: ", () =>{
  expect(reverseString('hanunah')).toBe("hanunah")
});
