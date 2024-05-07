//eslint-disable-next-line
import React from 'react';
import { StyledMovieContainer, StyledMovieInfo } from './StyledMovie';

const img_base = 'https://image.tmdb.org/t/p/w500';
//eslint-disable-next-line
export default function Movie({ title, poster_path, vote_average }) {
  return (
    <StyledMovieContainer>
      <img src={img_base + poster_path} alt={title} />
      <StyledMovieInfo>
        <h4>{title}</h4>
        <span>⭐{vote_average}</span>
      </StyledMovieInfo>
    </StyledMovieContainer>
  );
}
