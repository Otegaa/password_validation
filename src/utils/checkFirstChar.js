export function checkFirstChars(password) {
  // Use a regex to check for a digit
  const digitRegex = /\d/;

  // Check if the password contains a digit
  if (digitRegex.test(password)) {
    // Use another regex to extract characters before the first digit
    const charsBeforeDigit = password.split(/\d/)[0];
    return charsBeforeDigit;
  }
}
