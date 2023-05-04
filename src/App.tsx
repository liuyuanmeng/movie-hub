import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'



function App() {

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
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="asid" paddingX={5} bg="blue">
          Asid
        </GridItem>
      </Show>

      <GridItem area="main" bg="pink">
        Main
      </GridItem>
    </Grid>
  )
}

export default App
