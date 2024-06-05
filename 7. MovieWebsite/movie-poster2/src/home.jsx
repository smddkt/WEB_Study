import React, { useState } from 'react';
import Banner from './components/Banner';
import Search1 from './components/Search1';
import MovieList from './components/MovieList';
import { apiKey } from './api/myApiKey';

const API_URL = 'https://api.themoviedb.org/3/search/movie';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    if (query) {
      try {
        const response = await fetch(`${API_URL}?query=${query}`, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json;charset=utf-8',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('API 응답 데이터:', data);
        setMovies(data.results || []);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
  };

  return (
    <div>
      <Banner />
      <Search1 onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
