import axios from 'axios';
import { useState, useEffect } from 'react';
import Movie from '../components/Movie.jsx';
import StyledAppContainer from '../components/StyledDisplay.js';
import { apiKey } from './myApiKey';

const Popular = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setInfo(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <StyledAppContainer>
        {info.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
          />
        ))}
      </StyledAppContainer>
    </div>
  );
};
export default Popular;
