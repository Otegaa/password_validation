export const findDataOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
  },
};

export const findData = async (url, options) => {
  try {
    const res = await fetch(url, options);
    const data = await res.json();

    if (data.success === false) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.error('Error checking word:', error);
    return false;
  }
};
