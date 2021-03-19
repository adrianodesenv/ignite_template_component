import { useEffect, useState } from 'react';



import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { IGenre } from './interfaces/entities/GenreInterface'
import { IMovie} from './interfaces/entities/MovieInterface'


import { api } from './services/api';

import './styles/global.scss';

const INITIAL_SELECTED_GENRE_ID = 1

export function App() {
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<IGenre>({} as IGenre);
  const [selectedGenreId, setSelectedGenreId] = useState(INITIAL_SELECTED_GENRE_ID);

  useEffect(() => {
    api.get<IGenre[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<IMovie[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<IGenre>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar 
        genres={genres} 
        selectedGenreId={selectedGenreId} 
        handleClickGenreButton={setSelectedGenreId} 
      />

      <Content movies={movies} genre={selectedGenre} />
    </div>
  )
}