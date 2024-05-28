/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import Upcoming from './api/Upcoming.js';
import {
  StyledMovieContainer,
  StyledMovieInfo,
} from './components/StyledMovie';
import StyledAppContainer from './components/StyledDisplay.js';

const img_base = 'https://image.tmdb.org/t/p/w500/';

function DisplayUpcoming() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await Upcoming();
      if (data && data.results) {
        setMovies(data.results);
      }
    }

    fetchData();
  }, []);

  return (
    <StyledAppContainer>
      {movies.map((movie) => (
        <StyledMovieContainer key={movie.id}>
          <img src={img_base + movie.poster_path} alt={movie.title} />
          <StyledMovieInfo>
            <h4>{movie.title}</h4>
            <span>⭐{movie.vote_average}</span>
          </StyledMovieInfo>
        </StyledMovieContainer>
      ))}
    </StyledAppContainer>
  );
}

export default DisplayUpcoming;
