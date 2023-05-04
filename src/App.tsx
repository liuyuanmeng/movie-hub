import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'



function App() {

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" " main"`,
      }}
      templateColumns={{
        base: '1rf',
        lg: '200px 1fr',
      }}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="main"></GridItem>
    </Grid>
  )
}

export default App
