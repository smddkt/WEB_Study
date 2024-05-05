import Movie from './components/Movie';
import './Pages.css'

import {upcoming} from './api/Upcoming';

function DisplayUpcoming() {

  return (
      <div>
        <div className="app-container">
          {upcoming.results.map((item)=>{
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

export default DisplayUpcoming