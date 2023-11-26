import { describe, it, expect } from 'vitest';
import { getEnglishWordCheck } from '../utils/getEnglishWord';
import { checkChars } from '../utils/checkChars';

describe('check for password length', () => {
  const lengthValid = /^(.{8,16})$/;
  it('returns TRUE if length is between 8 and 16', async () => {
    const inputValue = 'helloWorld';
    expect(lengthValid.test(inputValue)).toBe(true);
  });
  it('returns FALSE if length is less than 8', async () => {
    const inputValue = 'helloWo';
    expect(lengthValid.test(inputValue)).toBe(false);
  });
  it('returns FALSE if length is more than 16', async () => {
    const inputValue = 'helloWorldTwiceAgain';
    expect(lengthValid.test(inputValue)).toBe(false);
  });
});

describe('check for digits', () => {
  const containsDigit = /\d/;
  it('returns TRUE if digit is in password', async () => {
    const inputValue = 'hello8World';
    expect(containsDigit.test(inputValue)).toBe(true);
  });
  it('returns FALSE if there is no digit', async () => {
    const inputValue = 'helloWorld';
    expect(containsDigit.test(inputValue)).toBe(false);
  });
});

describe('check for letters', () => {
  const containsLetter = /[a-zA-Z]/;
  it('returns TRUE if letter is in password', async () => {
    const inputValue = 'hello8World';
    expect(containsLetter.test(inputValue)).toBe(true);
  });
  it('returns FALSE if no letter', async () => {
    const inputValue = '6766709863';
    expect(containsLetter.test(inputValue)).toBe(false);
  });
});

describe('check for english word in password', () => {
  it('returns FALSE if full english word is in NOT password', async () => {
    const inputValue = 'hellyo8Woryld';

    const signal = new AbortController().signal;

    const englishFoundWord = checkChars(inputValue);
    let isEnglishWord;

    for (let word of englishFoundWord) {
      const singleWord = word;
      const result = await getEnglishWordCheck(singleWord, signal);

      isEnglishWord = result;

      if (result) {
        break;
      }
    }

    expect(isEnglishWord).toBe(false);
  });
});
