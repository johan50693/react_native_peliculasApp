import React, {useEffect, useState} from 'react'
import movieDB from '../api/movieDB';
import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterface';

export const useMovies = () => {
  
  const [isLoading, setisLoading] = useState(true)
  const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>()

  const getMovies = async () => {

    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    setPeliculasEnCine(resp.data.results);
    setisLoading(false);
  }


  useEffect(() => {
    // now_playing
    getMovies();
  }, [])

  return {
    peliculasEnCine,
    isLoading,
  }
}