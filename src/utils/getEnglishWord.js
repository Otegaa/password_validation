import { findData, findDataOptions } from './findData';

export const getEnglishWordCheck = async (word, signal) => {
  const wordsApiUrl = `https://wordsapiv1.p.rapidapi.com/words/${word}/typeOf`;
  const data = await findData(wordsApiUrl, findDataOptions, signal);

  return data;
};
