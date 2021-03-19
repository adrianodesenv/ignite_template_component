import { Button } from '../components/Button';
import { IGenre } from '../interfaces/entities/GenreInterface'
import '../styles/sidebar.scss';

interface ISideBarProps {
  genres: IGenre[];
  selectedGenreId: number;
  handleClickGenreButton: (id: number) => void; 
}

export function SideBar({
  genres,
  handleClickGenreButton,
  selectedGenreId
}: ISideBarProps) {

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickGenreButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}