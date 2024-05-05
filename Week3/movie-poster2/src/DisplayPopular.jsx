import Movie from './components/Movie';
import './Pages.css';

import {popular} from './api/Popular';

function DisplayPopular() {

  return (
      <div>
        <div className="app-container">
          {popular.results.map((item)=>{
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

export default DisplayPopular
