export const findDataOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
  },
};

export const findData = async (url, options) => {
  const res = await fetch(url, options);
  const data = res.json();

  return data;
};
