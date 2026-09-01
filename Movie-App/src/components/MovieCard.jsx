import React from 'react'

const MovieCard = ({movie : 
    {title, poster_path, release_date, original_language, vote_average}}) => {
  return (
    <div className="movie-card">
        <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "/src/assets/no-movie.png"} alt={title} />

        <div className="mt-2">
          <h3>{title}</h3>

          <div className='content'>
            <div className='rating'>
              <img src="/src/assets/star.svg" alt="Rating" />
              <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
            </div>

            <span>•</span>
            <p className="lang">{original_language}</p>

            <span>•</span>
            <p className="year">
              {release_date ? new Date(release_date).getFullYear() : 'N/A'}</p>
          </div>
        </div>
    </div>

    
  )
}

export default MovieCard
