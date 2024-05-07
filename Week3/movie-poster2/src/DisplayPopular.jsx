/*eslint-disable*/
import Movie from './components/Movie';
import {popular} from './api/Popular';
import StyledAppContainer from './components/StyledDisplay.js';

function DisplayPopular() {

  return (
      <div>
        <StyledAppContainer>
          {popular.results.map((item)=>{
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

export default DisplayPopular
