/*
import DisplayNowPlaying from './DisplayNowPlaying.jsx';
import DisplayTopRated from './DisplayTopRated.jsx';
import DisplayPopular from './DisplayPopular.jsx';
import DisplayUpcoming from './DisplayUpcoming.jsx';
import NowPlaying from './api/NowPlaying';
import Popular from './api/Popular';
import TopRated from './api/TopRated';
import Upcoming from './api/Upcoming';
import React, { useState } from 'react';
import Movie from '../components/Movie';

const [info, setInfo] = useState([]);
const img_base = 'https://image.tmdb.org/t/p/w500/';


const Details = {Movie} => {
    useEffect(() => {
        const details = setInfo(()=>
        []);

        return () => 
            {Movie.results.map((item) => (
            <div className='detail-container' key={item.id}>
              <img src={img_base + poster_path} alt={title} />
              <h4>{title}</h4>
              <span>⭐{vote_average}</span>
              <p>개봉일</p>
              <span>{release_date}</span>
              <p>줄거리</p>
              <span>{overview}</span>
            </div>
          ))}
    })
}
*/

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    return (
      <div className='detailed-infos'>
        {data ? (
          <Card id={data.id} name={data.name} email={data.email} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  });
}

function Card({ id, name, email }) {
  return (
    <div className='caed'>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>ID: {id}</p>
    </div>
  );
}

export default DetailPage;

// function DetailPage() {
//   return ({
//     title,
//     poster_path,
//     vote_average,
//     overview,
//     release_date,
//   }
//     <div className='detail-page'>
//   {Movie.results.map((item) => (
//     <div className='detail-container' key={item.id}>
//       <img src={img_base + poster_path} alt={title} />
//       <h4>{title}</h4>
//       <span>⭐{vote_average}</span>
//       <p>개봉일</p>
//       <span>{release_date}</span>
//       <p>줄거리</p>
//       <span>{overview}</span>
//     </div>
//   ))}
//     </div>
//   );
// }

// export default DetailPage;
