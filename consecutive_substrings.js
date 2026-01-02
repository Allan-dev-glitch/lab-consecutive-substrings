function consecutiveSubstrings(string) {
  const result = [];

  // Loop through each starting character
  for (let i = 0; i < string.length; i++) {
    let substring = "";

    // Build consecutive substrings starting at index i
    for (let j = i; j < string.length; j++) {
      substring += string[j];    // Add current character
      result.push(substring);    // Save substring
    }
  }

  return result;
}

// ====== Test Cases ======
if (require.main === module) {
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(''));

  console.log("");

  console.log("Expecting: ['p','ph','pho','phon','phone','h','ho','hon','hone','o','on','one','n','ne','e']");
  console.log("=>", consecutiveSubstrings('phone'));
}

// Export for Jest or other test files
module.exports = consecutiveSubstrings;