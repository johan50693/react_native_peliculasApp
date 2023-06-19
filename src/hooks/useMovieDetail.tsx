import React, {useState,useEffect} from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';

interface MovieDetail {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetail = ( movieId: number) => {

  const [state, setState] = useState<MovieDetail>({
    isLoading: true,
    movieFull: undefined,
    cast: []
  });

  const getmovieDetails = async () => {

    const movieDetailPromise = movieDB.get<MovieFull>(`${movieId}`);
    const castPromise = movieDB.get<CreditsResponse>(`${movieId}/credits`);

    const [ movieDetailResp,castResp ] = await Promise.all([
      movieDetailPromise,
      castPromise
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailResp.data,
      cast: castResp.data.cast
    });
    
  }

  useEffect(() => {
    getmovieDetails();
  }, [])
  
  return {
    ...state
  }
}
