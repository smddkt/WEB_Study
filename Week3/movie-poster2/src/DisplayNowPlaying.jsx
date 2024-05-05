import Movie from './components/Movie';
import './Pages.css';
import { nowplaying } from './api/NowPlaying';

function DisplayNowPlaying() {

  return (
    <>
      <div>
        <div className="app-container">
          {nowplaying.results.map((item) => {
            return (
              <Movie
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default DisplayNowPlaying
