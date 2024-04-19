import React from 'react';
import { movies } from './movieapi.js';
import '../App.css'

export default function Modal() {

    return (
        <div className='modal-board'>
            {movies.results.map((item) => (
                <div className= 'modal-container' key={item.id}>
                    <div className='modal-info'>
                        <h4>{item.title}</h4>
                        <span>{item.overview}</span>
                    </div>
                </div>
            ))}
        </div>
    ); 
}  
