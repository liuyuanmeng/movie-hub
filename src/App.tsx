import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import MovieGrid from './components/MovieGrid'
import { useState } from 'react'


export interface MovieQuery {
  searchText: string
}

function App() {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({} as MovieQuery)
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "asid main"`,
      }}
      templateColumns={{
        base: '1rf',
        lg: '200px 1fr',
      }}>
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) =>
            setMovieQuery({ ...movieQuery, searchText })
          }
        />
      </GridItem>

      <Show above="lg">
        <GridItem area="asid" paddingX={5} bg="blue"></GridItem>
      </Show>

      <GridItem area="main" bg="pink">
        <MovieGrid movieQuery={movieQuery}></MovieGrid>
      </GridItem>
    </Grid>
  )
}

export default App
