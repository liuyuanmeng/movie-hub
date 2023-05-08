import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { AxiosRequestConfig, CanceledError } from 'axios'
import useData from './useData'
import { MovieQuery } from '../App'

export interface Movie {
  id: number
  title: string
  poster_path: string
  release_date: string
  vote_average: number
}

// const useMovies = () => useData<Movie>('/movie/day')
// const useMovies = (endpoint: string) => useData<Movie>(endpoint)
const useMovies = (movieQuery: MovieQuery, endpoint: string) =>
  useData<Movie>(
    endpoint,
    {
      params: {},
    },
    [movieQuery]
  )
export default useMovies
