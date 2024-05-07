/*eslint-disable*/
import Movie from './components/Movie';
import {upcoming} from './api/Upcoming';
import StyledAppContainer from './components/StyledDisplay.js';

function DisplayUpcoming() {

  return (
      <div>
        <StyledAppContainer>
          {upcoming.results.map((item)=>{
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

export default DisplayUpcoming