import React, {useState,useEffect} from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';

interface MovieDetail {
  isLoading: boolean;
  cast: any;
}

export const useMovieDetail = ( movieId: number) => {

  const [state, setState] = useState<MovieDetail>()

  const getmovieDetails = async () => {

    const resp = await movieDB.get<MovieFull>(`${movieId}`);
    console.log(resp.data);
  }

  useEffect(() => {
    getmovieDetails();
  }, [])
  
  return {
    state
  }
}
