import {
  HStack,
  List,
  ListItem,
  Spinner,
  Image,
  Button,
  Heading,
} from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'

interface Props {
  onSelectedGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}
const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres()
  if (error) return null
  if (isLoading) return <Spinner />

  return (
    <List>
      {data &&
        data.map((genre: any) => (
          <ListItem key={genre.id}>
            <Button
              fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
              onClick={() => onSelectedGenre(genre)}
              fontSize="lg"
              variant="link">
              {genre.name}
            </Button>
          </ListItem>
        ))}
    </List>
  )
}

export default GenreList
