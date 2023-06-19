import React, {useEffect, useState} from 'react'
import movieDB from '../api/movieDB';
import { Movie, MovieDBMoviesResponse } from '../interfaces/movieInterface';

export const useMovies = () => {
  
  const [isLoading, setisLoading] = useState(true)
  const [moviesSate, setMoviesSate] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [], 
  })


  interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
  }

  const getMovies = async () => {

    const nowPlayingPromise = movieDB.get<MovieDBMoviesResponse>('/now_playing');
    const popularPromise = movieDB.get<MovieDBMoviesResponse>('/popular');
    const topRatedPromise = movieDB.get<MovieDBMoviesResponse>('/top_rated');
    const upcomingPromise = movieDB.get<MovieDBMoviesResponse>('/upcoming');
    
    const resp = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setMoviesSate({
      nowPlaying: resp[0].data.results,
      popular: resp[1].data.results,
      topRated: resp[2].data.results,
      upcoming: resp[3].data.results,      
    });

    setisLoading(false);
  }


  useEffect(() => {
    // now_playing
    getMovies();
  }, [])

  return {
    ...moviesSate,
    isLoading,
  }
}
