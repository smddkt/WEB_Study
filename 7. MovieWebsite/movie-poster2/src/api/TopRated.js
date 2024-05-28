import { apiKey } from './myApiKey';

async function TopRated() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  };

  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated',
      options,
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default TopRated;
