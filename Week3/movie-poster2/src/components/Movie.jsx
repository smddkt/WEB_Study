import React from 'react'

const img_base = "https://image.tmdb.org/t/p/w500";

export default function Movie({title, poster_path, vote_average}) {
    return (
        <div className = 'movie-container'>
            <img src={img_base + poster_path} alt={title} />
            <div className='movie-info'>
                <h4>{title}</h4>
                <span>⭐{vote_average}</span>
            </div>
        </div>
    )
}