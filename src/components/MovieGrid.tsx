import useMovies from '../hooks/useMovies'
import { SimpleGrid, Text, Switch } from '@chakra-ui/react'
import MovieCardContainer from './MovieCardContainer'
import MovieCardSkeleton from './MovieCardSkeleton'
import MovieCard from './MovieCard'
import { useState } from 'react'

const MovieGrid = () => {
  // const [endpoint, setEndpoint] = useState('/movie/week')
  const [isWeek, setIsWeek] = useState(false)
  const {
    data: dataWeek,
    error: errorWeek,
    isLoading: isLoadingWeek,
  } = useMovies('/movie/week')
  const {
    data: dataDay,
    error: errorDay,
    isLoading: isLoadingDay,
  } = useMovies('/movie/day')
  // const handleToggle = () => {
  //   setEndpoint((prevEndpoint) =>
  //     prevEndpoint === '/movie/week' ? '/movie/day' : '/movie/week'
  //   )
  // }

  const handleToggle = () => {
    setIsWeek(!isWeek)
  }

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
        spacing={6}
      >
        {isWeek
          ? isLoadingWeek
          : isLoadingDay &&
            skeletons.map((skeleton) => (
              <MovieCardContainer key={skeleton}>
                <MovieCardSkeleton />
              </MovieCardContainer>
            ))}
        {(isWeek ? dataWeek : dataDay).map((movie) => (
          <MovieCardContainer key={movie.id}>
            <MovieCard movie={movie} />
          </MovieCardContainer>
        ))}
      </SimpleGrid>
    </>
  )
}

export default MovieGrid
