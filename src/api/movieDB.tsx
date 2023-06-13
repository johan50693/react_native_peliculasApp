import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: { language: 'es-ES', page: '1' },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzA4ZmU3YWQxNGM5MDA2ZjI0MjFiODA4N2RiZmRlYyIsInN1YiI6IjVmZjI2Njg1ZDJmNWI1MDAzZjJlZjdmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zWvTfc7P86sREQR_6Sg5ggRV9lkSyKCamUWq7Af20jI'
  }
});

export default movieDB;
