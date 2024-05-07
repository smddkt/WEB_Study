/*eslint-disable*/
import Movie from './components/Movie';
import { toprated } from './api/TopRated';
import StyledAppContainer from './components/StyledDisplay.js';

function DisplayTopRated() {

  return ( 
    <div>
      <StyledAppContainer>
        {toprated.results.map((item) => {
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          ) 
        })} 
      </StyledAppContainer>
    </div>
  )
}

export default DisplayTopRated