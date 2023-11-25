export function checkChars(password) {
  const digitRegex = /\d/;
  let arrWithOver2Char = [];
  if (digitRegex.test(password)) {
    const passwordSplit = password.split(/\d/);

    arrWithOver2Char = passwordSplit.filter((str) => str.length >= 3);
  } else if (password.length >= 3) {
    arrWithOver2Char.push(password);
  }

  return arrWithOver2Char;
}
