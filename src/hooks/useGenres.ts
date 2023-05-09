import useGenreData from './useGenreData'
// import genres from '../data/genres'


export interface Genre {
  id: number
  name: string
}


const useGenres = () => useGenreData('/genre/movie/list')
// use object here in to reduce the impact of this hooker we dont change the object in genrelist object
// const useGenres = () => ({ data: genres, isLoading: false, error: null })

export default useGenres
