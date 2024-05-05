import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from "./NavBar";
import Home from "./home";
import DisplayNowPlaying from './DisplayNowPlaying.jsx';
import DisplayTopRated from './DisplayTopRated.jsx';
import DisplayPopular from './DisplayPopular.jsx';
import DisplayUpcoming from './DisplayUpcoming.jsx';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route exact path='/' element = {<Home />}></Route>
          <Route path='/displaynowplaying' element={<DisplayNowPlaying />}></Route>
          <Route path='/displaypopular' element={<DisplayPopular />} ></Route>
          <Route path='/displaytoprated' element={<DisplayTopRated />} ></Route>
          <Route path='/displayupcoming' element={<DisplayUpcoming />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
