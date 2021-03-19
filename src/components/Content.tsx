
import { MovieCard } from '../components/MovieCard';
import { IGenre } from '../interfaces/entities/GenreInterface'
import { IMovie} from '../interfaces/entities/MovieInterface'

import '../styles/content.scss';
interface IContentProps {
  movies : IMovie[]
  genre: IGenre
}

export function Content({ movies, genre } : IContentProps) {
  return (
    <div className="container">
    <header>
      <span className="category">Categoria:<span> {genre.title}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard 
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value} 
          />
        ))}
      </div>
    </main>
  </div>
  )
}