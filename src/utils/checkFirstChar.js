export function extractCharactersBeforeFirstDigit(password) {
  // Use a regular expression to check for the presence of a digit
  const digitRegex = /\d/;

  // Check if the password contains a digit
  if (digitRegex.test(password)) {
    // Use another regular expression to extract characters before the first digit
    const charactersBeforeDigit = password.split(/\d/)[0];

    return charactersBeforeDigit;
  }

  // If the password doesn't contain a digit, return the original password
  return password;
}
