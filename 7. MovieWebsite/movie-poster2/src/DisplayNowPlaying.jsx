import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NowPlaying from './api/NowPlaying.js';
import {
  StyledMovieContainer,
  StyledMovieInfo,
} from './components/StyledMovie';
import StyledAppContainer from './components/StyledDisplay.js';

export const img_base = 'https://image.tmdb.org/t/p/w500/';

function DisplayNowPlaying() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const goToDetail = (movie) => {
    navigate(`/movie/${movie.title}`, {
      state: movie,
    });
  };

  useEffect(() => {
    async function fetchData() {
      const data = await NowPlaying();
      if (data && data.results) {
        setMovies(data.results);
      }
    }
    fetchData();
  }, []);

  return (
    <StyledAppContainer>
      {movies.map((movie) => (
        <StyledMovieContainer key={movie.id} onClick={() => goToDetail(movie)}>
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

export default DisplayNowPlaying;
