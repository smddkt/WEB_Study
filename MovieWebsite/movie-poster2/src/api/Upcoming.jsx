import axios from 'axios';
import { useState, useEffect } from 'react';
import Movie from '../components/Movie.jsx';
import StyledAppContainer from '../components/StyledDisplay.js';

const Upcoming = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODgwMDljY2QxYjE3MTUyZWM2MmRlYjQzM2VmNTVjNCIsInN1YiI6IjY2MzNlMWIzZDlmNGE2MDEyY2UyOGRjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RZ1Ar-fshGoidSPk-EDnzCpkKC5w6hOWsaj8mW0k8Dw',
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
export default Upcoming;