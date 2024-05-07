/*eslint-disable*/
import Movie from './components/Movie';
import { nowplaying } from './api/NowPlaying';
import StyledAppContainer from './components/StyledDisplay.js';

function DisplayNowPlaying() {

  return (
    <>
      <div>
        <StyledAppContainer>
          {nowplaying.results.map((item) => {
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
    </>
  )
}

export default DisplayNowPlaying
