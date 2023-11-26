export const findDataOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
  },
};

export const findData = async (url, options, signal) => {
  try {
    const res = await fetch(url, {
      ...options,
      signal,
    });
    const data = await res.json();

    if (data.word) return true;
    return data.success;
  } catch (error) {
    return false;
  }
};
