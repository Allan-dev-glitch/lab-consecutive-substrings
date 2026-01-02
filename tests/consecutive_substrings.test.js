// consecutiveSubstrings.test.js
const consecutiveSubstrings = require('./consecutiveSubstrings'); // make sure the path is correct

// Test empty string
test('returns an empty array when the input string is empty', () => {
  expect(consecutiveSubstrings('')).toEqual([]);
});

// Test single character
test('returns an array containing one string when the input is one character', () => {
  expect(consecutiveSubstrings('a')).toEqual(['a']);
});

// Test small string
test('can handle two or three letters', () => {
  expect(consecutiveSubstrings('ab')).toEqual(['a', 'ab', 'b']);
  expect(consecutiveSubstrings('abc')).toEqual(['a', 'ab', 'abc', 'b', 'bc', 'c']);
});

// Test longer string
test('can handle longer words like "phone"', () => {
  expect(consecutiveSubstrings('phone')).toEqual([
    'p','ph','pho','phon','phone',
    'h','ho','hon','hone',
    'o','on','one',
    'n','ne',
    'e'
  ]);
});
