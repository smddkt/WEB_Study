import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { img_base } from './DisplayNowPlaying.jsx';
import {
  StyledDetailBackground,
  StyledDetailContainer,
  StyledDetailInfo,
} from './components/StyledDetailPage.js';

function DisplayDetails() {
  const { title } = useParams();
  const { state: movie } = useLocation();
  const [overviewdata, setOverviewdata] = useState('');

  useEffect(() => {
    showOverview();
  });

  function showOverview() {
    return movie.overview
      ? setOverviewdata(movie.overview)
      : setOverviewdata('TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.');
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '94vh' }}>
      <StyledDetailBackground posterPath={movie.poster_path} />
      <StyledDetailContainer key={movie.id}>
        <img src={img_base + movie.poster_path} alt={title} />
        <StyledDetailInfo voteAverage={movie.vote_average}>
          <h4>{title}</h4>
          <br />
          <div className='stars'>
            <span className='text'>평</span>
            <span className='text'>점</span>
            {Array.from({ length: Math.floor(movie.vote_average) }).map(
              (_, index) => (
                <div key={index}>⭐</div>
              ),
            )}
          </div>
          <br />
          <p>개봉일 {movie.release_date}</p>
          <br />
          <p>줄거리</p>
          <br />
          <span>{overviewdata}</span>
        </StyledDetailInfo>
      </StyledDetailContainer>
    </div>
  );
}

export default DisplayDetails;
