import {useState} from 'react'
import Movies from '../Movies/Movies'
import Header from '../Header/Header'
import SelectedMovie from '../SelectedMovie/SelectedMovie';
import movieData from '../../dummy';
import './App.css';

function App() {
  const [movies, setMovies] = useState(movieData.movies)
  const [selectedMovie, setSelectedMovie] = useState(movies[0])
  return (
    <div className="app">
      <Header/>
      <Movies className='Movies' movies={movies} setSelectedMovie={setSelectedMovie}/>
      {/* <SelectedMovie  selectedMovie={selectedMovie}/> */}
    </div>
  );
}