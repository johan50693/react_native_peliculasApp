import React, {useEffect, useState} from 'react'
import movieDB from '../api/movieDB';
import { Movie, MovieDBMoviesResponse } from '../interfaces/movieInterface';

export const useMovies = () => {
  
  const [isLoading, setisLoading] = useState(true)
  const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>()
  const [peliculasPopulares, setPeliculasPopulares] = useState<Movie[]>()

  const getMovies = async () => {

    const respNowPlaying = await movieDB.get<MovieDBMoviesResponse>('/now_playing');
    const respPopular = await movieDB.get<MovieDBMoviesResponse>('/popular');
    setPeliculasEnCine(respNowPlaying.data.results);
    setPeliculasPopulares(respPopular.data.results);
    setisLoading(false);
  }


  useEffect(() => {
    // now_playing
    getMovies();
  }, [])

  return {
    peliculasEnCine,
    peliculasPopulares,
    isLoading,
  }
}
