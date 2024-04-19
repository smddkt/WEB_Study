
import {movies} from './components/movieapi';
import Movie from './components/movie'
import Modal from './components/modal'

import './App.css'
function App() {
  return(
    <div>
      <div className="app-container">
      {movies.results.map((item)=>{
            return (
              <Movie
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
              />
            )
          })  
        }
      </div>
        <Modal />
    </div>
  )

  
        
}

export default App
