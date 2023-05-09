import useMovies from '../hooks/useMovies'
import { SimpleGrid, Text, Switch, Slider } from '@chakra-ui/react'
import MovieCardContainer from './MovieCardContainer'
import MovieCardSkeleton from './MovieCardSkeleton'
import MovieCard from './MovieCard'
import { useState } from 'react'
import { MovieQuery } from '../App'

interface Props {
  movieQuery: MovieQuery
}

const MovieGrid = ({ movieQuery }: Props) => {
  const [isWeek, setIsWeek] = useState(false)
  const {
    data: dataWeek,
    error: errorWeek,
    isLoading: isLoadingWeek,
  } = useMovies(movieQuery, '/trending/movie/week')
  const {
    data: dataDay,
    error: errorDay,
    isLoading: isLoadingDay,
  } = useMovies(movieQuery, '/trending/movie/day')

  const handleToggle = () => {
    setIsWeek(!isWeek)
  }

  const selectedGenre = movieQuery.genre

  const regexSearch = new RegExp(movieQuery.searchText, 'i')

  // const { data, error, isLoading } = useMovies()
  const skeletons = [1, 2, 3, 4, 5, 6]
  if (errorDay || errorWeek) return <Text>{errorDay}</Text>

  return (
    <>
      <Switch
        isChecked={isWeek}
        onChange={handleToggle}
        size="lg"
        colorScheme="blue"
      />
      <Text marginLeft="4">Show {isWeek ? 'Daily' : 'Weekly'} Movies</Text>

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}>
        {isWeek
          ? isLoadingWeek
          : isLoadingDay &&
            skeletons.map((skeleton) => (
              <MovieCardContainer key={skeleton}>
                <MovieCardSkeleton />
              </MovieCardContainer>
            ))}
        {(isWeek ? dataWeek : dataDay)
          .filter((movie: any) => regexSearch.test(movie.title))
          .filter((movie: any) =>
            selectedGenre?.id
              ? movie.genre_ids.includes(selectedGenre?.id)
              : 1 === 1
          )
          .map((movie: any) => (
            <MovieCardContainer key={movie.id}>
              <MovieCard movie={movie} />
            </MovieCardContainer>
          ))}
      </SimpleGrid>
    </>
  )
}

export default MovieGrid
