import { describe, it, expect } from 'vitest';
import { getEnglishWordCheck } from '../utils/getEnglishWord';

describe('fetch from API', () => {
  it('should fetch word type from Words API', async () => {
    const word = 'catapult';
    const signal = new AbortController().signal;
    const data = await getEnglishWordCheck(word, signal);
    expect(data).toBeDefined();
  });
});
