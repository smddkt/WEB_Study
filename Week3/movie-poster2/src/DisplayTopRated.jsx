import Movie from './components/Movie';
import './Pages.css'

import { toprated } from './api/TopRated';

function DisplayTopRated() {

  return (
    <div>
      <div className="app-container">
        {toprated.results.map((item) => {
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
  )
}

export default DisplayTopRated