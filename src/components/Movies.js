import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div className='moviesDiv'>
        <h1>Movies Page</h1>
        {movies.map((movie, index) => {
          return (
            <div key={index}>
            <p>{movie.title} {movie.time}</p>
            <ul>
              {movie.genres.map((genre, index) => {
                return (
                  <li key={index}>{genre}</li>
                  )
              })}
            </ul>
            </div>
          )
        })}
    </div>
  );
};

export default Movies;
